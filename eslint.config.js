module.exports = [
  {
    files: ['*/.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        console: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
