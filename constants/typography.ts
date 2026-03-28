// TODO: Replace with final Stitch typography tokens
export const Typography = {
  fontFamily: {
    regular: undefined, // Will be set once custom fonts are added
    medium: undefined,
    bold: undefined,
  },
  fontSize: {
    xs: 11,
    sm: 13,
    base: 15,
    lg: 17,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;
