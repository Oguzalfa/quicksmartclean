import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { SECTOR_PAGES, SERVICE_PAGES } from "@/lib/service-pages";
import { getAllServiceSlugs } from "@/lib/services-data";
import { getAllSectorSlugs } from "@/lib/sectors-data";
import { absoluteUrl } from "@/lib/site";

const CATALOG_DATE = "2026-09-01";

const STATIC_PAGES: { path: string; lastModified: string; priority: number }[] = [
  { path: "/", lastModified: "2026-09-25", priority: 1 },
  { path: "/hizmetler", lastModified: "2026-09-25", priority: 0.8 },
  { path: "/sektorler", lastModified: "2026-09-25", priority: 0.8 },
  { path: "/kurumsal-teklif", lastModified: "2026-09-25", priority: 0.7 },
  { path: "/iletisim", lastModified: "2026-09-25", priority: 0.7 },
  { path: "/hakkimizda", lastModified: "2026-09-25", priority: 0.6 },
  { path: "/calismalarimiz", lastModified: "2026-09-25", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const latestArticleDate = articles
    .map((article) => article.updatedAt)
    .sort()
    .at(-1);

  const staticPages = STATIC_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(page.lastModified),
    priority: page.priority,
  }));

  const articleIndex = {
    url: absoluteUrl("/makaleler"),
    lastModified: new Date(latestArticleDate ?? CATALOG_DATE),
    priority: 0.7,
  };

  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: absoluteUrl(`/hizmetler/${slug}`),
    lastModified: new Date(SERVICE_PAGES[slug]?.updatedAt ?? CATALOG_DATE),
    priority: SERVICE_PAGES[slug] ? 0.9 : 0.6,
  }));

  const sectorPages = getAllSectorSlugs().map((slug) => ({
    url: absoluteUrl(`/sektorler/${slug}`),
    lastModified: new Date(SECTOR_PAGES[slug]?.updatedAt ?? CATALOG_DATE),
    priority: SECTOR_PAGES[slug] ? 0.9 : 0.6,
  }));

  const articlePages = articles.map((article) => ({
    url: absoluteUrl(`/makaleler/${article.slug}`),
    lastModified: new Date(article.updatedAt),
    priority: 0.6,
  }));

  return [...staticPages, articleIndex, ...servicePages, ...sectorPages, ...articlePages];
}
