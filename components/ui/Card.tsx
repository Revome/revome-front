import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { Colors } from "@/constants/colors";

interface CardProps extends ViewProps {
  elevated?: boolean;
  children: React.ReactNode;
}

export function Card({ elevated = false, children, style, ...props }: CardProps) {
  const cardStyle: ViewStyle = {
    backgroundColor: elevated ? Colors.surfaceElevated : Colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  };

  return (
    <View style={[cardStyle, style]} {...props}>
      {children}
    </View>
  );
}
