import { createFileRoute } from "@tanstack/react-router";
import { studioImage } from "@/lib/artworks";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { ArtworkImage } from "@/components/ArtworkImage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Anastasia Evdokimova" },
      { name: "description", content: "Anastasia Evdokimova is a contemporary artist working between Moscow and Dubai." },
      { property: "og:title", content: "About Anastasia Evdokimova" },
      { property: "og:description", content: "Contemporary artist, Moscow | Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="about-layout mx-auto grid max-w-[1200px] gap-8 px-6 fade-up md:grid-cols-2 lg:gap-12">
        <ArtworkImage imageKey="artist-studio" src={studioImage} alt="Anastasia Evdokimova in her studio" fetchPriority="high" className="studio-image" sizes="(min-width: 1200px) 552px, (min-width: 768px) 46vw, calc(100vw - 48px)" />
        <div className="min-w-0">
          <h1 className="about-title display text-foreground">Anastasia<br />Evdokimova</h1>
          <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">Contemporary Artist — Moscow | Dubai</p>
          <p className="mt-8 leading-relaxed text-foreground">
            Paintings from 2017 to 2023: figures, faces and fragments of memory dissolved into saturated colour and fractured form —
            from the folk ornaments of Khokhloma and Gzhel to dreamlike, cosmic visions.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
