export const SPACING_SCALE = {
  none: 0,
  sp: '0.25rem', // 4
  sp2x: '0.5rem', // 8
  sp3x: '0.75rem', // 12
  sp3x2: '0.875rem', // 14 px doesn't quite fit in a linear scale
  sp4x: '1rem', // 16
  sp6x: '1.5rem', // 24
  sp8x: '2rem', // 32
} as const

export type Spacing = keyof typeof SPACING_SCALE
