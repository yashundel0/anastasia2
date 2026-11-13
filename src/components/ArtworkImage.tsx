import type { ImgHTMLAttributes } from "react";
import { imageMetadata } from "@/lib/image-metadata";

type ImageKey = keyof typeof imageMetadata;
type Props = ImgHTMLAttributes<HTMLImageElement> & { imageKey: ImageKey };

/** Original fallback and lossless responsive copies share the exact same composition. */
export function ArtworkImage({ imageKey, sizes, ...props }: Props) {
  const image = imageMetadata[imageKey];
  return (
    <img
      width={image.width}
      height={image.height}
      srcSet={image.sources.map((source) => `${source.url} ${source.width}w`).join(", ")}
      sizes={sizes ?? "100vw"}
      decoding="async"
      {...props}
    />
  );
}