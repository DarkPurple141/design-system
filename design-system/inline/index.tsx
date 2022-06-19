/** @jsx jsx */
import { type FC } from 'react'
import { jsx } from '@emotion/core'
import { Spacing } from '../spacing'
import Flex, { FlexProps } from '../flex'

interface BaseProps {
  space?: Spacing
  align?: FlexProps['alignItems']
  justifyContent?: FlexProps['justifyContent']
}

type InlineProps = Pick<FlexProps, 'as'> & BaseProps

const Inline: FC<InlineProps> = ({
  children,
  space,
  align,
  as,
  justifyContent,
}) => {
  return (
    <Flex
      __debug="Inline"
      direction="row"
      gap={space}
      justifyContent={justifyContent}
      alignItems={align}
      as={as}
    >
      {children}
    </Flex>
  )
}

export default Inline
