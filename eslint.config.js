import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    ignores: ["!.astro/"],
  },
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];
