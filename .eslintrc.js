module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    es2017: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/promise-function-async': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'warn',
      {
        before: true,
        after: true,
        overrides: {
          colon: {
            before: false,
            after: true,
          },
        },
      },
    ],
    '@typescript-eslint/await-thenable': 'warn',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/strict-boolean-expressions': [
      'warn',
      {
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true,
      },
    ],
    indent: 'off',
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/class-name-casing': ['off'],
    '@typescript-eslint/interface-name-prefix': [
      'off',
      {
        prefixWithI: 'never',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    semi: 'off',
    '@typescript-eslint/semi': ['warn'],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
    'no-param-reassign': 'warn',
    'function-paren-newline': ['error', 'consistent'],
    'constructor-super': 'warn',
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    curly: 'warn',
    'eol-last': 'warn',
    'guard-for-in': 'warn',
    'no-cond-assign': ['warn', 'always'],
    'no-duplicate-case': 'warn',
    'no-redeclare': 'warn',
    'no-return-await': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    'no-throw-literal': 'warn',
    'no-fallthrough': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    'no-var': 'warn',
    radix: 'warn',
    eqeqeq: ['warn', 'always'],
    'no-useless-constructor': 'off',
    'max-classes-per-file': ['off'],
    'max-len': [
      'off',
      {
        code: 120,
        comments: 120,
      },
    ],
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': ['error', 'always'],
    'no-trailing-spaces': 'warn',
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'space-before-function-paren': ['off'],
    // 'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['warn', 'never'],
    'no-useless-escape': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-extra-semi': 'off',
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] }],
    'import/no-unresolved': ['off'],
    'no-empty': 'off',
    'no-constant-condition': 'off',
  },
};
