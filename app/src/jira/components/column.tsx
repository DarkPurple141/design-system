/** @jsx jsx */
import { Box, Stack, Heading, Section } from '@ah/design-system'
import { jsx } from '@emotion/core'

import { FC } from 'react'

interface ColumnProps {
  name: string
}

const Column: FC<ColumnProps> = ({ name, children }) => (
  <Box
    as="li"
    paddingBlock="sp3x"
    paddingInline="sp2x"
    backgroundColor="color.background.sunken"
    borderStyle="rounded"
    minHeight="90vh"
    minWidth={280}
    maxWidth={280}
  >
    <Stack space="sp3x">
      <Heading
        size="xsmall"
        color="color.text.mediumEmphasis"
        transform="uppercase"
      >
        {name}
      </Heading>
      <Section>
        <Stack space="sp">{children}</Stack>
      </Section>
    </Stack>
  </Box>
)

export default Column
