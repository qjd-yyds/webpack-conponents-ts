module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off', // 关闭js规则
    '@typescript-eslint/no-unused-vars': ['error'], // 调用ts规则
  },
};
