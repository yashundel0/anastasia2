import { createFileRoute } from "@tanstack/react-router";
import { portraitImage } from "@/lib/artworks";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { ArtworkImage } from "@/components/ArtworkImage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Anastasia Evdokimova" },
      { name: "description", content: "Anastasia Evdokimova is a contemporary artist living and working in Dubai, exploring reality and perception through abstraction and surrealism." },
      { property: "og:title", content: "About Anastasia Evdokimova" },
      { property: "og:description", content: "A Dubai-based contemporary artist exploring reality and perception through abstraction and surrealism." },
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
        <ArtworkImage imageKey="artist-portrait" src={portraitImage} alt="Anastasia Evdokimova in her studio" fetchPriority="high" className="studio-image" sizes="(min-width: 1200px) 552px, (min-width: 768px) 46vw, calc(100vw - 48px)" />
        <div className="about-copy min-w-0">
          <h1 className="featured-heading text-foreground">About</h1>
          <div className="mt-8 space-y-6 leading-relaxed text-foreground">
            <p>Anastasia Evdokimova is a contemporary artist living and working in Dubai. In her practice, abstraction and surrealism become a means of exploring the nature of reality and the limits of human perception.</p>
            <p>Anastasia grew up in a family where art was an integral part of life, independent of professional ambitions. Painting, sculpture, and the creation of bas-reliefs coexisted with technical craftsmanship and engineering.</p>
            <p>Raised with an appreciation for classical painting, she discovered contemporary art in 2014 through her engagement with the American art scene, which initiated a period of independent research and experimentation in painting. Studying art under the guidance of art historians, completing a year of study at the British Higher School of Art and Design in Moscow, and developing her own practice gradually led to the formation of her distinctive visual language.</p>
            <p>Systems and chaos. Reality and its perception. Stability and transformation.</p>
            <p>At the heart of her practice lies the uncertainty of existence and the tension between the human desire to impose order on reality and its inherently mutable nature.</p>
            <p>In her paintings, space does not conform to a single coordinate system. Spatial structures intersect and flow into one another, stable forms lose their boundaries, and conventional notions of time and space are called into question. The boundaries between the material and the imaginary gradually dissolve.</p>
            <p>The artist does not seek to propose an alternative model of reality. Instead, her works challenge the notion that any model can ever be definitive.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
