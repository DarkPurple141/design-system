/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  PageLayout,
  TopNavigation,
  LeftSidebar,
  Main,
  Content,
} from '@atlaskit/page-layout'
import {
  AtlassianNavigation,
  ProductHome,
  Create,
  PrimaryDropdownButton,
} from '@atlaskit/atlassian-navigation'
import { JiraIcon, JiraLogo } from '@atlaskit/logo'
import {
  SideNavigation,
  LinkItem,
  Section,
  NavigationHeader,
} from '@atlaskit/side-navigation'
import BacklogIcon from '@atlaskit/icon/glyph/backlog'
import RoadmapIcon from '@atlaskit/icon/glyph/roadmap'
import BoardIcon from '@atlaskit/icon/glyph/board'
import CodeIcon from '@atlaskit/icon/glyph/code'
import DeployIcon from '@atlaskit/icon/glyph/upload'
import OnCallIcon from '@atlaskit/icon/glyph/hipchat/dial-out'
import { Box } from '@ah/design-system'
import { Skeleton } from '@atlaskit/icon'
import Body from './content'

const App = () => (
  <PageLayout>
    <TopNavigation>
      <AtlassianNavigation
        renderProductHome={() => (
          <ProductHome icon={JiraIcon} logo={JiraLogo} />
        )}
        label="Nav"
        primaryItems={[
          <PrimaryDropdownButton>Your work</PrimaryDropdownButton>,
          <PrimaryDropdownButton>Recent</PrimaryDropdownButton>,
        ]}
        renderCreate={() => <Create text="Create" onClick={() => {}} />}
      ></AtlassianNavigation>
    </TopNavigation>
    <Content>
      <LeftSidebar>
        <SideNavigation label="Project navigation" testId="side-navigation">
          <Box inset={['none', 'medium']}>
            <NavigationHeader>
              <LinkItem
                iconBefore={<Skeleton />}
                description="Software project"
              >
                ACME
              </LinkItem>
            </NavigationHeader>
            <Section title="Planning">
              <LinkItem iconBefore={<RoadmapIcon label="" />}>Roadmap</LinkItem>
              <LinkItem iconBefore={<BacklogIcon label="" />}>Backlog</LinkItem>
              <LinkItem isSelected iconBefore={<BoardIcon label="" />}>
                Board
              </LinkItem>
            </Section>
            <Section title="Development">
              <LinkItem iconBefore={<CodeIcon label="" />}>Code</LinkItem>
            </Section>
            <Section title="Operations">
              <LinkItem iconBefore={<DeployIcon label="" />}>
                Deployments
              </LinkItem>
              <LinkItem iconBefore={<OnCallIcon label="" />}>On-call</LinkItem>
            </Section>
          </Box>
        </SideNavigation>
      </LeftSidebar>
      <Main>
        <Body />
      </Main>
    </Content>
  </PageLayout>
)

export default App
