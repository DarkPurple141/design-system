/** @jsx jsx */
import { type FC } from 'react'
import { css, jsx } from '@emotion/core'
import { Color } from '../color'
import System from '../system'
import { TYPOPGRAPHY_SIZES, type TypographySize } from '../sizing'
import { token } from '@atlaskit/tokens'

type TextColor = Extract<
  Color,
  | 'color.text.selected'
  | 'color.text.highEmphasis'
  | 'color.text.mediumEmphasis'
  | 'color.text.lowEmphasis'
  | 'color.text.onBold'
  | 'color.text.onBoldWarning'
  | 'color.text.link.resting'
  | 'color.text.link.pressed'
  | 'color.text.brand'
  | 'color.text.warning'
  | 'color.text.danger'
  | 'color.text.success'
  | 'color.text.discovery'
  | 'color.text.disabled'
>

interface TextProps {
  transform?: 'uppercase' | 'capitalize'
  decoration?: 'line-through'
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  color?: TextColor
  size?: TypographySize
  weight?: keyof typeof fontWeight
}

const baseStyles = css({
  color: token('color.text.highEmphasis'),
  fontSize: TYPOPGRAPHY_SIZES.small,
})

const fontWeight = {
  bold: css({
    fontWeight: 600,
  }),
  bolder: css({ fontWeight: 800 }),
}

const Text: FC<TextProps> = ({
  children,
  as = 'span',
  color,
  size,
  transform,
  decoration,
  weight,
}) => {
  return (
    <System
      __debug="Text"
      as={as}
      css={[
        baseStyles,
        transform && css({ textTransform: transform }),
        size && css({ fontSize: TYPOPGRAPHY_SIZES[size] }),
        color && css({ color: token(color) }),
        decoration && css({ textDecoration: decoration }),
        weight && fontWeight[weight],
      ]}
    >
      {children}
    </System>
  )
}

export default Text
