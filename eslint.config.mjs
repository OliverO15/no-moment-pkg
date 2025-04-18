import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import assignment2Rules from './eslint/index.js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      assignment2: { rules: assignment2Rules },
      prettier: prettierPlugin,
    },
  },
  {
    rules: {
      'no-moment-pkg/no-moment': 'error',
    },
  },
  prettier,
];
