import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteLayout } from "@/components/SiteLayout";
import { getAllArticles, getFeaturedArticle } from "@/lib/articles";
import { createPageMetadata } from "@/lib/metadata";
import { ARTICLE_CATEGORIES } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Bilgi Merkezi",
  description:
    "Profesyonel temizlik, hijyen ve operasyon ihtiyaçlarına yönelik rehberler, kontrol listeleri ve uzman içerikleri.",
  path: "/makaleler",
});

export default function ArticlesPage() {
  const articles = getAllArticles();
  const featured = getFeaturedArticle();
  const rest = articles.filter((article) => article.slug !== featured?.slug);

  return (
    <SiteLayout>
      <section className="section-pad pt-32">
        <div className="site-shell-wide">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Bilgi Merkezi" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4rem)] text-cream">
            Profesyonel Temizlik Bilgi Merkezi
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            Farklı sektörlerin temizlik, hijyen ve operasyon ihtiyaçlarına
            yönelik hazırladığımız rehberleri inceleyin.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {ARTICLE_CATEGORIES.map((category) => (
              <span
                key={category}
                className="border border-line-white px-3 py-2 text-[0.72rem] tracking-[0.12em] text-muted uppercase"
              >
                {category}
              </span>
            ))}
          </div>

          {featured && (
            <div className="mt-14 border border-line-white p-6 md:p-8">
              <p className="text-[0.72rem] tracking-[0.18em] text-gold uppercase">
                Öne Çıkan Makale
              </p>
              <ArticleCard article={featured} />
            </div>
          )}

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
