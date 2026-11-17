import artwork1 from "@/assets/art/artwork-1.jpeg.asset.json";
import artwork2 from "@/assets/art/artwork-2-original-borderless.jpg.asset.json";
import hero from "@/assets/art/hero-cover.jpg.asset.json";
import studio from "@/assets/art/artist-studio.jpg.asset.json";
import portrait from "@/assets/art/artist-portrait.jpg.asset.json";

export const heroImage = hero.url;
export const studioImage = studio.url;
export const portraitImage = portrait.url;

export type Artwork = { slug: string; title: string; year: number | null; image: string; tags: string; description?: readonly string[] };

const a = (slug: string, title: string, year: number | null, image: string, tags: string): Artwork => ({ slug, title, year, image, tags });

// Keep original paintings in the artist's order; use only supplied details.
export const artworks: Artwork[] = [
  {
    ...a("artwork-1", "Geometry of Time", 2022, artwork1.url, "140 × 250 cm | Acrylic on canvas"),
    description: [
      "When I began working on this painting, I was inspired by Antelope Canyon in Arizona. I traveled extensively across America, but unfortunately, I never had the chance to see it with my own eyes. Perhaps that is precisely why I wanted to create my own interpretation of this extraordinary place.",
      "I was fascinated not only by its unusual forms, sculpted by water, but also by the history of their formation. The sandstone that makes up the canyon is approximately 180–190 million years old, while the gorge itself is believed to have been shaped by water erosion over tens or perhaps hundreds of thousands of years.",
      "When I think about these timescales, a human lifetime seems like a fleeting moment. I imagined that everything we experience — all our events, emotions, and memories — could fit into a single thin line on the surface of these rocks.",
      "I am both amazed and inspired by how time, water, and matter have created such beauty. How movement has transformed into a seemingly motionless form, preserving traces of the past within the stone.",
      "Perhaps what seems static is actually in a continuous process of becoming, unfolding on a scale beyond human perception.",
      "Where time ceases to be a unit of measurement, it becomes a mode of matter’s existence.",
    ],
  },
  {
    ...a("artwork-2", "ENTROPY", 2021, artwork2.url, "140 × 250 cm | Acrylic on canvas"),
    description: [
      "When I started working on this large-scale canvas, I wanted to explore something truly monumental. And I couldn’t imagine anything more monumental than the history of the universe.",
      "This is how Entropy came to be — my attempt to artistically reinterpret the Big Bang, an event almost impossible to fathom in its entirety.",
      "Since the dawn of the universe, space has been expanding, matter transforming, and entire worlds arising and vanishing. Entropy is tied to the irreversibility of natural processes and the direction of change that continues throughout cosmic history.",
      "In a sense, we are still living through the consequences of the Big Bang. We exist within an extraordinarily complex system that we cannot fully comprehend.",
      "Through abstract forms, symbols, and recognizable human figures, I sought to convey a space where everything constantly emerges, changes, and transforms. We are merely observers.",
      "We try to explain the world through familiar images, knowledge, and perceptions. But how much can our perception truly grasp of everything that has happened, is happening now, and has yet to unfold? And to what extent do our ideas about the world correspond to reality itself?",
    ],
  },
];

export const featuredArtworks = artworks;

export const contact = { email: "siaevdokimova@gmail.com", phone: "+971 555 790995", phoneHref: "tel:+971555790995", instagram: "https://www.instagram.com/sia_evdokimova?vrfl=NGpkbTZreGF1NnE2", cities: "Dubai" };
