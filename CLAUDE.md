# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, zero-dependency learning path app for Blender Python scripting. Works via `file://` and GitHub Pages — no build step, no npm, no server needed. Open `index.html` in a browser to run it.

## Architecture

Two HTML entry points share one JS/CSS pair:

- **`index.html`** — Marketing landing page. Has its own inlined CSS and a small inline script block. Links to `app.html` via the CTA button (`id="start-btn"`).
- **`app.html`** — The learning path shell. Renders no content on its own; all DOM is written by `app.js`.
- **`data.js`** — Must load before `app.js`. Defines a single global `const DATA` — an array of 4 level objects (Beginner → Intermediate → Advanced → Expert), each containing `lessons[]` and `challenges[]`.
- **`app.js`** — All state, rendering, and event handling. One global `state` object mutated in place; `renderAll()` does a full re-render after every state change.
- **`style.css`** — Styles for `app.html` only. `index.html` has its own inlined styles.

## Dependencies

Font Awesome 6.5.2 Free is vendored under `vendor/fontawesome/` — no CDN, works fully offline. Only the two font files actually used are present:

- `vendor/fontawesome/css/all.min.css`
- `vendor/fontawesome/webfonts/fa-solid-900.woff2` — used for `.fa-solid` icons
- `vendor/fontawesome/webfonts/fa-regular-400.woff2` — used for `.fa-regular` icons

If you add a new icon, check whether it is solid (`fa-solid`) or regular (`fa-regular`) — both are covered. Brand icons (`fa-brands`) are not available (font file not downloaded). Do not switch to CDN; keep icons vendored.

## Key conventions

**localStorage key** — Defined once as `data-ls-key="blender-scripting-lp-v1"` on the `<html>` element in both HTML files. Both the inline FOUC script and `app.js` read it via `document.documentElement.dataset.lsKey`. Never hardcode the string elsewhere.

**FOUC prevention** — Both HTML files have an inline `<script>` in `<head>` that reads the saved theme before first paint, so there's no flash on reload.

**"Start Learning → Continue Learning"** — `index.html` checks `localStorage` on load and updates `#start-btn` text if `completedLessons` or `completedChallenges` is non-empty.

**No ES modules** — `import`/`export` breaks on `file://`. Everything is global. `data.js` must be loaded before `app.js` in `app.html`.

**XSS boundary** — External URLs are passed through `safeUrl()` in `app.js` (enforces `https?://`). Lesson/challenge text is author-controlled content in `data.js`, not user input, so it's rendered via `innerHTML` without escaping.

## Content changes

All lesson and challenge content lives in `data.js`. Each lesson needs a globally unique `id` (kebab-case), `title`, `description`, `duration`, optional `concepts[]`, and optional `resources[]`. Each challenge needs `id`, `title`, `difficulty` (Easy/Medium/Hard/Expert), `description`, `goal`, and optional `hints[]`.
