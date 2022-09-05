module.exports = {
  parser: '@typescript-eslint/parser',

  env: {
    node: true,
    es6: true,
    es2020: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],

  plugins: ['prettier', '@typescript-eslint'],

  parserOptions: {
    sourceType: 'module',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
  ],

  rules: {
    'no-console': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
      },
    ],
    eqeqeq: [2, 'always'],
    'semi-style': [2, 'last'],
    'comma-style': [2, 'last'],
    'object-curly-newline': [2, 'always'],
    'nonblock-statement-body-position': [2, 'below'],
    'multiline-ternary': [2, 'always-multiline'],
    'no-nested-ternary': 2,
    'line-comment-position': [
      2,
      {
        position: 'above',
      },
    ],
    'object-shorthand': [
      2,
      'always',
      {
        avoidExplicitReturnArrows: true,
      },
    ],
    curly: ['error', 'multi', 'consistent'],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'prettier/prettier': [
      1,
      {
        arrowParens: 'always',
        bracketSameLine: true,
        bracketSpacing: true,
        embeddedLanguageFormatting: 'auto',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxSingleQuote: false,
        printWidth: 120,
        proseWrap: 'always',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
        vueIndentScriptAndStyle: false,
      },
    ],
  },
}

/**
 * 0 - turn off
 * 1 - warn
 * 2 - error
 */
