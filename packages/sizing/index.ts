import { SPACING_SCALE } from '../spacing'

export const TYPOPGRAPHY_SIZES = {
  xsmall: SPACING_SCALE.small,
  small: SPACING_SCALE['small-medium'],
  medium: SPACING_SCALE.medium,
  large: SPACING_SCALE.large,
  xlarge: SPACING_SCALE.xlarge,
}

export type TypographySize = keyof typeof TYPOPGRAPHY_SIZES
