module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'standard',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    'no-console': 'off',
    'no-new': 'off',
    indent: ['error', 2],
    'quote-props': ['error', 'as-needed'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      { before: false, after: true },
    ],
    'promise/catch-or-return': [
      'error',
      {
        allowThen: true,
        terminationMethod: ['catch', 'asCallback', 'finally'],
      },
    ],
  },
};
