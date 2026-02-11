# Visual Refinement Design — BoldGeo Website

**Date:** 2026-02-11
**Goal:** Increase visual quality while keeping the site static, light, and minimal. Purely monochromatic (black/white/grays). No new dependencies.

**References:** vercel.com, taktile.com — restrained, generous whitespace, premium through typography and spacing rather than decoration.

---

## 1. Typography System

**Calibre weight usage:**
- "bold geo" logotype: keep `font-black` (900) — contrast anchor
- Hero tagline: switch to `font-light` (300) — editorial, airy at display size
- Section description paragraphs: `font-light`
- Body/nav/labels: Regular (400) — unchanged

**Highlight treatment (hero tagline):**
- Replace plain `text-decoration: underline` with:
  ```css
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;
  ```
- Result: a hairline underline floating below the word — precise, not default

**Section labels:**
- Replace `<h1>` / `<h2>` section headers with a two-part treatment:
  - Small uppercase label: `text-xs tracking-widest text-gray-400 uppercase`
  - Larger display text below in Light weight

**Client list:**
- Increase line-height to `leading-relaxed` or `leading-loose`
- Change color from `text-gray-500` to `text-gray-800` or plain black — these are prestigious clients, don't de-emphasize them

---

## 2. Header

**Static header (on load):**
- Keep large Black wordmark — it's a brand statement
- Tagline "experts for spatial data & visualisation": switch to Light weight, slightly reduced size
- Nav link hover: remove browser-default `hover:underline`; replace with a precise `border-b` treatment:
  ```
  border-b border-transparent hover:border-black transition-colors
  ```

**Sticky header (appears after ~100px scroll):**
- Fixed to top, full-width white background
- `border-b border-gray-200` as the only separator (1px hairline)
- "bold geo" at `text-xl font-black` on the left
- Same nav links on the right with same hover treatment
- Smooth fade-in via opacity/transform CSS transition
- Implemented with a scroll event listener in Svelte `onMount`, toggling a boolean `isScrolled`
- Sticky header lives in `Header.svelte`; scroll listener added there

---

## 3. Hero Section

**Entrance animation:**
- Current: `y: 200, duration: 2000` — theatrical
- Change to: `y: 30, duration: 600` — subtle upward drift

**Spacing:**
- Increase top padding to give the tagline more breathing room below the header
- Add a `border-b border-gray-200` hairline divider below the tagline, before the project grid

---

## 4. Project Grid

**Gap between cards:**
- Add `gap-0.5` or `gap-1` between cards (currently flush edge-to-edge)
- Even 2–4px of space makes the grid feel curated rather than tiled

**Hover treatment:**
- Keep `hover:-translate-y-1`
- Add sibling dimming: when any card is hovered, non-hovered siblings get `opacity-75`
- Use Svelte `hoveredIndex` state variable

**Column count:**
- Desktop: consider 3 columns instead of 2 for 9 projects (fills viewport more naturally)
- Mobile: stays 1 column
- Breakpoint: `sm:w-1/2 lg:w-1/3`

---

## 5. Clients Section

**Background:**
- Remove `background-color: #f2f3f6`
- Separate from work section with `border-t border-gray-200` hairline only
- Section stays white — unified with the rest of the page

**Label + heading:**
- Add small uppercase label above: `text-xs tracking-widest text-gray-400 uppercase` — e.g. "Our clients"
- Main text as Light-weight statement paragraph

**Description text:**
- Switch to Light weight, `text-gray-600`

---

## 6. Footer (Contact)

**Current state:** black background, bold "Contact" header, address block
**Direction:** Keep the dark footer as a strong terminator — it works. Refinements:
- Replace `<h1>` with a two-part label treatment (same as clients section)
- Ensure consistent padding matching the standardized section rhythm
- The email link could use the same `border-b` hover treatment as nav links (white version)

---

## 7. Overall Spacing Rhythm

Standardize section padding across all sections:
- Mobile: `px-5 py-16`
- Desktop: `px-12 py-24`

Currently inconsistent: `p-5 sm:p-12`, `p-5 sm:p-20`, `p-5 sm:p-20` — standardize.

---

## Implementation Order

1. Typography system (app.css + inline Tailwind classes)
2. Hero section (animation, spacing, divider)
3. Header (static refinements + sticky behavior)
4. Project grid (gap, hover dimming, 3-column option)
5. Clients section (background, label, list treatment)
6. Footer (label treatment, link hover, padding)
