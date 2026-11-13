import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Derive concrete detail URLs from the existing catalogue, not from route patterns.
// Resolve a filesystem path before reading: Vite treats new URL(relative,
// import.meta.url) as a browser asset URL in the jsdom test environment.
const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const catalogue = readFileSync(resolve(scriptDirectory, "../src/lib/artworks.ts"), "utf8");
export const artworkSlugs = [...catalogue.matchAll(/\ba\("([^"]+)"/g)].map((match) => match[1]);
export const publicPages = ["/", "/about", "/contact", ...artworkSlugs.map((slug) => `/work/${slug}`)];
export const pagesBase = "/anastasia2/";