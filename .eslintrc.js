module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Tell eslint-plugin-react to autodetect React version
    },
  },
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
    'simple-import-sort/sort': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/jsx-no-literals': 2,
  },
};
