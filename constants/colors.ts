// TODO: Replace with final Stitch design tokens
export const Colors = {
  background: "#0A0A0A",
  primary: "#C9A84C",    // Gold accent
  surface: "#1A1A1A",
  surfaceElevated: "#242424",
  border: "#2A2A2A",
  text: {
    primary: "#FFFFFF",
    secondary: "#AAAAAA",
    muted: "#666666",
  },
  status: {
    success: "#4CAF50",
    error: "#EF5350",
    warning: "#FF9800",
  },
} as const;

export type ColorKey = keyof typeof Colors;
