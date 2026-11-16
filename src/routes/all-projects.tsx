import { createFileRoute } from "@tanstack/react-router";
import { artworks } from "@/lib/artworks";
import { ArtworkGallery } from "@/components/ArtworkGallery";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/all-projects")({
  head: () => ({ meta: [
    { title: "Artworks — Anastasia Evdokimova" },
    { name: "description", content: "The complete collection of original paintings by Anastasia Evdokimova, 2017–2023." },
    { property: "og:title", content: "Artworks — Anastasia Evdokimova" },
    { property: "og:description", content: "Explore the complete collection of original paintings, 2017–2023." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AllProjects,
});
function AllProjects() {
  return <div className="min-h-screen bg-background">
    <SiteNav />
    <main className="exhibition-main fade-up">
      <h1 className="display mb-12 px-6 text-6xl text-foreground md:px-[9%] md:text-8xl">Artworks</h1>
      <ArtworkGallery works={artworks} />
    </main>
    <SiteFooter />
  </div>;
}
