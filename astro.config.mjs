import { defineConfig } from "astro/config";

const normalizeSiteUrl = (url) => {
  if (!url) {
    return undefined;
  }

  const value = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
  return new URL(value).toString().replace(/\/$/, "");
};

const siteUrl = normalizeSiteUrl(
  process.env.PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL
);

export default defineConfig({
  site: siteUrl,
  output: "static",
  i18n: {
    locales: ["it", "en", "zh", "fr"],
    defaultLocale: "it"
  }
});
