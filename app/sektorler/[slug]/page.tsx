import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SmartImage } from "@/components/SmartImage";
import { SiteLayout } from "@/components/SiteLayout";
import { getArticleBySlug } from "@/lib/articles";
import { IMAGES } from "@/lib/images";
import { createPageMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/services-data";
import { getAllSectorSlugs, getSectorBySlug } from "@/lib/sectors-data";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSectorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};

  return createPageMetadata({
    title: sector.shortTitle,
    description: sector.summary,
    path: `/sektorler/${slug}`,
    image: sector.imageKey ? IMAGES[sector.imageKey].src : undefined,
  });
}

export default async function SectorDetailPage({ params }: Props) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const image = sector.imageKey ? IMAGES[sector.imageKey] : null;
  const relatedServices = sector.relatedServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter(Boolean);
  const relatedArticles = sector.relatedArticleSlugs
    .map((articleSlug) => getArticleBySlug(articleSlug))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: sector.shortTitle,
    description: sector.description,
    url: absoluteUrl(`/sektorler/${slug}`),
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section-pad pt-32">
        <div className="site-shell-wide">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Sektörler", href: "/sektorler" },
              { label: sector.shortTitle },
            ]}
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] text-cream">
                {sector.shortTitle}
              </h1>
              <p className="mt-5 text-lg text-muted">{sector.summary}</p>
              <p className="mt-6 text-cream/88">{sector.description}</p>
            </div>
            {image && (
              <div className="lg:col-span-7">
                <SmartImage
                  image={image}
                  aspectRatio={image.aspectRatio}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            )}
          </div>

          {relatedServices.length > 0 && (
            <div className="mt-14 border-t border-line-white pt-10">
              <h2 className="font-serif text-2xl text-cream">İlgili Hizmetler</h2>
              <ul className="mt-4 space-y-3">
                {relatedServices.map((service) => (
                  <li key={service!.slug}>
                    <Link href={`/hizmetler/${service!.slug}`} className="text-gold hover:underline">
                      {service!.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {relatedArticles.length > 0 && (
            <div className="mt-10">
              <h2 className="font-serif text-2xl text-cream">İlgili Makaleler</h2>
              <ul className="mt-4 space-y-3">
                {relatedArticles.map((article) => (
                  <li key={article!.slug}>
                    <Link href={`/makaleler/${article!.slug}`} className="text-gold hover:underline">
                      {article!.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link href="/kurumsal-teklif" className="btn-primary mt-12 inline-flex">
            Sektörel Teklif Alın
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
