/** @jsx jsx */
import { type FC } from 'react'
import { jsx } from '@emotion/core'
import { Spacing } from '../spacing'
import Flex, { FlexProps } from '../flex'

interface InlineProps {
  space?: Spacing
  align?: FlexProps['alignItems']
}

const Inline: FC<InlineProps> = ({ children, space, align }) => {
  return (
    <Flex direction="row" gap={space} alignItems={align} __debug="Inline">
      {children}
    </Flex>
  )
}

export default Inline
