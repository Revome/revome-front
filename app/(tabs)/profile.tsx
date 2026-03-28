import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Colors } from "@/constants/colors";

// TODO: Replace mock data with real Supabase auth user
const MOCK_USER = {
  name: "Armel",
  email: "user@revome.app",
  credits: 5,
  plan: "Free",
};

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
      }}
    >
      <Text style={{ color: Colors.text.muted, fontSize: 13 }}>{label}</Text>
      <Text style={{ color: Colors.text.primary, fontSize: 14, fontWeight: "600" }}>{value}</Text>
    </View>
  );
}

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 24 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ marginBottom: 28 }}>
          <Text style={{ color: Colors.text.muted, fontSize: 11, fontWeight: "700", letterSpacing: 3, marginBottom: 6 }}>
            ACCOUNT
          </Text>
          <Text style={{ color: Colors.text.primary, fontSize: 26, fontWeight: "700" }}>
            Profile
          </Text>
        </View>

        {/* Avatar placeholder */}
        {/* TODO: Replace with Stitch avatar component */}
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <View
            style={{
              width: 88,
              height: 88,
              borderRadius: 44,
              backgroundColor: Colors.surface,
              borderWidth: 2,
              borderColor: Colors.primary,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
            }}
          >
            <Text style={{ color: Colors.primary, fontSize: 30, fontWeight: "700" }}>
              {MOCK_USER.name[0].toUpperCase()}
            </Text>
          </View>
          <Text style={{ color: Colors.text.primary, fontSize: 18, fontWeight: "700" }}>
            {MOCK_USER.name}
          </Text>
          <Text style={{ color: Colors.text.muted, fontSize: 13 }}>
            {MOCK_USER.email}
          </Text>
        </View>

        {/* Credits card */}
        <Card elevated style={{ marginBottom: 16, alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ color: Colors.text.muted, fontSize: 11, fontWeight: "700", letterSpacing: 2, marginBottom: 8 }}>
            CREDITS REMAINING
          </Text>
          <Text style={{ color: Colors.primary, fontSize: 48, fontWeight: "700" }}>
            {MOCK_USER.credits}
          </Text>
          <Text style={{ color: Colors.text.muted, fontSize: 13 }}>on {MOCK_USER.plan} plan</Text>
          {/* TODO: Upgrade CTA — connect to Stripe/RevenueCat */}
          <Button label="Upgrade Plan" variant="ghost" size="sm" style={{ marginTop: 12 }} onPress={() => {}} />
        </Card>

        {/* Info */}
        <Card style={{ marginBottom: 24 }}>
          <InfoRow label="Name" value={MOCK_USER.name} />
          <InfoRow label="Email" value={MOCK_USER.email} />
          <InfoRow label="Plan" value={MOCK_USER.plan} />
          <View style={{ paddingTop: 12 }}>
            <InfoRow label="Member since" value="March 2026" />
          </View>
        </Card>

        {/* Sign out */}
        {/* TODO: Wire to Supabase signOut() */}
        <Button label="Sign Out" variant="secondary" fullWidth onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
}
