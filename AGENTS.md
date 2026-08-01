# Repository Guidelines

## Project Structure
- `docs/` is the live site root, served to production as-is (no build step).
  - `docs/index.html` — page template with Vue 3 mounts.
  - `docs/js/app.js` — all dynamic content (news, videos, competitions, research) as Vue data objects. This is where most edits go.
  - `docs/js/main.js` — jQuery UI interactions (menus, scrolling, carousels).
  - `docs/css/style.css` — custom theme.
  - `docs/img/` and `docs/pdf/` — static assets.
- `archive/` — previous/archived website, do not edit.
- `.github/workflows/main.yml` — the only CI workflow; syncs `docs/` to S3 on `master` push.
- `reCaptcha/`, `scripts/` — legacy/support directories, not part of the site.

## Tech Stack
- Vue.js 3.4.5 (content rendering via `Vue.createApp(...).mount(...)` in `app.js`), loaded from unpkg CDN in `docs/index.html` — there is no local Vue source.
- Bootstrap (responsive layout), jQuery (UI interactions), Owl Carousel and Magnific Popup (carousels/lightbox in `main.js`).
- Contact form in `docs/index.html` posts to Formspree (`https://formspree.io/all@annadu.org`) — no backend in this repo; do not change the endpoint.
- AWS S3 static hosting behind Cloudflare DNS; GitHub Actions CI/CD.

## Build, Test, Development
- No package manager, no build tooling, no automated tests.
- Local preview: open `docs/index.html` directly in a browser.
- Verify changes by checking layout, links, and interactive elements in the browser.

## Content Conventions (`docs/js/app.js`)
- Each content section (`NewsApp`, etc.) is a Vue app with an `items` array.
- Entries are objects with fixed keys (e.g., `news_img`, `news_source`, `news_date`, `news_head`, `news_content`, `news_more`). Preserve key names and ordering.
- News items are ordered newest-first; add new items at the top of the array.
- Use sentence-case labels for new entries (e.g., "Author Talk with Anna Du").
- Images referenced from `news_img` must exist under `docs/img/` (or be absolute URLs).

## Branches & Deployment
- There is no `main` branch. The default/production branch is `master`.
- Workflow (branch-based):
  1. Develop on `github-pages` — push triggers GitHub Pages preview at https://annadu5.github.io/annadu.org/
  2. Open PR `github-pages` → `master` to promote to production.
  3. Merge to `master` triggers the S3 sync workflow, updating https://annadu.org
- Commit messages: short, descriptive, sentence-case, tied to the content change.

## Agent Notes
- Most tasks = edit `docs/js/app.js`; avoid introducing new tooling or dependencies.
- Keep edits minimal and scoped to the requested content/visual change.
- Local preview only — there is no dev server, linter, or typecheck to run.
