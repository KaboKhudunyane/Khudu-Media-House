# Khudu Media House

A responsive portfolio and business website for Khudu Media House, presenting its photography, videography, event coverage, wedding, podcast and aerial media offerings.

## Stack

- React 18, React Router and Vite
- CSS, with locally stored photography and service imagery
- Netlify static hosting and form-compatible deployment configuration

## Requirements

Use Node.js 22 (see `.nvmrc`) and npm.

## Run locally

```sh
npm ci
npm run dev
```

Vite prints the local development URL after startup.

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

The production site is written to `dist/`. There is no backend or environment variable required for the static site build. The contact form still needs to be configured with a real submission destination before it can receive messages; do not treat a client-side message as delivery.

## Deploy to Netlify

Connect this Git repository to Netlify. `netlify.toml` specifies `npm run build`, publishes `dist/`, selects Node 22 and instructs npm to install development dependencies needed for Vite even when Netlify sets `NODE_ENV=production`. The SPA fallback supports direct page routes.

No deployment has been run from this repository session. After connecting the repo, trigger a deploy and confirm the build log reaches the publish stage.

## Structure

- `src/pages/`: home, portfolio and contact route pages
- `src/components/`: navigation, hero, services, portfolio and shared page sections
- `src/assets/`: the site's owned project and service images
- `public/`: static deployment assets and redirects
