import type { MetadataRoute } from "next";
import { NEWS } from "@/app/lib/newsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kart.ee";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/talendid-rajale`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/kardiakadeemia`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/voistlussarjad`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/hobikart`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tulemused`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/uudised`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/meist`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/galerii`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const newsRoutes: MetadataRoute.Sitemap = NEWS.map((post) => ({
    url: `${base}/uudised/${post.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
