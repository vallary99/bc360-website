"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

/**
 * Wraps next/image with a shimmering skeleton placeholder shown until the
 * image has actually loaded. next/image already lazy-loads by default
 * (unless `priority` is set), this adds the visual loading state on top.
 * Intended for `fill` usage inside a positioned, sized wrapper.
 */
export default function ImageWithSkeleton({
  className = "",
  alt,
  onLoad,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="skeleton absolute inset-0" aria-hidden="true" />
      )}
      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </>
  );
}
