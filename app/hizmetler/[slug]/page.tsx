import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServicePageBody } from "@/components/ServicePageBody";
import { SiteLayout } from "@/components/SiteLayout";
import { getArticleBySlug } from "@/lib/articles";
import { createPageMetadata } from "@/lib/metadata";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services-data";
import { getSectorBySlug } from "@/lib/sectors-data";
import { absoluteUrl } from "@/lib/site";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  graphJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const content = SERVICE_PAGES[slug];

  return createPageMetadata({
    title: content?.seoTitle ?? service.title,
    description: content?.metaDescription ?? service.summary,
    path: `/hizmetler/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const content = SERVICE_PAGES[slug];
  const relatedSectors = service.relatedSectorSlugs
    .map((sectorSlug) => getSectorBySlug(sectorSlug))
    .filter(Boolean);
  const relatedArticles = service.relatedArticleSlugs
    .map((articleSlug) => getArticleBySlug(articleSlug))
    .filter(Boolean);

  const pageUrl = absoluteUrl(`/hizmetler/${slug}`);
  const jsonLd = graphJsonLd([
    serviceJsonLd({
      pageUrl,
      name: content?.serviceName ?? service.title,
      description: content?.metaDescription ?? service.description,
    }),
    breadcrumbJsonLd(pageUrl, [
      { name: "Ana Sayfa", path: "/" },
      { name: "Hizmetler", path: "/hizmetler" },
      { name: service.title, path: `/hizmetler/${slug}` },
    ]),
    ...(content ? [faqJsonLd(pageUrl, content.faqs)] : []),
  ]);

  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <section className="section-pad pt-32">
        <div className="site-shell-wide max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hizmetler", href: "/hizmetler" },
              { label: service.title },
            ]}
          />
          <h1 className="mt-6 font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.06] text-cream">
            {content?.h1 ?? service.title}
          </h1>
          <p className="mt-5 text-lg text-muted">{service.summary}</p>

          {content ? (
            <div className="mt-10">
              <ServicePageBody content={content} />
            </div>
          ) : (
            <>
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
            </>
          )}

          {relatedSectors.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif text-2xl text-cream">İlgili Sektörler</h2>
              <ul className="mt-4 space-y-3">
                {relatedSectors.map((sector) => (
                  <li key={sector!.slug}>
                    <Link href={`/sektorler/${sector!.slug}`} className="text-gold hover:underline">
                      {sector!.shortTitle} temizliği
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!content && relatedArticles.length > 0 && (
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

          {!content && (
            <Link href="/kurumsal-teklif" className="btn-primary mt-12 inline-flex">
              Bu Hizmet İçin Teklif Alın
            </Link>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
