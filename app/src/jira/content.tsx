/** @jsx jsx */
import { jsx } from '@emotion/core'
import Column from './components/column'
import { Box, Inline, Stack } from '@ah/design-system'

import Button from '@atlaskit/button'
import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs'
import MoreIcon from '@atlaskit/icon/glyph/more'

import PageHeader from '@atlaskit/page-header'
import IssueCard from './components/issue-card'
import issues from './fixtures/issues'

const issuesWithIds = issues
  .map((issue, index) => ({
    ...issue,
    id: `ACME-${100 + index}`,
  }))
  .filter((issue) => issue['Issue Type'] !== 'Sub-task')

const todoIssues = issuesWithIds.filter((issue) => issue.Status === 'To Do')
const inProgressIssues = issuesWithIds.filter(
  (issue) => issue.Status === 'In Progress'
)

const doneIssues = issuesWithIds.filter((issue) => issue.Status === 'Done')

const Content = () => (
  <Box inset={['large', 'xlarge']}>
    <Stack space="medium">
      <PageHeader
        breadcrumbs={
          <Breadcrumbs onExpand={() => {}}>
            <BreadcrumbsItem text="Project" key="Project" />
            <BreadcrumbsItem text="Acme" key="Acme" />
          </Breadcrumbs>
        }
        actions={
          <Inline>
            <Button iconBefore={<MoreIcon label="more" />} />
          </Inline>
        }
      >
        ACME Board
      </PageHeader>
      <Inline space="small-medium" as="ul">
        <Column name={`To do ${todoIssues.length}`}>
          {todoIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              priority={issue.Priority}
              ticket={issue.id}
              tags={issue.Labels}
              status={issue.Status}
            >
              {issue.Summary}
            </IssueCard>
          ))}
        </Column>
        <Column name={`In progress ${inProgressIssues.length}`}>
          {inProgressIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              priority={issue.Priority}
              ticket={issue.id}
              tags={issue.Labels}
              status={issue.Status}
            >
              {issue.Summary}
            </IssueCard>
          ))}
        </Column>
        <Column name={`Done ${doneIssues.length}`}>
          {doneIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              priority={issue.Priority}
              ticket={issue.id}
              tags={issue.Labels}
              status={issue.Status}
            >
              {issue.Summary}
            </IssueCard>
          ))}
        </Column>
      </Inline>
    </Stack>
  </Box>
)

export default Content
