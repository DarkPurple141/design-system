import { SPACING_SCALE } from '../spacing'

export const TYPOPGRAPHY_SIZES = {
  xsmall: SPACING_SCALE.sp3x,
  small: SPACING_SCALE.sp3x2,
  medium: SPACING_SCALE.sp4x,
  large: SPACING_SCALE.sp6x,
  xlarge: SPACING_SCALE.sp8x,
}

export type TypographySize = keyof typeof TYPOPGRAPHY_SIZES
