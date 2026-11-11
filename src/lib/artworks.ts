import regression from "@/assets/art/regression.jpg.asset.json";
import dreamPulse from "@/assets/art/dream-pulse.jpg.asset.json";
import evanesense from "@/assets/art/evanesense.jpg.asset.json";
import eternalPassage from "@/assets/art/the-eternal-passage.jpg.asset.json";
import russianFeminine from "@/assets/art/the-russian-feminine.jpg.asset.json";
import khokhloma from "@/assets/art/khokhloma-dawn.jpg.asset.json";
import hiddenSelf from "@/assets/art/the-hidden-self.jpg.asset.json";
import fleeting from "@/assets/art/fleeting-lights.jpg.asset.json";
import kiss from "@/assets/art/kiss-of-souls.jpg.asset.json";
import gzhel from "@/assets/art/gzhel-blossom.jpg.asset.json";
import kerchief from "@/assets/art/red-kerchief.jpg.asset.json";
import whispers from "@/assets/art/whispers-of-eternity.jpg.asset.json";
import prey from "@/assets/art/prey.jpg.asset.json";
import tropical from "@/assets/art/tropical-flame.jpg.asset.json";
import savanna from "@/assets/art/savannas-heart.jpg.asset.json";
import dusk from "@/assets/art/dusk-and-dawn.jpg.asset.json";
import vision from "@/assets/art/vision-beyond-time.jpg.asset.json";
import hero from "@/assets/art/hero-cover.jpg.asset.json";
import studio from "@/assets/art/artist-studio.jpg.asset.json";

export const heroImage = hero.url;
export const studioImage = studio.url;

export type Artwork = { slug: string; title: string; year: number; image: string; tags: string };

const a = (slug: string, title: string, year: number, image: string, tags: string): Artwork => ({ slug, title, year, image, tags });

export const artworks: Artwork[] = [
  a("vision-beyond-time", "Vision Beyond Time", 2022, vision.url, "Painting, Fine Arts"),
  a("the-eternal-passage", "The Eternal Passage", 2023, eternalPassage.url, "Painting, Fine Arts"),
  a("tropical-flame", "Tropical Flame", 2023, tropical.url, "Painting, Colour"),
  a("whispers-of-eternity", "Whispers Of Eternity", 2022, whispers.url, "Painting, Installation"),
  a("the-russian-feminine", "The Russian Feminine", 2021, russianFeminine.url, "Painting, Russian Heritage"),
  a("khokhloma-dawn", "Khokhloma Dawn", 2021, khokhloma.url, "Painting, Russian Heritage"),
  a("gzhel-blossom", "Gzhel Blossom", 2021, gzhel.url, "Painting, Russian Heritage"),
  a("red-kerchief", "Red Kerchief", 2021, kerchief.url, "Painting, Russian Heritage"),
  a("prey", "Prey", 2021, prey.url, "Painting, Fine Arts"),
  a("evanesense", "Evanesense", 2020, evanesense.url, "Painting, Fine Arts"),
  a("fleeting-lights", "Fleeting Lights", 2020, fleeting.url, "Painting, Colour"),
  a("savannas-heart", "Savanna’s Heart", 2019, savanna.url, "Painting, Colour"),
  a("dusk-and-dawn", "Dusk & Dawn", 2019, dusk.url, "Painting, Fine Arts"),
  a("dream-pulse", "Dream Pulse", 2018, dreamPulse.url, "Painting, Fine Arts"),
  a("the-hidden-self", "The Hidden Self", 2018, hiddenSelf.url, "Painting, Portrait"),
  a("kiss-of-souls", "Kiss Of Souls", 2018, kiss.url, "Painting, Fine Arts"),
  a("regression", "Regression", 2017, regression.url, "Painting, Portrait"),
];

export const contact = { email: "evdokimovasia@gmail.com", phone: "+79250420085", cities: "Moscow | Dubai" };
