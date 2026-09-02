import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SmartImage } from "@/components/SmartImage";
import { SiteLayout } from "@/components/SiteLayout";
import {
  extractFaqsFromContent,
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";
import { IMAGES, type ImageKey } from "@/lib/images";
import { createArticleMetadata } from "@/lib/metadata";
import { absoluteUrl, SEO_IDS } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

function getImageFromPath(path: string) {
  const key = Object.entries(IMAGES).find(([, image]) => image.src === path)?.[0] as
    | ImageKey
    | undefined;
  return key ? IMAGES[key] : null;
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return createArticleMetadata({
    title: article.seoTitle ?? article.title,
    description: article.description,
    path: `/makaleler/${slug}`,
    image: article.featuredImage,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    author: article.author,
  });
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const image = getImageFromPath(article.featuredImage);
  const related = getRelatedArticles(slug);
  const faqs = extractFaqsFromContent(article.content);
  const breadcrumbLabel = article.breadcrumbLabel ?? article.title;

  const pageUrl = absoluteUrl(`/makaleler/${slug}`);

  const jsonLdGraph = [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#blogposting`,
      headline: article.title,
      description: article.description,
      image: absoluteUrl(article.featuredImage),
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      author: {
        "@type": "Organization",
        "@id": SEO_IDS.organization,
        name: article.author,
      },
      publisher: {
        "@id": SEO_IDS.organization,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Bilgi Merkezi",
          item: absoluteUrl("/makaleler"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: breadcrumbLabel,
          item: pageUrl,
        },
      ],
    },
    ...(faqs.length > 0
      ? [
          {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]
      : []),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": jsonLdGraph,
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="section-pad pt-32">
        <div className="site-shell-wide max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Bilgi Merkezi", href: "/makaleler" },
              { label: breadcrumbLabel },
            ]}
          />
          <p className="mt-6 text-[0.72rem] tracking-[0.18em] text-gold uppercase">
            {article.category}
          </p>
          <h1 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08] text-cream">
            {article.title}
          </h1>
          <p className="mt-5 text-lg text-muted">{article.description}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
            <span>{new Date(article.publishedAt).toLocaleDateString("tr-TR")}</span>
            <span>
              Güncelleme: {new Date(article.updatedAt).toLocaleDateString("tr-TR")}
            </span>
            <span>{article.readingMinutes} dk okuma</span>
            <span>{article.author}</span>
          </div>

          {image && (
            <div className="mt-10">
              <SmartImage
                image={{ ...image, alt: article.featuredImageAlt || image.alt }}
                aspectRatio="16/10"
                sizes="(max-width: 768px) 100vw, 720px"
                priority
              />
            </div>
          )}

          <div className="mt-10">
            <ArticleBody content={article.content} />
          </div>

          {related.length > 0 && (
            <div className="mt-14 border-t border-line-white pt-10">
              <h2 className="font-serif text-2xl text-cream">İlgili Makaleler</h2>
              <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-1">
                {related.map((item) => (
                  <ArticleCard key={item.slug} article={item} />
                ))}
              </div>
            </div>
          )}

          <Link href="/kurumsal-teklif" className="btn-primary mt-12 inline-flex">
            Kurumsal Teklif Alın
          </Link>
        </div>
      </article>
    </SiteLayout>
  );
}
