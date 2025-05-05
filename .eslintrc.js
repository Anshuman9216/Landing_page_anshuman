module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'next/core-web-vitals', // Adds Next.js-specific linting rules
      'prettier', // If you're using Prettier
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'react/react-in-jsx-scope': 'off', // For Next.js to allow JSX without React in scope
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    ignorePatterns: ['node_modules/', '.next/'],
  };
  