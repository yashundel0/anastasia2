import { describe, expect, it } from "vitest";
import { artworks, featuredArtworks } from "@/lib/artworks";

describe("Featured selection", () => {
  it("selects exactly five unique original works", () => {
    expect(featuredArtworks).toHaveLength(5);
    expect(new Set(featuredArtworks.map((work) => work.slug)).size).toBe(5);
    expect(featuredArtworks.every((work) => artworks.includes(work))).toBe(true);
  });
  it("preserves all seventeen works and non-featured originals", () => {
    expect(artworks).toHaveLength(17);
    expect(artworks.map((work) => work.slug)).toEqual([
      "vision-beyond-time", "the-eternal-passage", "tropical-flame", "whispers-of-eternity", "the-russian-feminine",
      "khokhloma-dawn", "gzhel-blossom", "red-kerchief", "prey", "evanesense", "fleeting-lights", "savannas-heart",
      "dusk-and-dawn", "dream-pulse", "the-hidden-self", "kiss-of-souls", "regression",
    ]);
  });
});
