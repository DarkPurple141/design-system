import { token } from '@atlaskit/tokens'

export type Color = Parameters<typeof token>[0]
export type Shadow = Extract<Color, 'shadow.card' | 'shadow.overlay'>
