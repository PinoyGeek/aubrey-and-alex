"use client"

import NextImage, { type ImageProps } from "next/image"

/** Next.js `Image` for files under `public/`. */
export function PublicImage(props: ImageProps) {
  return <NextImage {...props} />
}
