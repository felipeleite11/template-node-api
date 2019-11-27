module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'no-unused-vars': ['warn', { 'argsIgnorePattern': 'next' }],
    'semi': ['error', 'never'],
    'linebreak-style': 'off',
    'no-invalid-regexp': 'error',
    'quotes': ['error', 'single'],
    'no-console': 'off',
    'comma-dangle': ['error', 'never'],
    'no-mixed-spaces-and-tabs': 'error',
    'indent': ['warn', 4, { 'SwitchCase': 1 }],
    'no-tabs': 'off',
    'no-trailing-spaces': 'off',
    'keyword-spacing': 'off'
  },
};
