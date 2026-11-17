import { describe, expect, it } from "vitest";
import { artworks, featuredArtworks } from "@/lib/artworks";

describe("Featured selection", () => {
  it("shows exactly the two original artworks, purple/blue/orange first", () => {
    expect(artworks.map((work) => work.slug)).toEqual(["artwork-1", "artwork-2"]);
    expect(featuredArtworks).toEqual(artworks);
  });
  it("identifies the second artwork with the supplied title", () => {
    expect(artworks[1]?.title).toBe("ENTROPY");
  });
});
