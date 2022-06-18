/** @jsx jsx */
import { type FC } from 'react'
import { jsx } from '@emotion/core'
import { Spacing } from '../spacing'
import Flex, { FlexProps } from '../flex'

interface BaseProps {
  space?: Spacing
  align?: FlexProps['alignItems']
}

type InlineProps = Pick<FlexProps, 'as'> & BaseProps

const Inline: FC<InlineProps> = ({ children, space, align, as }) => {
  return (
    <Flex
      __debug="Inline"
      direction="row"
      gap={space}
      alignItems={align}
      as={as}
    >
      {children}
    </Flex>
  )
}

export default Inline
