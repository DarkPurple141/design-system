/** @jsx jsx */
import { type FC } from 'react'
import { jsx } from '@emotion/core'
import { Spacing } from '../spacing'
import Flex from '../flex'
interface StackProps {
  space?: Spacing
  as?: 'ul' | 'div'
}

const Stack: FC<StackProps> = ({ children, space, as }) => {
  return (
    <Flex direction="column" gap={space} as={as} __debug="Stack">
      {children}
    </Flex>
  )
}

export default Stack
