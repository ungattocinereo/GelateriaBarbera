# Gelato Card Photo And Allergen Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved "Even Showcase" card direction so gelato photos are larger and consistent, and allergen icons appear on both compact and expanded cards.

**Architecture:** Keep the current single-page Astro structure. Resolve product photos through the existing `flavorsWithImages` flow, reuse `allergenInfo[key].icon`, and make the visual changes through scoped markup/CSS in the existing page and stylesheet.

**Tech Stack:** Astro 6, TypeScript data module, CSS, Font Awesome, Node test runner.

---

## File Structure

- Modify `tests/flavor-cards.test.mjs`: add source-level regression tests for allergen icons and stable photo sizing.
- Modify `src/pages/index.astro`: add icon markup back to expanded allergen rows while preserving the current compact allergen chips.
- Modify `src/styles/global.css`: enlarge and normalize the photo stages, keep allergen icons visible on mobile, and style detail allergen rows with an icon column.

---

### Task 1: Add Regression Tests

**Files:**
- Modify: `tests/flavor-cards.test.mjs`

- [ ] **Step 1: Write the failing tests**

Add these tests after the existing `detail lists stay visually minimal` test:

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
npm test
```

Expected: FAIL because expanded allergen rows are currently plain text, `.flavor-photo` does not use `aspect-ratio: 1`, image scale rules are absent, and mobile CSS hides `.allergen-icon`.

- [ ] **Step 3: Commit the failing tests only if desired**

Do not commit red tests in the normal flow. Keep them unstaged until implementation passes.

---

### Task 2: Add Expanded Allergen Icons

**Files:**
- Modify: `src/pages/index.astro`
- Test: `tests/flavor-cards.test.mjs`

- [ ] **Step 1: Update expanded allergen row markup**

Replace the expanded allergen row:

```astro
<li class="detail-allergen">
  <strong>{info.label[locale]}</strong>
  <small>
    {allergen.presence === "contains" ? "Contiene" : "Possibile presenza"}
    {allergen.note ? ` · ${allergen.note[locale]}` : ""}
  </small>
</li>
```

with:

```astro
<li class:list={["detail-allergen", allergen.presence]}>
  <span class="allergen-icon" aria-hidden="true">
    <i class={info.icon}></i>
  </span>
  <span>
    <strong>{info.label[locale]}</strong>
    <small>
      {allergen.presence === "contains" ? "Contiene" : "Possibile presenza"}
      {allergen.note ? ` · ${allergen.note[locale]}` : ""}
    </small>
  </span>
</li>
```

- [ ] **Step 2: Run source tests**

Run:

```bash
npm test
```

Expected: still FAIL until CSS sizing and mobile icon visibility are implemented.

---

### Task 3: Enlarge And Normalize Photo Stages

**Files:**
- Modify: `src/styles/global.css`
- Test: `tests/flavor-cards.test.mjs`

- [ ] **Step 1: Update compact photo stage CSS**

Set the compact photo stage to a stable square and scale images up:

```css
.flavor-photo {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 12px;
  background: var(--color-pure-white);
}

.flavor-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(1.16);
}
```

- [ ] **Step 2: Update expanded photo stage CSS**

Adjust the dialog image scale:

```css
.dialog-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(1.14);
}
```

- [ ] **Step 3: Run source tests**

Run:

```bash
npm test
```

Expected: still FAIL until mobile icon hiding and detail allergen CSS are fixed.

---

### Task 4: Style Allergen Icons In Detail Rows

**Files:**
- Modify: `src/styles/global.css`
- Test: `tests/flavor-cards.test.mjs`

- [ ] **Step 1: Keep allergen icons visible on mobile**

Remove this mobile rule from the `@media (max-width: 620px)` block:

```css
.allergen-icon {
  display: none;
}
```

Keep compact chips two-column on mobile:

```css
.allergen-chip {
  grid-template-columns: 18px minmax(0, 1fr);
  padding-inline: 7px;
}
```

- [ ] **Step 2: Add icon column to detail rows**

Update `.detail-allergen`:

```css
.detail-allergen {
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  gap: 8px;
  align-items: start;
}

.detail-allergen .allergen-icon {
  width: 20px;
  height: 20px;
  margin-top: -1px;
  border-radius: 999px;
  background: var(--color-snow-drift);
  font-size: 12px;
}

.detail-allergen.may-contain {
  border-bottom-style: dashed;
}
```

- [ ] **Step 3: Run tests to verify green**

Run:

```bash
npm test
```

Expected: PASS.

---

### Task 5: Verify Build And Visual Result

**Files:**
- Verify: `src/pages/index.astro`
- Verify: `src/styles/global.css`

- [ ] **Step 1: Run production build**

Run:

```bash
npm run build
```

Expected: PASS with Astro build output and no errors.

- [ ] **Step 2: Start local dev server**

Run:

```bash
npm run dev
```

Expected: Astro dev server starts and prints a local URL.

- [ ] **Step 3: Open the local page in the browser**

Open the local URL, inspect the catalog grid, and click at least one card with multiple allergens.

Expected:

- small card photos are visibly larger and share the same stage size
- expanded card photo is larger in the left column
- allergen icons are visible on small cards
- allergen icons are visible in expanded allergen rows
- mobile layout does not hide icons or overlap text

- [ ] **Step 4: Commit implementation**

Stage only intended implementation files:

```bash
git add src/pages/index.astro src/styles/global.css tests/flavor-cards.test.mjs
git commit -m "Polish gelato card photos and allergens"
```

Expected: commit succeeds.

