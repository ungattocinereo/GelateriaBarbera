# Gelato Card Photo And Allergen Design

## Goal

Make the gelato product photos feel larger, more appetizing, and visually consistent across the catalog. Add visible allergen icons anywhere allergens are shown, both on the small grid cards and in the expanded detail cards.

## Chosen Direction

Use the "Even Showcase" direction:

- Small cards get a consistent square photo stage so every product image has the same visual footprint.
- Product images are scaled up inside that stage with `object-fit: contain`, preserving the full product cutout while making the scoop or extra item feel larger.
- The expanded dialog uses a stronger left-side photo column. The image is larger than the current version and centered on a clean white stage.
- Allergens use compact icon-led pills on the grid cards and icon-led rows in the expanded cards.
- The design stays minimal: white surfaces, restrained borders, small uppercase section labels, and no decorative texture inside the product stage.

## Small Card Layout

Each small card keeps the current content order: photo, category/name, allergens, facts. The photo area becomes the primary visual element:

- `flavor-photo` uses a stable square or near-square aspect ratio.
- Images fill more of the available area with a shared scale rule.
- Cards keep equal layout rhythm even when product source images have slightly different crop sizes.
- On mobile, allergen icons remain visible instead of being hidden.

Allergen chips show:

- an icon badge from `allergenInfo[key].icon`
- the allergen label
- dashed border for possible presence
- solid border for confirmed presence

The status text can remain visually hidden on compact chips, but it remains available through existing data and titles.

## Expanded Card Layout

The dialog keeps a two-column desktop layout:

- left column: large product photo stage
- right column: title, facts, ingredients, allergens

On mobile it stacks vertically:

- photo stage first
- content below
- allergen icons remain visible in the detail list

The detailed allergen list should not revert to plain text only. Each row shows the same icon language as the small card, then label and presence text.

## Data And Components

Reuse the existing `allergenInfo` map. No new allergen data model is needed.

The implementation should introduce a small repeated allergen visual pattern in Astro markup, using current Font Awesome classes from `allergenInfo`. If duplication becomes awkward, keep it local to `src/pages/index.astro`; no separate component is required for this scoped page.

## Styling

Scope styling to existing classes in `src/styles/global.css`:

- tune `.flavor-photo` and `.flavor-photo img`
- tune `.dialog-photo` and `.dialog-photo img`
- keep `.allergen-icon` visible on mobile
- update `.detail-allergen` to include an icon column
- preserve dashed styling for `may-contain`

Avoid unrelated palette changes. The result should read as premium, clean, and functional rather than decorative.

## Testing

Update the existing source-level tests in `tests/flavor-cards.test.mjs` to assert:

- small cards render allergen icons
- detail allergen rows render allergen icons
- mobile CSS does not hide allergen icons globally
- photo containers keep stable dimensions for small and expanded cards

Run:

- `npm test`
- `npm run build`
