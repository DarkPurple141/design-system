/** @jsx jsx */
import { type FC } from 'react'
import { jsx } from '@emotion/core'
import Text, { TextProps } from '../text'

type HeadingProps = TextProps

const Heading: FC<HeadingProps> = ({ children, as }) => {
  return <Text as={as}>{children}</Text>
}

export default Heading
