/** @jsx jsx */
import { Card, Stack, Text, Inline, Heading } from '@ah/design-system'
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
  status: string
  priority: keyof typeof priorityIcons
  tags?: readonly string[]
}

const tagColors = ['blue', 'green', 'purple', 'red'] as const

const IssueCard: FC<IssueCardProps> = ({
  ticket,
  priority,
  children,
  tags,
  status,
}) => {
  const Priority = priorityIcons[priority]
  return (
    <Card>
      <Stack space="sp2x">
        <Heading>{children}</Heading>
        {tags && (
          <Inline space="sp">
            {tags.map((tag) => {
              const hash = tag.charCodeAt(0) % tagColors.length
              return <SimpleTag color={tagColors[hash]} key={tag} text={tag} />
            })}
          </Inline>
        )}
        <Inline justifyContent="space-between" align="center">
          <Inline space="sp" align="center">
            <Text
              size="xsmall"
              weight="bold"
              color="color.text.lowEmphasis"
              transform="uppercase"
              decoration={status === 'Done' ? 'line-through' : undefined}
            >
              {ticket}
            </Text>
          </Inline>
          <Inline space="sp" align="center">
            <Priority label={priority} />
            <Avatar size="small" />
          </Inline>
        </Inline>
      </Stack>
    </Card>
  )
}

export default IssueCard
