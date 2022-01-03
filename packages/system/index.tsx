/** @jsx jsx */
import { forwardRef, ElementType, HTMLAttributes } from 'react'
import { css, jsx } from '@emotion/core'
import { token } from '@atlaskit/tokens'

export interface SystemProps {
  /**
   * Hook for automated testing. Will be attached to the DOM as `data-testid`.
   */
  testId?: string
  /**
   * An internal descriptor used to display meta information if ENV is set to DEBUG.
   */
  __debug?: string
  /**
   * What HTML element the component will render as.
   */
  as?: ElementType
}

const debugStyle = css({
  position: 'relative',
  '::after': {
    boxSizing: 'border-box',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '1.5rem',
    lineHeight: 3,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    content: `attr(data-debug)`,
    opacity: 0,
    border: '2px dashed',
  },
  ':focus': {
    outline: 'none',
    '::after': {
      zIndex: 2,
      opacity: 1,
      color: token('utility.UNSAFE_util.MISSING_TOKEN'),
      borderColor: token('utility.UNSAFE_util.MISSING_TOKEN'),
    },
  },
})

const System = forwardRef<unknown, SystemProps & HTMLAttributes<HTMLElement>>(
  ({ testId, children, __debug, as: Component = 'div', ...rest }, ref) => {
    return (
      <Component
        data-testid={testId}
        tabIndex={process.env.DEBUG && __debug && 0}
        data-debug={process.env.DEBUG && __debug}
        css={process.env.DEBUG && __debug && debugStyle}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

export default System
