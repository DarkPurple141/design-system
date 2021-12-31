export const SPACING_SCALE = {
  none: 0,
  xsmall: '0.25rem',
  small: '0.5rem',
  medium: '1rem',
  large: '1.5rem',
  xlarge: '2rem',
} as const

export type Spacing = keyof typeof SPACING_SCALE
