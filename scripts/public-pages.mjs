import { readFileSync } from "node:fs";

// Derive concrete detail URLs from the existing catalogue, not from route patterns.
const catalogue = readFileSync(new URL("../src/lib/artworks.ts", import.meta.url), "utf8");
export const artworkSlugs = [...catalogue.matchAll(/\ba\("([^"]+)"/g)].map((match) => match[1]);
export const publicPages = ["/", "/about", "/contact", ...artworkSlugs.map((slug) => `/work/${slug}`)];
export const pagesBase = "/anastasia2/";