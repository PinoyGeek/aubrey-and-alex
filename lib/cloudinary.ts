/**
 * Local-first helpers: `public/` paths are returned as-is so Next.js Image
 * can optimize them. Options are kept in the signature for call-site
 * compatibility with older Cloudinary-based code.
 */
export interface CloudinaryUrlOptions {
  width?: number
  height?: number
  quality?: string | number
  crop?: "fill" | "fit" | "scale" | "crop" | "pad"
  gravity?: string
}

export interface CloudinaryVideoOptions {
  width?: number
  height?: number
  quality?: string | number
}

export function getCloudinaryVideoUrl(
  src: string,
  _options: CloudinaryVideoOptions = {}
): string {
  if (src.startsWith("https://") || src.startsWith("http://")) return src
  return src
}

export function getCloudinaryUrl(
  src: string,
  _options: CloudinaryUrlOptions = {}
): string {
  if (src.startsWith("https://") || src.startsWith("http://")) return src
  return src
}
