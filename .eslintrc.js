module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'nonblock-statement-body-position': 'off',
    'import/prefer-default-export': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'no-case-declarations': 'off',
    'func-names': 'off',
    'no-plusplus': 'off',
    'arrow-body-style': 'off',
  },
};
