import { createHash } from "node:crypto";
import { readdir, readFile, mkdir, writeFile, access, cp } from "node:fs/promises";
import path from "node:path";
import { pagesBase, publicPages } from "./public-pages.mjs";

const root = path.resolve(".output/public");
const origin = "https://id-preview--3a62003e-1d21-48b8-a81a-d2efbbfa5996.lovable.app";

export async function assetPointers(directory = "src/assets") {
  const pointers = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) pointers.push(...await assetPointers(file));
    else if (entry.name.endsWith(".asset.json")) pointers.push(JSON.parse(await readFile(file, "utf8")));
  }
  return pointers;
}

export function localFile(url, pageUrl, directory = root) {
  const parsed = new URL(url.replaceAll("&amp;", "&"), pageUrl);
  if (parsed.origin !== "https://yashundel0.github.io") return undefined;
  if (!parsed.pathname.startsWith(pagesBase)) throw new Error(`URL escapes Pages basepath: ${parsed.href}`);
  return path.join(directory, decodeURIComponent(parsed.pathname.slice(pagesBase.length)));
}

async function exists(file) {
  try { await access(file); return true; } catch { return false; }
}

async function prepare() {
  if (!(await exists(path.join(root, "index.html")))) {
    throw new Error("Missing .output/public/index.html: the production build must prerender successfully before deployment.");
  }
  const pointers = await assetPointers();
  const records = [];
  // Small batches avoid hammering the source CDN. No resizing or re-encoding.
  for (let offset = 0; offset < pointers.length; offset += 4) {
    await Promise.all(pointers.slice(offset, offset + 4).map(async (pointer) => {
      if (!pointer.url.startsWith("/__l5e/assets-v1/")) throw new Error(`Unexpected media path: ${pointer.url}`);
      const response = await fetch(new URL(pointer.url, origin), { signal: AbortSignal.timeout(60000) });
      if (!response.ok) throw new Error(`Artwork download failed (${response.status}): ${pointer.original_filename}`);
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length !== pointer.size) throw new Error(`Artwork byte size changed: ${pointer.original_filename}`);
      const file = path.join(root, pointer.url.slice(1));
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, bytes);
      records.push({ url: pointer.url, size: bytes.length, sha256: createHash("sha256").update(bytes).digest("hex") });
    }));
  }
  await writeFile(path.join(root, "media-integrity.json"), JSON.stringify(records, null, 2));
  await writeFile(path.join(root, ".nojekyll"), "");
  console.log(`Copied ${records.length} original and lossless responsive media files unchanged.`);
}

async function verify() {
  let referenceCount = 0;
  for (const route of publicPages) {
    const file = path.join(root, route.slice(1), "index.html");
    const html = await readFile(file, "utf8");
    if (!/<html[\s>]/i.test(html) || !/<title>[^<]+<\/title>/i.test(html) || !/<h1[\s>]/i.test(html)) {
      throw new Error(`Invalid or empty page export: ${route}`);
    }
    if (/This page didn't load|Page not found/.test(html)) throw new Error(`Error page exported at ${route}`);
    const pageUrl = `https://yashundel0.github.io${pagesBase}${route.slice(1)}`;
    const refs = [...html.matchAll(/\b(?:src|href)="([^"]+)"/g)].map((match) => match[1]);
    for (const match of html.matchAll(/\bsrcSet="([^"]+)"/gi)) {
      refs.push(...match[1].split(",").map((item) => item.trim().split(/\s+/)[0]));
    }
    for (const ref of refs) {
      if (/^(mailto:|tel:|data:|#)/.test(ref)) continue;
      const target = localFile(ref, pageUrl);
      if (!target) continue;
      if (!(await exists(target)) && !(await exists(path.join(target, "index.html")))) {
        throw new Error(`Missing linked page or asset at ${route}: ${ref}`);
      }
      referenceCount++;
    }
    if (!/<script[^>]+src="/.test(html)) throw new Error(`No JavaScript entry on ${route}`);
  }
  const integrity = JSON.parse(await readFile(path.join(root, "media-integrity.json"), "utf8"));
  if (integrity.length !== (await assetPointers()).length) throw new Error("Missing media integrity records");
  for (const record of integrity) {
    const bytes = await readFile(path.join(root, record.url.slice(1)));
    if (bytes.length !== record.size || createHash("sha256").update(bytes).digest("hex") !== record.sha256) {
      throw new Error(`Media integrity mismatch: ${record.url}`);
    }
  }
  // Custom 404 is a real missing-page export, not a redirect that masks failures.
  const missing = path.join(root, "404.html");
  if (!(await exists(missing))) {
    const html = await readFile(path.join(root, "index.html"), "utf8");
    // The client router handles unknown URLs on GitHub's custom 404, preserving navigation.
    await writeFile(missing, html);
  }
  console.log(`Verified ${publicPages.length} complete HTML pages, ${referenceCount} local references and ${integrity.length} media files.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  if (process.argv[2] === "prepare") await prepare();
  else if (process.argv[2] === "verify") await verify();
  else throw new Error("Use: node scripts/pages-artifact.mjs prepare|verify");
}