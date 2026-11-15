# Portfolio refinement
- [x] Present three header backgrounds and apply the user's custom midnight navy and wine selection.
- [x] Refine Home typography and show five featured works without removing catalogue entries (first five catalogue works selected).
- [x] Add All Projects using the shared catalogue and retain all existing detail URLs; include the new page in static exports.
- [x] Replace navigation with an accessible animated hamburger menu.
- [x] Verify all gallery images, navigation and layouts at 375, 768, 1068 and 1280px; eight regression tests passed and automatic build OK.

# Website image and responsive audit
- [x] Preserve complete artwork proportions and add responsive image sources without changing originals.
- [x] Correct hero, navigation, About, Contact and artwork layouts at all requested widths.
- [x] Verify all pages, images and navigation at desktop, tablet and phone sizes (200 page checks, 375–2048px; no overflow, broken images or runtime errors).

# GitHub Pages deployment
- [x] Add Nitro build-only fetch entry; verify official github-pages preset, static mode and public output resolution (6 tests passed).
- [ ] Run the actual Pages production build and verify its artifact (manual production builds unavailable in this environment; requires GitHub Actions).
- [x] Fix catalogue ESM path handling and rerun all tests (5 passed); automatic build reports build OK.
- [x] Inspect static compatibility and preserve the existing design and configuration wrapper.
- [x] Configure the Pages preset, basepath, all concrete public exports and portable artwork.
- [x] Add automated artifact validation, regression tests and a GitHub Pages workflow.
- [ ] Verify production output and static navigation (Pages artifact is unavailable in the sandbox; requires the GitHub Actions production build).
- [ ] Verify the new GitHub Actions deployment (requires changes to reach the repository and Pages to use GitHub Actions).
