import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { artworks } from "@/lib/artworks";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { ArtworkImage } from "@/components/ArtworkImage";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const i = artworks.findIndex((w) => w.slug === params.slug);
    if (i < 0) throw notFound();
    const work = artworks[i];
    const next = artworks[(i + 1) % artworks.length];
    const prev = artworks[(i - 1 + artworks.length) % artworks.length];
    if (!work || !next || !prev) throw notFound();
    return { work, next, prev };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.work.title} (${loaderData.work.year}) — Anastasia Evdokimova` },
          { name: "description", content: `${loaderData.work.title}, ${loaderData.work.year}. Original painting by Anastasia Evdokimova.` },
          { property: "og:title", content: `${loaderData.work.title} — Anastasia Evdokimova` },
          { property: "og:description", content: `Original painting, ${loaderData.work.year}.` },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Unavailable" }, { name: "robots", content: "noindex" }],
  }),
  component: Work,
});

function Work() {
  const { work, next, prev } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <article key={work.slug} className="mx-auto max-w-[1200px] px-6 fade-up">
        <h1 className="work-title display text-5xl text-foreground md:text-7xl">{work.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Original painting by Anastasia Evdokimova. {work.year}. {work.tags}.</p>
        <div className="work-frame mt-10 flex items-center justify-center bg-ink p-4 sm:p-6 md:p-16">
          <ArtworkImage imageKey={work.slug as keyof typeof import("@/lib/image-metadata").imageMetadata} src={work.image} alt={`${work.title}, ${work.year}`} fetchPriority="high" sizes="(min-width: 1200px) 1024px, (min-width: 768px) calc(100vw - 176px), calc(100vw - 80px)" className="work-image" />
        </div>
        <div className="work-navigation mt-10 grid grid-cols-2 gap-4">
          <Link to="/work/$slug" params={{ slug: prev.slug }} className="btn-outline-dark">← {prev.title}</Link>
          <Link to="/work/$slug" params={{ slug: next.slug }} className="btn-outline-dark">{next.title} →</Link>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
