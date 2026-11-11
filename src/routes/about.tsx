import { createFileRoute } from "@tanstack/react-router";
import { studioImage } from "@/lib/artworks";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Anastasia Evdokimova" },
      { name: "description", content: "Anastasia Evdokimova is a contemporary artist working between Moscow and Dubai." },
      { property: "og:title", content: "About Anastasia Evdokimova" },
      { property: "og:description", content: "Contemporary artist, Moscow | Dubai." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto grid max-w-[1200px] gap-12 px-6 fade-up md:grid-cols-2">
        <img src={studioImage} alt="Anastasia Evdokimova in her studio" className="w-full object-cover" />
        <div>
          <h1 className="display text-6xl text-foreground md:text-8xl">Anastasia<br />Evdokimova</h1>
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
