# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Business website for **BASKI Automation** (the user's freelance automation business: custom scripts, Android apps, websites, n8n workflows). Static HTML site, no framework, no build step. Originally generated from Google Stitch designs (raw exports live in `TEST/`, which is gitignored — keep it, it's the design reference).

- Live site: https://baski-automation.netlify.app
- Repo: https://github.com/HamzaAkhyat/baski-website (public)

## Deployment — the important part

**Pushing to `main` deploys to production automatically** (Netlify watches the repo via webhook). There is no staging. To ship a change:

```
git add -A && git commit -m "..." && git push
```

Deploys take ~30s. Manual fallback: `npx netlify-cli deploy --prod --dir . --no-build`.
Netlify site id: `d5bc2722-48bb-463d-b5bb-5eb3cd91cab6` (also in `.netlify/state.json`).

The GitHub CLI on this machine is a portable install at `~/gh-cli/bin/gh.exe` (not on PATH; winget MSI fails without admin).

## Local preview

```
python -m http.server 8137
```

Pages are plain HTML — a browser refresh shows changes. No lint/test tooling exists.

## Architecture

Five pages (`index.html`, `solutions.html`, `process.html`, `contact.html`, `thanks.html`) share duplicated nav/footer markup — **there is no templating**, so a nav or footer change must be repeated in every page (nav differs per page only in which link has the active style: `text-primary border-b-2 border-primary`).

Shared assets, loaded by every page in this order:

- `assets/js/tw-config.js` — Tailwind theme (colors, fonts, spacing). Must load immediately after the Tailwind CDN `<script>`. Brand color is `primary`/`primary-container` = `#ff571a`; fonts are Space Grotesk (display), Inter (body), Geist (mono labels).
- `assets/css/site.css` — defines the custom classes the HTML relies on (`brutal-shadow`, `brutalist-border`, `neon-glow`, `animate-pulse-neon`, `scanline`, `animate-marquee`, etc.). If a class in the HTML looks undefined, it's here.
- `assets/js/shader.js` — self-contained WebGL animated background; creates its own fixed canvas behind the page. Include once at end of body.
- `assets/js/main.js` — mobile menu toggle (`#menu-btn`/`#mobile-menu`), solutions-card hover, form label focus.

## Contact form

`contact.html` uses **Netlify Forms** (form `name="contact"`, POST to `/thanks.html`, honeypot field `bot-field`). Rules that keep it working:

- The hidden `<input name="form-name" value="contact">` must stay.
- Form detection is enabled on the Netlify site (`processing_settings.ignore_html_forms: false`); it breaks silently if the form's `data-netlify="true"` attribute is removed.
- Submissions are stored in the Netlify dashboard and emailed to hamzaakhyat09@gmail.com via a `submission-created` email hook.
- Free plan: 100 submissions/month.

## Content conventions

- Design language: dark brutalist/terminal aesthetic — UPPERCASE headings, `SNAKE_CASE` labels (e.g. `PACKET_ROUTING`), neon orange on near-black. Keep new copy in that voice.
- The "Featured Workflow" section on the home page and the stats tiles are illustrative placeholders the user intends to replace with real projects.
- Footer GitHub/LinkedIn links are still `#` placeholders.
- Images are hotlinked from Stitch's Google CDN (`lh3.googleusercontent.com`); if one disappears, replace with a local image in `assets/`.
