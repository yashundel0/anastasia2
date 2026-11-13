import { describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import { resolve } from "node:path";

describe("Pages build-only fetch entry", () => {
  it("resolves the official static preset to a JavaScript entry and the correct public directory", () => {
    // Native Node loads Nitro config; virtual modules only exist during bundling.
    const output = execFileSync(process.execPath, ["--input-type=module", "-e", `
      import { createNitro } from 'nitro/builder';
      import { access } from 'node:fs/promises';
      const nitro = await createNitro({ preset: 'github_pages', rootDir: process.cwd(), builder: 'vite' });
      await access(nitro.options.entry);
      console.log(JSON.stringify({ preset: nitro.options.preset, static: nitro.options.static, entry: nitro.options.entry, publicDir: nitro.options.output.publicDir }));
      await nitro.close();
    `], { encoding: "utf8", env: { ...process.env, GITHUB_PAGES: "true" } });
    const config = JSON.parse(output.trim().split("\n").at(-1) ?? "{}");
    expect(config.preset).toBe("github-pages");
    expect(config.static).toBe(true);
    expect(config.entry).toBe(resolve("scripts/pages-renderer.mjs"));
    expect(config.publicDir.replace(/\/$/, "")).toBe(resolve(".output/public"));
  });
});