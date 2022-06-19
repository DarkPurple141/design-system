/** @jsx jsx */
import { type ReactNode, forwardRef, CSSProperties } from 'react'
import { token } from '@atlaskit/tokens'
import { jsx, css } from '@emotion/core'
import { Color, Shadow } from '../color'
import { Spacing, SPACING_SCALE } from '../spacing'
import System, { SystemProps } from '../system'

type DimensionProps = Pick<
  CSSProperties,
  'width' | 'maxWidth' | 'minWidth' | 'height' | 'minHeight' | 'maxHeight'
>

export interface BoxProps extends DimensionProps, SystemProps {
  children?: ReactNode
  backgroundColor?: Color
  paddingInline?: Spacing
  paddingBlock?: Spacing
  shadow?: Shadow
  borderStyle?: 'rounded' | 'circle'
  borderColor?: keyof typeof borderColorMap
  // TODO Revisit?
  __style?: CSSProperties
}

const baseStyles = css({
  listStyle: 'none',
  boxSizing: 'border-box',
})

const borderColorMap = {
  default: css({
    borderColor: token('color.border.neutral'),
  }),
  focus: token('color.border.focus'),
}

const generateSpacingStyleMap = (property: keyof CSSProperties) =>
  Object.fromEntries(
    (Object.keys(SPACING_SCALE) as Spacing[]).map((key) => [
      key,
      css({ [property]: SPACING_SCALE[key] }),
    ])
  )

const paddingBlockMap = generateSpacingStyleMap('paddingBlock')
const paddingInlineMap = generateSpacingStyleMap('paddingInline')

const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      as = 'div',
      backgroundColor,
      paddingBlock,
      paddingInline,
      shadow,
      borderColor,
      borderStyle,
      width,
      height,
      minHeight,
      minWidth,
      maxHeight,
      maxWidth,
      testId,
      __style,
      __debug = 'Box',
      ...props
    },
    ref
  ) => {
    return (
      <System
        as={as}
        css={[
          baseStyles,
          borderStyle &&
            css({ borderRadius: borderStyle === 'circle' ? '100%' : 3 }),
          shadow && css({ boxShadow: token(shadow) }),
          backgroundColor && css({ backgroundColor: token(backgroundColor) }),
          borderColor && borderColorMap[borderColor],
          paddingInline && paddingInlineMap[paddingInline],
          paddingBlock && paddingBlockMap[paddingBlock],
        ]}
        style={{
          width,
          height,
          minHeight,
          minWidth,
          maxHeight,
          maxWidth,
          ...__style,
        }}
        __debug={__debug}
        ref={ref}
        {...props}
      />
    )
  }
)

export default Box
