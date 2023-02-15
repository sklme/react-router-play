module.exports = {
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:@iskl/ts-typecheck', // 或者 plugin:@iskl/eslint-plugin/vue-ts-typecheck
  ],
  overrides: [
    {
      // 根目录层级的*.ts没有纳入tsconfig的project，所以在这里设置为project为null，不进行type checking
      files: ['./*.ts', './scripts/*.ts'],
      env: {
        node: true,
      },
      parserOptions: {
        project: null,
      },
    },
  ],
};
