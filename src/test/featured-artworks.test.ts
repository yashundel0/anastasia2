import { describe, expect, it } from "vitest";
import { artworks, featuredArtworks } from "@/lib/artworks";

describe("Featured selection", () => {
  it("shows exactly the two original artworks, purple/blue/orange first", () => {
    expect(artworks.map((work) => work.slug)).toEqual(["artwork-1", "artwork-2"]);
    expect(featuredArtworks).toEqual(artworks);
  });
  it("keeps the second artwork's details neutral until the artist provides them", () => {
    for (const work of artworks.slice(1)) {
      expect(work.title).toBe("Untitled");
      expect(work.year).toBeNull();
      expect(work.tags).toBe("");
    }
  });
});
