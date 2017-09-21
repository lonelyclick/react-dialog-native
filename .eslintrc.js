module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb',
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': './build/webpack.config.js'
      },
    }
  },
  'rules': {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-mixed-operators': 0,
    'import/prefer-default-export': 0,
    'max-len': ['error', 120, 4],
    'no-continue': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  }
}
