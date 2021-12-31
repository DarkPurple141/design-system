/** @jsx jsx */
import { type FC } from 'react'
import { jsx, css } from '@emotion/core'
import { Spacing, SPACING_SCALE } from '../spacing'

export interface FlexProps {
  gap?: Spacing
  direction?: 'row' | 'column'
  hasScrollY?: boolean
  justifyContent?: 'space-between' | 'space-evenly' | 'space-around' | 'center'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline'
  as?: 'div' | 'ul'
}

const baseStyles = css({
  display: 'flex',
  '& > *': {
    margin: `0 !important`,
  },
})

const Flex: FC<FlexProps> = ({
  children,
  gap,
  direction,
  as: Component = 'div',
  justifyContent,
  alignItems,
}) => {
  return (
    <Component
      css={[
        baseStyles,
        gap && css({ gap: SPACING_SCALE[gap] }),
        direction && css({ flexDirection: direction }),
        justifyContent && css({ justifyContent }),
        alignItems && css({ alignItems }),
      ]}
    >
      {children}
    </Component>
  )
}

export default Flex
