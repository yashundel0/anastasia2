import { createFileRoute, Link } from "@tanstack/react-router";
import { featuredArtworks } from "@/lib/artworks";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { ArtworkGallery } from "@/components/ArtworkGallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anastasia Evdokimova — Contemporary Artist, Moscow | Dubai" },
      { name: "description", content: "Portfolio of contemporary artist Anastasia Evdokimova. Paintings 2017–2023. Moscow | Dubai." },
      { property: "og:title", content: "Anastasia Evdokimova — Contemporary Artist" },
      { property: "og:description", content: "Paintings 2017–2023. Moscow | Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="portfolio-hero relative flex items-center overflow-hidden bg-ink">
        <SiteNav overHero />
        <div className="hero-copy relative w-full text-center">
          <h1 className="hero-title text-ink-foreground"><Link to="/" className="artist-home-link">EVDOKIMOVA ANASTASIA</Link></h1>
          <p className="hero-subtitle text-ink-foreground">CONTEMPORARY ARTIST</p>
        </div>
      </header>

      <main id="work" className="exhibition-main pt-10">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6 px-6 md:px-[9%]">
          <h2 className="display featured-heading text-4xl text-foreground">Featured Works</h2>
        </div>
        <ArtworkGallery works={featuredArtworks} showCaptions={false} />
      </main>
      <SiteFooter />
    </div>
  );
}
