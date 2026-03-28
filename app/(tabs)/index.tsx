import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Colors } from "@/constants/colors";

// TODO: Connect to AI replanification service once backend is ready
export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "Camera access is needed to take photos.");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      quality: 0.9,
      allowsEditing: false,
    });
    if (!result.canceled) {
      // TODO: Navigate to processing screen with result.assets[0]
      Alert.alert("Photo captured", "AI processing coming soon.");
    }
  };

  const handlePickFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "Photo library access is needed.");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.9,
      allowsEditing: false,
      allowsMultipleSelection: false,
    });
    if (!result.canceled) {
      // TODO: Navigate to processing screen with result.assets[0]
      Alert.alert("Image selected", "AI processing coming soon.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={{ flex: 1, padding: 24 }}>
        {/* Header */}
        <View style={{ marginTop: 16, marginBottom: 40 }}>
          {/* TODO: Replace with Stitch logo */}
          <Text style={{ color: Colors.primary, fontSize: 11, fontWeight: "700", letterSpacing: 3, marginBottom: 8 }}>
            REVOME
          </Text>
          <Text style={{ color: Colors.text.primary, fontSize: 28, fontWeight: "700", lineHeight: 34 }}>
            Reimagine your{"\n"}space.
          </Text>
        </View>

        {/* Main CTA card */}
        {/* TODO: Replace with Stitch hero illustration */}
        <Card elevated style={{ marginBottom: 16, alignItems: "center", paddingVertical: 40 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: Colors.background,
              borderWidth: 1,
              borderColor: Colors.border,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 32 }}>📷</Text>
          </View>
          <Text style={{ color: Colors.text.primary, fontSize: 16, fontWeight: "600", marginBottom: 4 }}>
            Start a new project
          </Text>
          <Text style={{ color: Colors.text.muted, fontSize: 13, textAlign: "center", lineHeight: 18 }}>
            Take or import a photo of your room{"\n"}to get AI redesign suggestions
          </Text>
        </Card>

        {/* Action buttons */}
        <View style={{ gap: 12 }}>
          <Button
            label="Take a Photo"
            variant="primary"
            size="lg"
            fullWidth
            onPress={handleTakePhoto}
            loading={isLoading}
          />
          <Button
            label="Import from Gallery"
            variant="secondary"
            size="lg"
            fullWidth
            onPress={handlePickFromGallery}
          />
        </View>

        {/* Bottom hint */}
        <Text style={{ color: Colors.text.muted, fontSize: 12, textAlign: "center", marginTop: 24, lineHeight: 18 }}>
          {/* TODO: Show remaining credits from Supabase */}
          5 free credits remaining
        </Text>
      </View>
    </SafeAreaView>
  );
}
