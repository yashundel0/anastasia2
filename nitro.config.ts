import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  // TanStack's post-build pass owns the HTML export. Nitro's preset defaults
  // otherwise crawl / and /404.html before that pass, outside the Pages basepath.
  ...(process.env['GITHUB_PAGES'] === "true"
    ? {
        // github_pages has no runtime entry. Nitro's Vite 8 environment still
        // builds a fetch bundle for TanStack's subsequent prerender pass.
        // Without this entry Vite falls back to index.html for a server build.
        entry: "./scripts/pages-renderer.mjs",
        output: { dir: ".output", publicDir: ".output/public", serverDir: ".output/server" },
        prerender: { crawlLinks: false, ignore: ["/", "/404.html"] },
      }
    : {}),
});