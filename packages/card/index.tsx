/** @jsx jsx */
import { type FC } from 'react'
import { jsx } from '@emotion/core'
import Box from '../box'

const Card: FC = ({ children }) => {
  return (
    <Box
      as="article"
      shadow="shadow.card"
      borderStyle="rounded"
      backgroundColor="color.background.card"
      inset="small"
    >
      {children}
    </Box>
  )
}

export default Card
