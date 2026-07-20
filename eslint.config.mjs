import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // SiteShell rendert das Root-Layout-Gerüst inklusive <html> und <head>.
    // Die Regel no-head-element überspringt nur Dateien unterhalb von app/;
    // App-Router-Code in components/ meldet sie fälschlich als Pages-Router.
    files: ['components/SiteShell.tsx'],
    rules: { '@next/next/no-head-element': 'off' },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
