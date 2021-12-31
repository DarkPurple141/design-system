/** @jsx jsx */
import {
  type ElementType,
  type ReactNode,
  forwardRef,
  CSSProperties,
} from 'react'
import { token } from '@atlaskit/tokens'
import { jsx, css } from '@emotion/core'
import { Color, Shadow } from '../color'
import { Spacing, SPACING_SCALE } from '../spacing'

interface DimensionProps {
  width?: CSSProperties['width']
  minWidth?: CSSProperties['minWidth']
  maxWidth?: CSSProperties['maxWidth']
  height?: CSSProperties['height']
  minHeight?: CSSProperties['minHeight']
  maxHeight?: CSSProperties['maxHeight']
}

interface BoxProps extends DimensionProps {
  as?: ElementType
  children?: ReactNode
  backgroundColor?: Color
  color?: Color
  inset?: Spacing | [Spacing, Spacing]
  shadow?: Shadow
  borderStyle?: 'rounded' | 'circle'
  __style?: CSSProperties
}

const baseStyles = css({
  boxSizing: 'border-box',
})

const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      as: Component = 'div',
      backgroundColor,
      color,
      inset,
      shadow,
      borderStyle,
      width,
      height,
      __style,
      ...props
    },
    ref
  ) => {
    return (
      <Component
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
        style={{ width, height, ...__style }}
        ref={ref}
        {...props}
      />
    )
  }
)

export default Box
