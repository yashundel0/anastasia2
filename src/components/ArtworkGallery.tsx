import { Link } from "@tanstack/react-router";
import type { Artwork } from "@/lib/artworks";
import { ArtworkImage } from "@/components/ArtworkImage";
import type { imageMetadata } from "@/lib/image-metadata";

export function ArtworkGallery({ works }: { works: readonly Artwork[] }) {
  return <div className="artwork-gallery grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
    {works.map((work) => <Link key={work.slug} to="/work/$slug" params={{ slug: work.slug }} className="cover group block">
      <div className="gallery-frame relative aspect-video overflow-hidden bg-ink">
        <ArtworkImage imageKey={work.slug as keyof typeof imageMetadata} src={work.image} alt={work.title} loading="lazy" sizes="(min-width: 1560px) 620px, (min-width: 768px) 41vw, calc(100vw - 48px)" className="cover-img gallery-image h-full w-full" />
      </div>
      <div className="pt-5">
        <h2 className="text-lg font-normal text-foreground">{work.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">Original painting by Anastasia Evdokimova.</p>
        <p className="mt-3 text-xs text-muted-foreground">{work.year}</p>
        <p className="text-xs text-muted-foreground">{work.tags}</p>
      </div>
    </Link>)}
  </div>;
}
