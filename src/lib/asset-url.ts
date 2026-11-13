/** Lovable's asset proxy is mirrored byte-for-byte into the Pages artifact. */
export function assetUrl(url: string, base = import.meta.env.BASE_URL): string {
  return url.startsWith("/__l5e/assets-v1/") ? `${base.replace(/\/$/, "")}${url}` : url;
}