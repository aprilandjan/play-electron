// see https://github.com/electron-react-boilerplate/eslint-config-erb/blob/master/index.js
module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    'plugin:prettier/recommended',
    require.resolve('eslint-config-prettier/react')
  ],
  plugins: ['import', 'promise', 'compat', 'react'],
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    'arrow-parens': 'off',
    'compat/compat': 'error',
    'consistent-return': 'off',
    'comma-dangle': 'off',
    'generator-star-spacing': 'off',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'prefer-template': 'off',
    // 'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'prettier/prettier': 'off',
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'react/static-property-placement': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ],
    'react/jsx-no-bind': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off'
  }
};
