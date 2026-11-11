import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { artworks } from "@/lib/artworks";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const i = artworks.findIndex((w) => w.slug === params.slug);
    if (i < 0) throw notFound();
    return { work: artworks[i], next: artworks[(i + 1) % artworks.length], prev: artworks[(i - 1 + artworks.length) % artworks.length] };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.work.title} (${loaderData.work.year}) — Anastasia Evdokimova` },
          { name: "description", content: `${loaderData.work.title}, ${loaderData.work.year}. Original painting by Anastasia Evdokimova.` },
          { property: "og:title", content: `${loaderData.work.title} — Anastasia Evdokimova` },
          { property: "og:description", content: `Original painting, ${loaderData.work.year}.` },
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
        <h1 className="display text-5xl text-foreground md:text-7xl">{work.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Original painting by Anastasia Evdokimova. {work.year}. {work.tags}.</p>
        <div className="mt-10 flex justify-center bg-ink p-6 md:p-16">
          <img src={work.image} alt={`${work.title}, ${work.year}`} className="max-h-[85vh] w-auto object-contain" />
        </div>
        <div className="mt-10 flex justify-between gap-4">
          <Link to="/work/$slug" params={{ slug: prev.slug }} className="btn-outline-dark">← {prev.title}</Link>
          <Link to="/work/$slug" params={{ slug: next.slug }} className="btn-outline-dark">{next.title} →</Link>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
