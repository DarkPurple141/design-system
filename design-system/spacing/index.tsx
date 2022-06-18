export const SPACING_SCALE = {
  none: 0,
  base: '0.25rem', // 4
  xsmall: '0.5rem', // 8
  small: '0.75rem', // 12
  'small-medium': '0.875rem', // 14 px doesn't quite fit in a linear scale
  medium: '1rem', // 16
  large: '1.5rem', // 24
  xlarge: '2rem', // 32
} as const

export type Spacing = keyof typeof SPACING_SCALE
