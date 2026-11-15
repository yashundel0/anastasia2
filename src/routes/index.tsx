import { createFileRoute, Link } from "@tanstack/react-router";
import { featuredArtworks } from "@/lib/artworks";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { ArtworkGallery } from "@/components/ArtworkGallery";
import { Button } from "@/components/ui/button";

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
        <div className="hero-copy relative w-full max-w-[900px] pb-10 pt-32">
          <h1 className="hero-title display leading-[0.92] text-ink-foreground">
            Anastasia Evdokimova \: &nbsp;C0NT€MPØRARY<br />ÅRT1ST.<br />
            P41NT1NG / FIGURE / ŚPIRIT.<br />
            Portfolio &nbsp;of 2023 ___ 2017\`017
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 px-[2%]">
            <Button asChild variant="outline" className="hero-action"><a href="#work">More artworks below \\\\\\\\\\\\\\\\\\</a></Button>
            <Button asChild variant="outline" className="hero-action"><Link to="/contact">Moscow x Dubai</Link></Button>
          </div>
        </div>
      </header>

      <main id="work" className="mx-auto max-w-[1560px] px-6 pt-10 md:px-[9%]">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <h2 className="display featured-heading text-4xl text-foreground">Featured Works</h2>
        </div>
        <ArtworkGallery works={featuredArtworks} />
      </main>
      <SiteFooter />
    </div>
  );
}
