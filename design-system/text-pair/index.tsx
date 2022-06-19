/** @jsx jsx */
import { ReactNode, type FC } from 'react'
import { jsx } from '@emotion/core'
import { HeadingContext } from '../heading'

type TextPairProps = {
  heading: ReactNode
}

const TextPair: FC<TextPairProps> = ({ children, heading }) => {
  return (
    <HeadingContext>
      {heading}
      <HeadingContext>{children}</HeadingContext>
    </HeadingContext>
  )
}

export default TextPair
