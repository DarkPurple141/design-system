/** @jsx jsx */
import { jsx } from '@emotion/core'
import '@atlaskit/css-reset'

import { render } from 'react-dom'
import Jira from './jira'

const app = document.getElementById('root')

render(<Jira />, app)
