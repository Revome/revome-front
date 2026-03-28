import React from "react";
import { View, Text } from "react-native";
import { Colors } from "@/constants/colors";

// TODO: Replace icon with final Stitch illustration
interface EmptyStateProps {
  title: string;
  subtitle?: string;
}

export function EmptyState({ title, subtitle }: EmptyStateProps) {
  return (
    <View style={{ alignItems: "center", padding: 40, gap: 12 }}>
      {/* Placeholder icon area */}
      <View
        style={{
          width: 72,
          height: 72,
          borderRadius: 36,
          backgroundColor: Colors.surface,
          borderWidth: 1,
          borderColor: Colors.border,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 28 }}>📁</Text>
      </View>
      <Text style={{ color: Colors.text.primary, fontSize: 17, fontWeight: "600" }}>
        {title}
      </Text>
      {subtitle && (
        <Text style={{ color: Colors.text.muted, fontSize: 14, textAlign: "center", lineHeight: 20 }}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}
