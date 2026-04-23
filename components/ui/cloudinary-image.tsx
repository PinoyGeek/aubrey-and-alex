"use client"

import NextImage, { type ImageProps } from "next/image"

/** Thin wrapper over Next.js `<Image />` for assets in `/public`. */
export function CloudinaryImage(props: ImageProps) {
  return <NextImage {...props} />
}
