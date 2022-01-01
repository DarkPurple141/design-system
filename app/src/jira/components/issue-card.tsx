/** @jsx jsx */
import { Card, Stack, Text, Flex, Inline } from '@ah/design-system'
import { jsx } from '@emotion/core'

import HighestPriority from '@atlaskit/icon-priority/glyph/priority-highest'
import HighPriority from '@atlaskit/icon-priority/glyph/priority-high'
import MediumPriority from '@atlaskit/icon-priority/glyph/priority-medium'
import LowPriority from '@atlaskit/icon-priority/glyph/priority-low'
import LowestPriority from '@atlaskit/icon-priority/glyph/priority-lowest'
import type { FC } from 'react'
import { SimpleTag } from '@atlaskit/tag'
import Avatar from '@atlaskit/avatar'

const priorityIcons = {
  Lowest: LowestPriority,
  Low: LowPriority,
  Medium: MediumPriority,
  High: HighPriority,
  Highest: HighestPriority,
}

interface IssueCardProps {
  ticket: string
  priority: keyof typeof priorityIcons
  tags?: readonly string[]
}

const tagColors = ['blue', 'green', 'purple', 'red'] as const

const IssueCard: FC<IssueCardProps> = ({
  ticket,
  priority,
  children,
  tags,
}) => {
  const Priority = priorityIcons[priority]
  return (
    <Card>
      <Stack space="small">
        <Text>{children}</Text>
        {tags && (
          <Inline space="xsmall">
            {tags.map((tag) => {
              const hash = tag.charCodeAt(0) % tagColors.length
              return <SimpleTag color={tagColors[hash]} key={tag} text={tag} />
            })}
          </Inline>
        )}
        <Flex justifyContent="space-between" alignItems="center">
          <Text
            size="xsmall"
            color="color.text.mediumEmphasis"
            transform="uppercase"
          >
            {ticket}
          </Text>
          <Inline space="xsmall" align="center">
            <Priority size="small" label={priority} />
            <Avatar size="small" />
          </Inline>
        </Flex>
      </Stack>
    </Card>
  )
}

export default IssueCard
