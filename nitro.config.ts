import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  // TanStack's post-build pass owns the HTML export. Nitro's preset defaults
  // otherwise crawl / and /404.html before that pass, outside the Pages basepath.
  ...(process.env['GITHUB_PAGES'] === "true"
    ? { prerender: { crawlLinks: false, ignore: ["/", "/404.html"] } }
    : {}),
});