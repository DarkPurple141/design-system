/** @jsx jsx */
import { type FC } from 'react'
import { jsx } from '@emotion/core'
import Box, { BoxProps } from '../box'
import { HeadingContext } from '../heading'

type SectionProps = Pick<BoxProps, 'as'>

const Section: FC<SectionProps> = ({ children, as = 'section' }) => {
  // should this just be context?
  return (
    <HeadingContext>
      <Box __debug="Section" as={as}>
        {children}
      </Box>
    </HeadingContext>
  )
}

export default Section
