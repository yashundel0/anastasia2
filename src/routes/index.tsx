import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  const [font, setFont] = useState("cormorant");
  const fonts = [
    { value: "cormorant", label: "Cormorant" },
    { value: "bodoni", label: "Bodoni" },
    { value: "manrope", label: "Manrope" },
    { value: "barlow", label: "Barlow" },
  ];
  return (
    <div className="min-h-screen bg-background">
      <header className="portfolio-hero relative flex items-center overflow-hidden bg-ink">
        <SiteNav overHero />
        <div className="hero-copy relative w-full text-center">
          <h1 className={`hero-title hero-font-${font} text-ink-foreground`}>
            <span className="block">ANASTASIA</span>
            <span className="block">EVDOKIMOVA</span>
          </h1>
          <p className="hero-subtitle text-ink-foreground">CONTEMPORARY ARTIST</p>
        </div>
        <div role="group" aria-label="Hero typography" className="hero-font-picker">
          {fonts.map((option) => (
            <Button key={option.value} variant="ghost" aria-pressed={font === option.value}
              title={`Preview ${option.label}`} onClick={() => setFont(option.value)}
              className={`hero-font-option hero-font-${option.value}`}>
              {option.label}
            </Button>
          ))}
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
