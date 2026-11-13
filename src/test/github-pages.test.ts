import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { assetUrl } from "@/lib/asset-url";
import { artworks } from "@/lib/artworks";
import { publicPages, pagesBase } from "../../scripts/public-pages.mjs";

describe("GitHub Pages deployment", () => {
  it("keeps navigation inside the requested /anastasia2/ basepath", () => {
    const router = createRouter({ routeTree, basepath: pagesBase, context: { queryClient: new QueryClient() } });
    expect(router.buildLocation({ to: "/about" }).pathname).toBe("/anastasia2/about");
    expect(router.matchRoutes("/anastasia2/contact").at(-1)?.routeId).toBe("/contact");
    for (const work of artworks) {
      expect(router.matchRoutes(`/anastasia2/work/${work.slug}`).at(-1)?.routeId).toBe("/work/$slug");
    }
  });

  it("exports all 20 public pages including every concrete artwork URL", () => {
    expect(publicPages).toEqual(["/", "/about", "/contact", ...artworks.map((work) => `/work/${work.slug}`)]);
    expect(publicPages).toHaveLength(20);
  });

  it("prefixes both original and responsive media without altering the image identity", () => {
    expect(assetUrl("/__l5e/assets-v1/id/painting.jpg", "/anastasia2/")).toBe("/anastasia2/__l5e/assets-v1/id/painting.jpg");
    expect(assetUrl("/__l5e/assets-v1/id/painting-320.webp", "/anastasia2/")).toBe("/anastasia2/__l5e/assets-v1/id/painting-320.webp");
    expect(assetUrl("/__l5e/assets-v1/id/painting.jpg", "/")).toBe("/__l5e/assets-v1/id/painting.jpg");
    expect(assetUrl("https://example.com/image.jpg", "/anastasia2/")).toBe("https://example.com/image.jpg");
  });
});