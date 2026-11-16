# Artwork display and Geometry of Time
- [x] Diagnose fixed-ratio gallery padding and detail-page dark padded backgrounds.
- [x] Remove image frames, retain original proportions and responsive lossless sources, and hide Home captions.
- [x] Add supplied first-artwork metadata and complete description to its existing detail page, preserving image order.
- [x] Verified original image ratios, caption-free Home, exact complete description and detail navigation at 375/768/1002/1280px; 13 tests passed, automatic build OK, no runtime errors.

# Two original artworks
- [x] Download both originals from Yandex Disk at full resolution (2794×1572 and 6670×3746) and upload with lossless responsive variants.
- [x] Replace all 17 placeholder works with the two originals: purple/blue/orange first, green/turquoise/red second, on Home and Artworks.
- [x] Keep titles/dates/materials neutral (Untitled, no year/tags) until the artist provides them.
- [x] Verify order, image loading, detail pages and layouts at 375/1280px; 11 tests passed, automatic build OK, no console errors.

# Reference typography
- [x] Replace only Home name/subtitle typography with thin, wide Montserrat lettering (200/100 weights); exact source font unconfirmed.
- [x] Verify font loading, one heading/section, no overflow at 375/1001/1280px, unchanged menu navigation; routing test passed, automatic build OK.

# Home opening-section replacement
- [x] Replace the existing opening text in place with a centered two-line name and subtitle; remove old links and decorative text.
- [x] Offer four fonts within the same section, without duplicate headings or artwork backgrounds.
- [x] Verify all four fonts, one heading and section, removal of old text, layouts at 375/1002/1280px and menu navigation; 11 tests passed, automatic build OK, no runtime errors.

# Dark portfolio update
- [x] Apply a unified navy/burgundy palette and gradient-only Home header.
- [x] Remove Home collection links and rename the menu and collection heading to Artworks without changing URLs.
- [x] Apply the exact About biography and supplied portrait, and update all contact details.
- [x] Verify navigation, original artworks, layouts and regression tests; preserve Pages configuration (11 tests passed, 20 viewport/page checks, no runtime errors, automatic build OK; no existing EN/RU content or switcher found).

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
