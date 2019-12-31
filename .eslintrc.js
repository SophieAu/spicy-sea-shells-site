module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
}

/*
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks', 'simple-import-sort', 'json'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable rules from @typescript-eslint/eslint-plugin that conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Keep this line last in the array.
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
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: ['key', 'ref'],
      },
    ],
    'react/prop-types': false,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/sort': 'error',
    '@typescript-eslint/explicit-function-return-type': false,
    '@typescript-eslint/explicit-member-accessibility': false,
    '@typescript-eslint/no-empty-function': false,
    '@typescript-eslint/no-non-null-assertion': false,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': false,
  },
}
*/
