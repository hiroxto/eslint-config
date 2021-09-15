module.exports = {
  extends: ['plugin:vue/strongly-recommended'],
  rules: {
    'vue/script-indent': ['error', 2, {baseIndent: 0, switchCase: 1}],
    'vue/html-indent': [
      'error',
      2,
      {attribute: 1, closeBracket: 0, baseIndent: 1},
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {singleline: 'never', multiline: 'always'},
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-self-closing': [
      'error',
      {html: {void: 'never', normal: 'never', component: 'never'}},
    ],
    'vue/max-attributes-per-line': ['error', {singleline: 2}],
    'vue/this-in-template': ['error'],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
};
