import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Colors } from "@/constants/colors";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
}

const sizeStyles: Record<ButtonSize, { container: ViewStyle; text: TextStyle }> = {
  sm: { container: { paddingVertical: 8, paddingHorizontal: 16 }, text: { fontSize: 13 } },
  md: { container: { paddingVertical: 14, paddingHorizontal: 24 }, text: { fontSize: 15 } },
  lg: { container: { paddingVertical: 18, paddingHorizontal: 32 }, text: { fontSize: 17 } },
};

const variantStyles: Record<ButtonVariant, { container: ViewStyle; text: TextStyle }> = {
  primary: {
    container: { backgroundColor: Colors.primary },
    text: { color: "#000000", fontWeight: "700" },
  },
  secondary: {
    container: { backgroundColor: Colors.surface, borderWidth: 1, borderColor: Colors.border },
    text: { color: Colors.text.primary, fontWeight: "600" },
  },
  ghost: {
    container: { backgroundColor: "transparent" },
    text: { color: Colors.primary, fontWeight: "600" },
  },
};

export function Button({
  label,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const { container: sizeContainer, text: sizeText } = sizeStyles[size];
  const { container: variantContainer, text: variantText } = variantStyles[variant];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={[
        { borderRadius: 12, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 8 },
        sizeContainer,
        variantContainer,
        fullWidth && { width: "100%" },
        (disabled || loading) && { opacity: 0.5 },
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={variantText.color as string} />
      ) : (
        <>
          {leftIcon}
          <Text style={[{ letterSpacing: 0.3 }, sizeText, variantText]}>{label}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
