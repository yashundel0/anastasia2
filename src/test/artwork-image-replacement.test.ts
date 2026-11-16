import { expect, it } from "vitest";
import { artworks, featuredArtworks } from "@/lib/artworks";
import { imageMetadata } from "@/lib/image-metadata";
import original from "@/assets/art/artwork-2-original-borderless.jpg.asset.json";

it("uses only the uploaded 1280 × 702 original for the second artwork everywhere", () => {
  expect(artworks[1]?.slug).toBe("artwork-2");
  expect(artworks[1]?.image).toBe(original.url);
  expect(featuredArtworks[1]?.image).toBe(original.url);
  expect(imageMetadata["artwork-2"]).toEqual({
    width: 1280,
    height: 702,
    sources: [{ width: 1280, url: original.url }],
  });
});