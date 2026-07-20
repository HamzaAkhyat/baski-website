# BASKI Automation — Business Website

Live site: **https://baski-automation.netlify.app**

Portfolio/business website for BASKI Automation — custom scripts, Android apps,
websites and n8n automation workflows.

## Stack

- Static HTML + Tailwind CSS (CDN, no build step)
- Shared assets in `assets/` (styles, Tailwind config, WebGL background, interactions)
- Hosted on Netlify with continuous deployment

## Deployment

Every push to `main` deploys automatically to Netlify.

Manual deploy (if ever needed):

```
npx netlify-cli deploy --prod --dir . --no-build
```

## Local preview

```
python -m http.server 8137
```

Then open http://localhost:8137
