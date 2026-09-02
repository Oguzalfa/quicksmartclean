import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { getAllServiceSlugs } from "@/lib/services-data";
import { getAllSectorSlugs } from "@/lib/sectors-data";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/hizmetler",
    "/sektorler",
    "/makaleler",
    "/hakkimizda",
    "/iletisim",
    "/kurumsal-teklif",
    "/calismalarimiz",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date("2026-09-01"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: absoluteUrl(`/hizmetler/${slug}`),
    lastModified: new Date("2026-09-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const sectorPages = getAllSectorSlugs().map((slug) => ({
    url: absoluteUrl(`/sektorler/${slug}`),
    lastModified: new Date("2026-09-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articlePages = getAllArticles().map((article) => ({
    url: absoluteUrl(`/makaleler/${article.slug}`),
    lastModified: new Date(article.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...sectorPages, ...articlePages];
}
