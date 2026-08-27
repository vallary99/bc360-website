import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/locations",
    "/about",
    "/resources",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${site.url}/locations/${l.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${site.url}/resources/${a.slug}`,
    lastModified: new Date(a.datePublished),
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...articleRoutes];
}
