import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const dataSource = readFileSync(new URL("../src/data/flavors.ts", import.meta.url), "utf8");
const pageSource = readFileSync(new URL("../src/pages/index.astro", import.meta.url), "utf8");
const styleSource = readFileSync(new URL("../src/styles/global.css", import.meta.url), "utf8");
const astroConfigSource = readFileSync(new URL("../astro.config.mjs", import.meta.url), "utf8");

const flavorBlock = (id) => {
  const start = dataSource.indexOf(`id: "${id}"`);
  assert.notEqual(start, -1, `Expected flavor ${id} to exist`);

  const next = dataSource.indexOf("\n  {\n    id:", start + 1);
  return dataSource.slice(start, next === -1 ? dataSource.indexOf("\n];", start) : next);
};

test("every card has at least one allergen after document review", () => {
  assert.doesNotMatch(dataSource, /allergens:\s*\[\]/, "No flavor should keep an empty allergen list");
});

test("fruit sorbetti made with sugar syrup carry the researched base-sorbetto trace note", () => {
  const syrupBasedSorbetti = [
    "more-gelso",
    "fragola-sorbetto",
    "lampone-sorbetto",
    "limone-sorbetto",
    "ananas",
    "mandarino",
    "sciroppo-zucchero",
    "mango"
  ];

  for (const id of syrupBasedSorbetti) {
    assert.match(flavorBlock(id), /mayContain\("latte", "Da Base Sorbetto 50"\)/, `${id} should mention milk traces from Base Sorbetto 50`);
  }
});

test("flavor cards expose full details through a tap disclosure", () => {
  assert.match(pageSource, /class="flavor-card-trigger"/, "Cards need a full-card trigger");
  assert.match(pageSource, /aria-haspopup="dialog"/, "Cards should open a large detail card");
  assert.match(pageSource, /<dialog/, "Cards should render large detail dialogs");
  assert.match(pageSource, /Ingredienti completi/, "Expanded cards should label full ingredients");
  assert.match(pageSource, /Allergeni completi/, "Expanded cards should label full allergens");
  assert.match(pageSource, /showModal\(\)/, "Tap should open the dialog detail card");
  assert.doesNotMatch(pageSource, /flavor\.allergens\.slice\(0,\s*2\)/, "The rendered allergen list should not be capped at two");
});

test("cards use real flavor photos instead of external food icons", () => {
  assert.match(pageSource, /import\.meta\.glob/, "Flavor photos should be sourced from local image assets");
  assert.match(pageSource, /imageSrc/, "Flavor items should expose a resolved photo");
  assert.match(pageSource, /class="flavor-photo"/, "Small cards should render a real product photo");
  assert.match(pageSource, /class="dialog-photo"/, "Large detail cards should render a real product photo");
  assert.doesNotMatch(pageSource, /icons8FoodIconUrl/, "Cards should not depend on external food icons");
});

test("page exposes Google and social sharing metadata with stracciatella preview", () => {
  assert.match(pageSource, /import socialPreviewImage from "\.\.\/\.\.\/images\/stracciatella\.png";/, "Social preview should use the stracciatella image asset");
  assert.match(pageSource, /const siteDescription = "Consulta ingredienti e allergeni/, "Google description should be defined as concise page copy");
  assert.match(pageSource, /const socialDescription = "Scegli il tuo gelato LaB/, "Social cards should have short sharing copy");
  assert.match(pageSource, /<link rel="canonical" href=\{canonicalUrl\} \/>/, "Google should receive a canonical URL");
  assert.match(pageSource, /<meta name="robots" content="index, follow" \/>/, "Search engines should be allowed to index the page");
  assert.match(pageSource, /<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" \/>/, "Googlebot should be allowed large previews and snippets");
  assert.match(pageSource, /<meta property="og:type" content="website" \/>/, "Facebook should receive Open Graph type metadata");
  assert.match(pageSource, /<meta property="og:title" content=\{siteTitle\} \/>/, "Facebook should receive an Open Graph title");
  assert.match(pageSource, /<meta property="og:description" content=\{socialDescription\} \/>/, "Facebook should receive an Open Graph description");
  assert.match(pageSource, /<meta property="og:image" content=\{socialImageUrl\} \/>/, "Facebook should receive the stracciatella image URL");
  assert.match(pageSource, /const socialImageType = socialPreviewImage\.format === "jpg" \? "image\/jpeg" : `image\/\$\{socialPreviewImage\.format\}`;/, "Open Graph image MIME should normalize jpg to image/jpeg");
  assert.match(pageSource, /<meta property="og:image:type" content=\{socialImageType\} \/>/, "Facebook should receive a valid image MIME type");
  assert.match(pageSource, /<meta property="og:image:alt" content=\{socialImageAlt\} \/>/, "Facebook should receive accessible image alt text");
  assert.match(pageSource, /<meta name="twitter:card" content="summary_large_image" \/>/, "Twitter should receive a large-image card type");
  assert.match(pageSource, /<meta name="twitter:title" content=\{siteTitle\} \/>/, "Twitter should receive a card title");
  assert.match(pageSource, /<meta name="twitter:description" content=\{socialDescription\} \/>/, "Twitter should receive a card description");
  assert.match(pageSource, /<meta name="twitter:image" content=\{socialImageUrl\} \/>/, "Twitter should receive the stracciatella image URL");
});

test("Astro can build absolute social URLs from production deployment env", () => {
  assert.match(astroConfigSource, /PUBLIC_SITE_URL/, "Config should support an explicit production site URL");
  assert.match(astroConfigSource, /SITE_URL/, "Config should support a generic production site URL");
  assert.match(astroConfigSource, /VERCEL_PROJECT_PRODUCTION_URL/, "Config should support Vercel production domains");
  assert.match(astroConfigSource, /VERCEL_URL/, "Config should support Vercel preview domains");
  assert.match(astroConfigSource, /site: siteUrl/, "Astro site should be configured when a deployment URL is available");
});

test("sugar syrup sorbetto uses the white scoop photo", () => {
  assert.match(dataSource, /id:\s*"sciroppo-zucchero"/, "Sciroppo di zucchero flavor should exist");
  assert.match(
    pageSource,
    /"sciroppo-zucchero":\s*flavorImageModules\[`..\/..\/images\/white-scoop\.png`\]/,
    "Sciroppo di zucchero should reuse white-scoop.png"
  );
});

test("detail lists stay visually minimal", () => {
  assert.match(pageSource, /<h3>Ingredienti completi<\/h3>/, "Ingredient list heading should remain present");
  assert.match(pageSource, /<h3>Allergeni completi<\/h3>/, "Allergen list heading should remain present");
  assert.match(pageSource, /class="ingredient-list"/, "Ingredients should render as a list");
  assert.match(pageSource, /class="detail-allergen-list"/, "Allergens should render as a list");
  assert.doesNotMatch(pageSource, /detail-allergen[\s\S]*?allergen-chip/, "Detail allergens should avoid compact chip styling");
});

test("allergen icons render on compact and expanded cards", () => {
  assert.match(
    pageSource,
    /<span class="allergen-icon" aria-hidden="true">[\s\S]*?<i class=\{info\.icon\}><\/i>[\s\S]*?<\/span>/,
    "Compact allergen chips should render the configured allergen icon"
  );
  assert.match(
    pageSource,
    /<li class:list=\{\["detail-allergen", allergen\.presence\]\}>[\s\S]*?<span class="allergen-icon" aria-hidden="true">[\s\S]*?<i class=\{info\.icon\}><\/i>/,
    "Expanded allergen rows should render the configured allergen icon"
  );
});

test("photo stages use stable enlarged sizing", () => {
  assert.match(
    styleSource,
    /\.flavor-photo\s*\{[\s\S]*?aspect-ratio:\s*1\s*;/,
    "Small card photos should use a square stage"
  );
  assert.match(
    styleSource,
    /\.flavor-photo img\s*\{[\s\S]*?transform:\s*scale\(1\.16\);/,
    "Small card images should be scaled up inside the stable photo stage"
  );
  assert.match(
    styleSource,
    /\.dialog-photo img\s*\{[\s\S]*?transform:\s*scale\(1\.14\);/,
    "Expanded card images should be scaled up inside the dialog photo stage"
  );
});

test("mobile keeps allergen icons visible", () => {
  assert.doesNotMatch(
    styleSource,
    /@media \(max-width: 620px\)[\s\S]*?\.allergen-icon\s*\{[\s\S]*?display:\s*none;/,
    "Mobile CSS should not hide allergen icons"
  );
});

test("cards do not render an empty-allergen placeholder", () => {
  assert.doesNotMatch(
    pageSource,
    /Nessun allergene indicato nel documento\./,
    "Empty allergen copy should be omitted entirely"
  );
  assert.doesNotMatch(pageSource, /class="no-allergens"/, "Cards should not render a visual empty-allergen badge");
  assert.match(pageSource, /flavor\.allergens\.length > 0/, "Allergen sections should be conditional");
});

test("compact cards use only a corner ingredient count badge", () => {
  assert.match(pageSource, /class="ingredient-count-badge"/, "Compact cards should render the ingredient count as a corner badge");
  assert.match(styleSource, /\.flavor-card > \.ingredient-count-badge[\s\S]*?right:\s*0;/, "Ingredient count badge should sit in the top-right corner");
  assert.match(styleSource, /\.ingredient-count-badge[\s\S]*?border-bottom-left-radius:\s*46px;/, "Ingredient count badge should read as a quarter-circle tag");
  assert.match(
    styleSource,
    /\.flavor-card > :not\(\.flavor-card-trigger\):not\(\.flavor-dialog\):not\(\.ingredient-count-badge\)/,
    "General compact card child positioning should not override the absolute corner badge"
  );
  assert.doesNotMatch(pageSource, /class:list=\{\["flavor-facts"/, "Compact cards should not render bottom fact indicators");
  assert.doesNotMatch(styleSource, /\.flavor-facts\s*\{/, "Removed bottom fact indicators should not keep stale compact CSS");
});

test("mobile hero proof stays in one white row", () => {
  assert.match(
    styleSource,
    /@media \(max-width: 620px\)[\s\S]*?\.hero-proof\s*\{[\s\S]*?display:\s*flex;[\s\S]*?flex-wrap:\s*nowrap;/,
    "Mobile hero proof should stay in a single horizontal row"
  );
  assert.match(
    styleSource,
    /@media \(max-width: 620px\)[\s\S]*?\.hero-proof span\s*\{[\s\S]*?color:\s*var\(--color-pure-white\);/,
    "Mobile hero proof labels should be white"
  );
  assert.match(
    styleSource,
    /@media \(max-width: 620px\)[\s\S]*?\.hero-proof strong\s*\{[\s\S]*?color:\s*inherit;/,
    "Mobile hero proof numbers should inherit white"
  );
});
