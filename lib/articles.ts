import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  featuredImage: string;
  featuredImageAlt: string;
  keywords: string[];
  featured?: boolean;
  draft?: boolean;
};

export type Article = ArticleFrontmatter & {
  content: string;
  readingMinutes: number;
};

const articlesDirectory = path.join(process.cwd(), "content", "articles");

function isPublished(article: ArticleFrontmatter) {
  if (process.env.NODE_ENV === "production" && article.draft) {
    return false;
  }
  return true;
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) return [];

  const files = fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".md"));

  const articles = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(articlesDirectory, file), "utf8");
      const { data, content } = matter(raw);
      const frontmatter = data as ArticleFrontmatter;
      if (!isPublished(frontmatter)) return null;

      return {
        ...frontmatter,
        content,
        readingMinutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
      } satisfies Article;
    })
    .filter((article): article is Article => article !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

  return articles;
}

export function getArticleBySlug(slug: string) {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getFeaturedArticle() {
  return getAllArticles().find((article) => article.featured) ?? getAllArticles()[0];
}

export function getArticlesByCategory(category: string) {
  return getAllArticles().filter((article) => article.category === category);
}

export function getRelatedArticles(slug: string, limit = 3) {
  const current = getArticleBySlug(slug);
  if (!current) return [];

  return getAllArticles()
    .filter(
      (article) =>
        article.slug !== slug && article.category === current.category,
    )
    .slice(0, limit);
}
