module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  globals: {
    __dirname: 1,
    API_URL: 1,
    expect: 1
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-console': 1,
    'no-debugger': 1,
    'no-var': 1,
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': [ 1, 'unix' ],
    'quotes': [ 1, 'single' ],
    'semi': [ 1, 'always' ],
    'no-trailing-spaces': 0,
    'no-unused-vars': 1,
    'no-underscore-dangle': 0,
    'no-alert': 0,
    'no-lone-blocks': 0,
    'react/display-name': [ 1, {'ignoreTranspilerName': false }],
    'react/forbid-prop-types': [1, {'forbid': ['any']}],
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': 1,
    'react/jsx-indent-props': 0,
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-set-state': 0,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1
  }
};
