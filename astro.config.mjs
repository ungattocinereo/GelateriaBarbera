import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  i18n: {
    locales: ["it", "en", "zh", "fr"],
    defaultLocale: "it"
  }
});
