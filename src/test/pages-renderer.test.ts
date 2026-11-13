import { describe, expect, it, vi } from "vitest";

vi.mock("#nitro/virtual/polyfills", () => ({}));
vi.mock("nitro/app", () => ({
  useNitroApp: () => ({ fetch: async (request: Request) => new Response(new URL(request.url).pathname) }),
}));

describe("Pages build-only fetch entry", () => {
  it("provides the fetch interface needed for prerendering without an HTML SSR entry", async () => {
    const { default: renderer } = await import("../../scripts/pages-renderer.mjs");
    const response = await renderer.fetch(new Request("https://example.test/anastasia2/about"));
    expect(response.status).toBe(200);
    expect(await response.text()).toBe("/anastasia2/about");
  });
});