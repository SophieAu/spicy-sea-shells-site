# spicy-site

Astro 6 static site. Source of truth for style is `_gatsby/src/_variables.styles.ts` — all tokens have CSS variable equivalents defined in `src/layouts/Layout.astro`.

## Code style
- Arrow functions only
- CSS variables for all design tokens — colors use `--color-*`, fonts use `--font-*`, dimensions use the named vars (`--footer-height`, `--sidebar-width`, etc.)
- Strings live in `src/data/strings.ts` — import and reference them, never inline
