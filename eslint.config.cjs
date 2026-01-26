const { defineConfig, globalIgnores } = require('eslint/config');

const tsParser = require('@typescript-eslint/parser');
const globals = require('globals');
const _import = require('eslint-plugin-import');
const json = require('eslint-plugin-json');

const { fixupPluginRules, fixupConfigRules } = require('@eslint/compat');

const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const namingConventions = [
  {
    selector: 'variable',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
  },
  {
    selector: 'memberLike',
    format: ['camelCase', 'PascalCase'],
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
  {
    selector: 'property',
    filter: '(_id)',
    format: null,
    leadingUnderscore: 'allow',
  },
  {
    selector: 'parameterProperty',
    format: ['camelCase', 'PascalCase'],

    filter: {
      regex: '[- ]|',
      match: false,
    },
  },
];

module.exports = defineConfig([
  {
    languageOptions: {
      parser: tsParser,

      globals: {
        ...globals.browser,
        ...globals.commonjs,
        __dirname: true,
        browser: true,
        page: true,
        process: true,
      },
    },

    plugins: {
      import: fixupPluginRules(_import),
      json,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },

    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'airbnb',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
      ),
    ),

    rules: {
      'max-classes-per-file': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',

      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          arrowParens: 'avoid',
        },
      ],

      'global-require': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      'no-shadow': 'off',
      '@typescript-eslint/no-redeclare': ['error'],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/naming-convention': ['error'].concat(
        namingConventions,
      ),



      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],

      'arrow-parens': ['error', 'as-needed'],

      'consistent-return': [
        'error',
        {
          treatUndefinedAsUnspecified: false,
        },
      ],

      'func-names': [
        'error',
        'as-needed',
        {
          generators: 'never',
        },
      ],

      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-relative-packages': 'off',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',

      'max-len': [
        'error',
        {
          code: 120,
        },
      ],

      'no-param-reassign': [
        'error',
        {
          ignorePropertyModificationsFor: ['state'],
          props: true,
        },
      ],

      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
        },
      ],

      'no-useless-escape': 'off',

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'lodash',
              importNames: ['sample'],
              message:
                'You probably want to use `sample` from `effector` instead?',
            },
          ],
        },
      ],

      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],

      'react/prop-types': 'off',

      'react/sort-comp': [
        'error',
        {
          order: [
            'instance-variables',
            'static-methods',
            'lifecycle',
            'render',
            'everything-else',
          ],
        },
      ],

      'react/state-in-constructor': ['error', 'never'],

      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          labelComponents: ['CustomInputLabel'],
          labelAttributes: ['label'],
          controlComponents: ['CustomInput'],
          depth: 3,
        },
      ],

      'react/jsx-props-no-spreading': 'off',
      'no-underscore-dangle': 'off',
      'dot-notation': 'error',
      'react/function-component-definition': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-unused-vars': 'off',
      'max-lines': ['error', 400],
      'react/require-default-props': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-useless-constructor': 'off',
    },
  },
  {
    files: ['**/*.cy.js', '**/*.cy.ts', '**/*.cy.tsx', '**/*.spec.ts'],

    rules: {
      'no-undef': 'off',
      'max-len': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'max-lines': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.js'],

    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['**/*.d.ts'],

    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
      'spaced-comment': 'off',
      camelcase: 'off',
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],

    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'import/no-unresolved': 'off',
      'max-len': 'off',
      'no-bitwise': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'max-lines': 'off',
    },
  },
  {
    files: ['**/*.icon.tsx', '**/icons.tsx'],

    rules: {
      'max-len': 'off',
    },
  },
  {
    files: ['**/*.stories.tsx'],

    rules: {
      'max-lines': 'off',
    },
  },
  {
    files: ['**/index.ts'],

    rules: {
      'import/named': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],

    rules: {
      'no-undef': 'off',
      'no-empty-function': 'off',

      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
        },
      ],

      'no-unused-expressions': 'off',
    },
  },
  {
    files: ['**/*.ts'],

    rules: {
      'max-lines': ['error', 400],
    },
  },
  {
    files: ['**/*.tsx'],

    rules: {
      'max-lines': ['error', 400],
      '@typescript-eslint/no-use-before-define': 'off',
    },
  },
  globalIgnores([
    'migrations/*',
    '**/eslint.config.js',
    '**/gqty',
    '**/cypress-testrail-reporter',
    '**/node_modules',
    '**/dist',
    '**/storybook-static'
  ]),
]);
