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

interface BoxProps extends DimensionProps, SystemProps {
  children?: ReactNode
  backgroundColor?: Color
  inset?: Spacing | [Spacing, Spacing]
  shadow?: Shadow
  borderStyle?: 'rounded' | 'circle'
  borderColor?: keyof typeof borderColorMap
  // TODO Revisit?
  __style?: CSSProperties
}

const baseStyles = css({
  boxSizing: 'border-box',
})

const borderColorMap = {
  default: css({
    borderColor: token('color.border.neutral'),
  }),
  focus: token('color.border.focus'),
}

const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      as = 'div',
      backgroundColor,
      inset,
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
          inset &&
            css({
              padding:
                typeof inset === 'string'
                  ? SPACING_SCALE[inset]
                  : `${SPACING_SCALE[inset[0]]} ${SPACING_SCALE[inset[1]]}`,
            }),
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
