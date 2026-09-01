import Link from "next/link";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES, type ImageKey } from "@/lib/images";
import type { Article } from "@/lib/articles";

function getImageFromPath(path: string) {
  const key = Object.entries(IMAGES).find(([, image]) => image.src === path)?.[0] as
    | ImageKey
    | undefined;
  return key ? IMAGES[key] : null;
}

export function ArticleCard({ article }: { article: Article }) {
  const image = getImageFromPath(article.featuredImage);

  return (
    <article className="border-b border-line-white pb-8">
      {image && (
        <Link href={`/makaleler/${article.slug}`} className="mb-5 block overflow-hidden">
          <SmartImage image={image} aspectRatio="16/10" sizes="(max-width: 768px) 100vw, 33vw" />
        </Link>
      )}
      <p className="text-[0.72rem] tracking-[0.18em] text-gold uppercase">
        {article.category}
      </p>
      <h2 className="mt-3 font-serif text-3xl text-cream">
        <Link href={`/makaleler/${article.slug}`} className="hover:text-gold-light">
          {article.title}
        </Link>
      </h2>
      <p className="mt-3 text-muted">{article.description}</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
        <span>{new Date(article.publishedAt).toLocaleDateString("tr-TR")}</span>
        <span>{article.readingMinutes} dk okuma</span>
      </div>
    </article>
  );
}
