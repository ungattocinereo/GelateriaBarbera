import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const dataSource = readFileSync(new URL("../src/data/flavors.ts", import.meta.url), "utf8");
const pageSource = readFileSync(new URL("../src/pages/index.astro", import.meta.url), "utf8");

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

test("cards do not render an empty-allergen placeholder", () => {
  assert.doesNotMatch(
    pageSource,
    /Nessun allergene indicato nel documento\./,
    "Empty allergen copy should be omitted entirely"
  );
  assert.doesNotMatch(pageSource, /class="no-allergens"/, "Cards should not render a visual empty-allergen badge");
  assert.match(pageSource, /flavor\.allergens\.length > 0/, "Allergen sections should be conditional");
});
