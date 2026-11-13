# Screenshot To Silhouette

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3a62003e-1d21-48b8-a81a-d2efbbfa5996).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages deployment

Target: https://yashundel0.github.io/anastasia2/

1. Sync these changes to `yashundel0/anastasia2` on `main`.
2. In GitHub **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
3. Open **Actions → Deploy website to GitHub Pages** and run the workflow, or push to `main`.
4. The build job must pass tests, the production build and static artifact validation. The deploy job must pass deployment and live checks before calling deployment successful.

The existing `@lovable.dev/vite-tanstack-config` is retained. `GITHUB_PAGES=true` selects Nitro's official `github_pages` preset and sets both Vite and TanStack Router to `/anastasia2/`. Ordinary Lovable preview builds retain `/` and their existing server target. The wrapper pins Lovable builds to its own hosting output, so a Lovable build is not proof that the GitHub Pages preset built successfully; the workflow performs that production build outside Lovable.

All 20 public pages are explicitly prerendered: home, About, Contact and the 17 concrete artwork URLs. Each gets a physical `index.html`, so GitHub Pages can open direct links and refresh them without a server rewrite. The artifact root is `.output/public`—do not deploy the repository, `dist/server`, or `.output/server`. GitHub mounts that root at `/anastasia2/`; do not nest it inside another `anastasia2` directory.

Original JPGs and lossless responsive WebPs are copied byte-for-byte from the existing asset host into the generated artifact. The pointers stay unchanged; media URLs use the build's basepath. The workflow fails if any source download, byte count, hash, linked page, stylesheet, JavaScript entry or media reference is missing. It creates `.nojekyll` to serve underscore-prefixed media paths. The source asset host must remain reachable at build time; after deployment the copied artwork is served by GitHub, not by that host. Fonts still load from the existing Google Fonts service.

### Static-hosting compatibility

- No application server functions, API routes, login, database, uploads or secret-backed calls were found. The artwork loader only reads the bundled catalogue and works during prerendering and browser navigation.
- Contact uses `mailto:` and `tel:` links, not a form server. Navigation, gallery images, animations and styling are retained.
- `src/server.ts` and request middleware remain intact for Lovable and build-time rendering. GitHub Pages cannot execute runtime SSR, server error handling or CSRF middleware, but no current website feature calls them after static export. The footer year is fixed at build time; rebuild when the calendar year changes.
- Future server functions, private data, forms that send email, authentication or payments require a separately hosted server; never add them to the Pages export silently.
- Known detail routes have real HTML files. `404.html` uses the existing application entry so browser navigation can show its existing missing-page view; unknown URLs retain GitHub's HTTP 404 status.

### Reproduce the Pages build outside Lovable

Use Node 22 and Bun 1.3.13:

```sh
bun install --frozen-lockfile
bun run test
GITHUB_PAGES=true bun run build
node scripts/pages-artifact.mjs prepare
node scripts/pages-artifact.mjs verify
```

Only upload `.output/public` after every command succeeds. `node scripts/verify-pages-live.mjs` checks all 20 URLs and their linked JavaScript, CSS and original media after deployment. A pre-existing site responding at the URL does not verify this new deployment.
