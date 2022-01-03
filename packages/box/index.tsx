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
  color?: Color
  inset?: Spacing | [Spacing, Spacing]
  shadow?: Shadow
  borderStyle?: 'rounded' | 'circle'
  // TODO Revisit?
  __style?: CSSProperties
}

const baseStyles = css({
  boxSizing: 'border-box',
})

const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      as = 'div',
      backgroundColor,
      color,
      inset,
      shadow,
      borderStyle,
      width,
      height,
      minHeight,
      minWidth,
      maxHeight,
      maxWidth,
      testId,
      __style,
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
          color && css({ color: token(color) }),
          backgroundColor && css({ backgroundColor: token(backgroundColor) }),
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
        ref={ref}
        {...props}
      />
    )
  }
)

export default Box
