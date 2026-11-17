import { describe, expect, it } from "vitest";
import { artworks } from "@/lib/artworks";

describe("Supplied artwork details", () => {
  it("uses the supplied first artwork year", () => {
    expect(artworks[0]?.year).toBe(2022);
  });
  it("uses the supplied first artwork dimensions and medium", () => {
    expect(artworks[0]?.tags).toBe("140 × 250 cm | Acrylic on canvas");
  });
  it("uses the supplied second artwork year", () => {
    expect(artworks[1]?.year).toBe(2021);
  });
  it("uses the supplied second artwork dimensions and medium", () => {
    expect(artworks[1]?.tags).toBe("140 × 250 cm | Acrylic on canvas");
  });
});