module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@atlaskit/design-system/recommended'],
  plugins: ['@atlaskit/design-system', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@atlaskit/design-system/ensure-design-token-usage': 'error',
  },
}
