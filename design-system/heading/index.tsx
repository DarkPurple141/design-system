/** @jsx jsx */
import { createContext, useContext, type FC } from 'react'
import { jsx, css } from '@emotion/core'
import Text, { TextProps } from '../text'

type HeadingElement = 1 | 2 | 3 | 4 | 5 | 6

const __HeadingContext = createContext<HeadingElement>(1)

export const useHeadingElement = (): HeadingElement => {
  return Math.min(useContext(__HeadingContext) || 1, 6) as HeadingElement
}

export const HeadingContext: FC = ({ children }) => {
  const parentHeadingLevel = useHeadingElement()
  const headingLevel = (
    parentHeadingLevel + 1 > 6 ? parentHeadingLevel : parentHeadingLevel + 1
  ) as HeadingElement
  return (
    <__HeadingContext.Provider value={headingLevel}>
      {children}
    </__HeadingContext.Provider>
  )
}

type HeadingProps = { level?: keyof typeof levelMap } & TextProps

const levelMap = {
  h500: css({}),
  h600: css({}),
}

const Heading: FC<HeadingProps> = (props) => {
  const headingElement = useHeadingElement()

  return <Text as={`h${headingElement}`} {...props} />
}

export default Heading
