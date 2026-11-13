import { pagesBase, publicPages } from "./public-pages.mjs";

const origin = "https://yashundel0.github.io";
for (const route of publicPages) {
  const url = `${origin}${pagesBase}${route.slice(1)}`;
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`Live page failed: ${response.status} ${url}`);
  const html = await response.text();
  if (!/<h1[\s>]/i.test(html) || !html.includes("Anastasia")) throw new Error(`Unexpected live page: ${url}`);
  for (const match of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
    const target = new URL(match[1].replaceAll("&amp;", "&"), response.url);
    if (target.origin !== origin || target.hash || !/\.(js|css|jpg|webp|ico)$/.test(target.pathname)) continue;
    if (!target.pathname.startsWith(pagesBase)) throw new Error(`Live asset escapes base: ${target.href}`);
    const asset = await fetch(target, { method: "HEAD", signal: AbortSignal.timeout(30000) });
    if (!asset.ok) throw new Error(`Live asset failed: ${asset.status} ${target.href}`);
  }
  console.log(`Verified live page: ${url}`);
}