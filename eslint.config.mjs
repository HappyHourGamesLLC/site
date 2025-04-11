import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow unescaped apostrophes with specific exceptions
      'react/no-unescaped-entities': ['error', {
        forbid: ['>', '}']
      }],
      
      // Configure unused vars to be more lenient
      '@typescript-eslint/no-unused-vars': ['warn', {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_'
      }],
      
      // Handle React Hook warnings more gracefully
      'react-hooks/exhaustive-deps': ['warn', {
        additionalHooks: '(useEffect|useLayoutEffect|useInsertionEffect)'
      }],
      
      // Optional: additional customizations
      'prefer-const': 'warn',
      'no-unused-expressions': 'warn'
    },
    
    // Optional: add some parser options
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  }
];

export default eslintConfig;
