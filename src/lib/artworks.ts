import artwork1 from "@/assets/art/artwork-1.jpeg.asset.json";
import artwork2 from "@/assets/art/artwork-2.jpg.asset.json";
import hero from "@/assets/art/hero-cover.jpg.asset.json";
import studio from "@/assets/art/artist-studio.jpg.asset.json";
import portrait from "@/assets/art/artist-portrait.jpg.asset.json";

export const heroImage = hero.url;
export const studioImage = studio.url;
export const portraitImage = portrait.url;

export type Artwork = { slug: string; title: string; year: number | null; image: string; tags: string };

const a = (slug: string, title: string, year: number | null, image: string, tags: string): Artwork => ({ slug, title, year, image, tags });

// Original paintings only. Titles, dates and materials are intentionally
// neutral until the artist provides them — do not invent them.
export const artworks: Artwork[] = [
  a("artwork-1", "Untitled", null, artwork1.url, ""),
  a("artwork-2", "Untitled", null, artwork2.url, ""),
];

export const featuredArtworks = artworks;

export const contact = { email: "siaevdokimova@gmail.com", phone: "+971 555 790995", phoneHref: "tel:+971555790995", instagram: "https://www.instagram.com/sia_evdokimova?vrfl=NGpkbTZreGF1NnE2", cities: "Dubai" };
