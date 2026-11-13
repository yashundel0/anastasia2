import { createFileRoute, Link } from "@tanstack/react-router";
import { artworks, heroImage } from "@/lib/artworks";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { ArtworkImage } from "@/components/ArtworkImage";

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
        <ArtworkImage imageKey="hero-cover" src={heroImage} alt="Painting by Anastasia Evdokimova" fetchPriority="high" loading="eager" className="hero-art absolute inset-0 h-full w-full hero-zoom" />
        <div className="absolute inset-0 hero-shade" />
        <div className="hero-copy relative w-full max-w-[900px] pb-10 pt-32">
          <h1 className="hero-title display leading-[0.92] text-ink-foreground">
            Anastasia Evdokimova \: &nbsp;C0NT€MPØRARY<br />ÅRT1ST.<br />
            P41NT1NG / FIGURE / ŚPIRIT.<br />
            Portfolio &nbsp;of 2023 ___ 2017\`017
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 px-[2%]">
            <a href="#work" className="btn-outline">More artworks below \\\\\\\\\\\\\\\\\\</a>
            <Link to="/contact" className="btn-outline">Moscow x Dubai</Link>
          </div>
        </div>
      </header>

      <SiteNav />

      <main id="work" className="mx-auto grid max-w-[1560px] grid-cols-1 gap-x-10 gap-y-14 px-6 md:grid-cols-2 md:px-[9%]">
        {artworks.map((w) => (
          <Link key={w.slug} to="/work/$slug" params={{ slug: w.slug }} className="cover group block">
            <div className="gallery-frame relative aspect-video overflow-hidden bg-ink">
              <ArtworkImage imageKey={w.slug as keyof typeof import("@/lib/image-metadata").imageMetadata} src={w.image} alt={w.title} loading="lazy" sizes="(min-width: 1560px) 620px, (min-width: 768px) 41vw, calc(100vw - 48px)" className="cover-img gallery-image h-full w-full" />
            </div>
            <div className="pt-5">
              <h2 className="text-lg font-semibold text-foreground">{w.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">Original painting by Anastasia Evdokimova.</p>
              <p className="mt-3 text-xs text-muted-foreground">{w.year}</p>
              <p className="text-xs text-muted-foreground">{w.tags}</p>
            </div>
          </Link>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
