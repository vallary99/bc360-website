"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  fullHeight?: boolean;
};

/**
 * Wraps a section in a subtle fade-and-rise reveal the first time it enters
 * the viewport. Respects prefers-reduced-motion via the global CSS rule that
 * zeroes out transition durations.
 *
 * Pass `fullHeight` when this wraps a grid card that needs to stretch to
 * match its row (see the various card grids). Leave it off everywhere else,
 * a hero, a heading block, anything that should size to its own content, or
 * the wrapper will swallow the space a parent `items-center` needs to center
 * against.
 */
export default function Reveal({ children, className = "", delay = 0, fullHeight = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Must start false on both server and client so the initial hydrated markup
  // matches exactly; the effect below decides when to reveal, after mount.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // No IntersectionObserver support: reveal on the next frame instead of
      // synchronously in the effect body.
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${fullHeight ? "h-full" : ""} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
