/** @jsx jsx */
import { type FC } from 'react'
import { jsx, css } from '@emotion/core'
import { Spacing, SPACING_SCALE } from '../spacing'
import System, { SystemProps } from '../system'

export interface FlexProps extends Pick<SystemProps, 'testId' | '__debug'> {
  gap?: Spacing
  direction?: 'row' | 'column'
  hasScrollY?: boolean
  justifyContent?: 'space-between' | 'space-evenly' | 'space-around' | 'center'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline'
  as?: 'div' | 'ul' | 'ol'
}

const baseStyles = css({
  display: 'flex',
  margin: 0,
  padding: 0,
  '& > *': {
    margin: `0 !important`,
  },
})

const Flex: FC<FlexProps> = ({
  children,
  gap,
  direction,
  as = 'div',
  __debug,
  justifyContent,
  alignItems,
}) => {
  return (
    <System
      as={as}
      __debug={__debug}
      css={[
        baseStyles,
        gap && css({ gap: SPACING_SCALE[gap] }),
        direction && css({ flexDirection: direction }),
        justifyContent && css({ justifyContent }),
        alignItems && css({ alignItems }),
      ]}
    >
      {children}
    </System>
  )
}

export default Flex
