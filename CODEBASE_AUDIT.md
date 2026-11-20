# Codebase audit

## Current stack and shape

The project is a client-rendered React 18 application built with Vite and React Router, hosted as a static site on Netlify. `src/main.jsx` mounts the app with an error boundary and `HelmetProvider`; `src/App.jsx` defines routes; page and section components live in `src/pages` and `src/components`. Local image assets are under `src/assets`.

## Confirmed findings

- The original routes had a separate animated splash page at `/` and the actual content at `/home`, complicating discoverability and navigation. The app now uses the home page at `/` and redirects `/home`.
- `netlify.toml` selected Node 18 although Vite 7 and React Router 7 declare Node 20+ requirements. The build log also shows `NODE_ENV=production` caused npm to omit Vite from `devDependencies`, so `vite` was not found. Netlify now selects Node 22 and explicitly includes dev dependencies.
- `src/pages/Home/Home.jsx` referenced a nonexistent `PortfolioPreview` module, and the services component imported `podcast.jpg` despite the asset being `Podcast.jpg`. Both prevented a clean build after fixing dependency installation.
- The previous portfolio used one image for all cards and advertised example work not supported by the actual local assets. The home preview now uses the two existing portfolio images and their asset-derived names.
- The services carousel duplicated cards continuously, had no pause controls, and referenced images with inconsistent case. It is now a static responsive grid using existing service images.
- `src/components/ContactForm/ContactForm.jsx` only logged to the browser console and displayed a false success alert. A real submission destination still needs configuration; current behavior must not be presented as delivered email.
- The original README claimed React 19/Tailwind usage although the manifest has React 18 and no Tailwind dependency or CSS pipeline. Documentation was rewritten to reflect the actual stack.
- The original SEO component referenced a presumed site domain and an absent `/og-image.jpg`; verify the canonical domain and supply a social image before relying on those metadata values.

## Changes in this pass

- Replaced the fragmented landing-to-home route with a cohesive home page at `/`, retaining `/home` as a redirect.
- Modernized homepage and navigation/hero presentation and established a responsive services grid.
- Added the missing portfolio preview using existing local images and corrected the Podcast image path.
- Updated Netlify's Node and dependency installation settings, set `.nvmrc`, and rewrote deployment/developer documentation.

## Verification and remaining work

The provided Netlify log failed before Vite started because the build dependencies were omitted. The repository tools available here do not run shell commands, so a fresh `npm ci`, `npm run lint`, and `npm run build` have not been executed. Trigger a new Netlify deploy to verify; if another error appears, inspect that new log. Contact form delivery, confirmable portfolio details, and verified canonical/OG URL and image remain to be configured.
