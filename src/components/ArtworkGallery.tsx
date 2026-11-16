import { Link } from "@tanstack/react-router";
import type { Artwork } from "@/lib/artworks";
import { ArtworkImage } from "@/components/ArtworkImage";
import type { imageMetadata } from "@/lib/image-metadata";

export function ArtworkGallery({ works, showCaptions = false }: { works: readonly Artwork[]; showCaptions?: boolean }) {
  return <div className="artwork-gallery grid grid-cols-1 items-start gap-2 px-1 md:grid-cols-2 md:px-2">
    {works.map((work) => <Link key={work.slug} to="/work/$slug" params={{ slug: work.slug }} aria-label={work.title} className="cover group block">
      <ArtworkImage imageKey={work.slug as keyof typeof imageMetadata} src={work.image} alt={work.title} loading="lazy" sizes="(min-width: 768px) calc((100vw - 24px) / 2), calc(100vw - 8px)" className="cover-img gallery-image" />
      {showCaptions ? <div className="pt-5">
        <h2 className="text-lg font-normal text-foreground">{work.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">Original painting by Anastasia Evdokimova.</p>
        {work.year ? <p className="mt-3 text-xs text-muted-foreground">{work.year}</p> : null}
        {work.tags ? <p className="text-xs text-muted-foreground">{work.tags}</p> : null}
      </div> : null}
    </Link>)}
  </div>;
}
