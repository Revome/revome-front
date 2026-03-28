import React from "react";
import { View, Text, ViewStyle } from "react-native";
import { Colors } from "@/constants/colors";

// TODO: Remove once real screen design from Stitch is implemented
interface PlaceholderScreenProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PlaceholderScreen({ title, description, children }: PlaceholderScreenProps) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      {/* Gold accent line — placeholder for top decoration */}
      <View
        style={{
          width: 40,
          height: 3,
          backgroundColor: Colors.primary,
          borderRadius: 2,
          marginBottom: 24,
        }}
      />
      <Text
        style={{
          color: Colors.text.primary,
          fontSize: 24,
          fontWeight: "700",
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        {title}
      </Text>
      {description && (
        <Text
          style={{
            color: Colors.text.muted,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          {description}
        </Text>
      )}
      {children}
    </View>
  );
}
