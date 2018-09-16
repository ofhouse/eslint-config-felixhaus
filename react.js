module.exports = {
  extends: ['prettier/react', 'plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  plugins: ['react', 'flowtype'],
};
