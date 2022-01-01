/** @jsx jsx */
import { Box, Stack, Text } from '@ah/design-system'
import { jsx } from '@emotion/core'

import { FC } from 'react'

interface ColumnProps {
  name: string
}

const Column: FC<ColumnProps> = ({ name, children }) => (
  <Box
    inset={['medium', 'small']}
    backgroundColor="color.background.sunken"
    borderStyle="rounded"
    minHeight="90vh"
    minWidth={280}
    maxWidth={280}
  >
    <Stack space="medium">
      <Text
        size="xsmall"
        color="color.text.mediumEmphasis"
        transform="uppercase"
      >
        {name}
      </Text>
      <Stack space="small">{children}</Stack>
    </Stack>
  </Box>
)

export default Column
