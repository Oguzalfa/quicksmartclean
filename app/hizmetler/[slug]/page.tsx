import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteLayout } from "@/components/SiteLayout";
import { getArticleBySlug } from "@/lib/articles";
import { createPageMetadata } from "@/lib/metadata";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services-data";
import { getSectorBySlug } from "@/lib/sectors-data";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.summary,
    path: `/hizmetler/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedSectors = service.relatedSectorSlugs
    .map((sectorSlug) => getSectorBySlug(sectorSlug))
    .filter(Boolean);
  const relatedArticles = service.relatedArticleSlugs
    .map((articleSlug) => getArticleBySlug(articleSlug))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      telephone: SITE.phoneE164,
      url: SITE.url,
    },
    areaServed: "Türkiye",
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section-pad pt-32">
        <div className="site-shell-wide max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hizmetler", href: "/hizmetler" },
              { label: service.title },
            ]}
          />
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5vw,4rem)] text-cream">
            {service.title}
          </h1>
          <p className="mt-5 text-lg text-muted">{service.summary}</p>
          <p className="mt-6 text-cream/88">{service.description}</p>

          <div className="mt-10 grid gap-6 border-t border-line-white pt-8 md:grid-cols-2">
            <div>
              <h2 className="text-sm tracking-[0.16em] text-gold uppercase">
                Uygun Sektörler
              </h2>
              <p className="mt-3 text-muted">{service.sectors}</p>
            </div>
            <div>
              <h2 className="text-sm tracking-[0.16em] text-gold uppercase">
                Hizmet Kapsamı
              </h2>
              <p className="mt-3 text-muted">{service.scope}</p>
            </div>
          </div>

          {relatedSectors.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif text-2xl text-cream">İlgili Sektörler</h2>
              <ul className="mt-4 space-y-3">
                {relatedSectors.map((sector) => (
                  <li key={sector!.slug}>
                    <Link href={`/sektorler/${sector!.slug}`} className="text-gold hover:underline">
                      {sector!.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {relatedArticles.length > 0 && (
            <div className="mt-12">
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
            Bu Hizmet İçin Teklif Alın
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
