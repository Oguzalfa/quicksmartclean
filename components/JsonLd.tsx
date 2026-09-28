import { SECTOR_PAGES } from "@/lib/service-pages";
import { SERVICES } from "@/lib/services-data";
import { absoluteUrl, AREA_SERVED, SEO_IDS, SITE } from "@/lib/site";

const ORGANIZATION_DESCRIPTION =
  "Quick Smart Clean; İstanbul'un Anadolu ve Avrupa Yakası genelinde bireysel ve kurumsal müşterilere ofis ve kurumsal tesis, dükkan ve mağaza, restoran ve endüstriyel mutfak, inşaat ve tadilat sonrası, villa ve rezidans, otel, havacılık ve yat temizliği hizmetleri sunan profesyonel temizlik şirketidir.";

export function JsonLd() {
  const sameAs = Object.values(SITE.social).filter((url) => url.startsWith("https://"));
  const catalogServices = [
    ...SERVICES.map((service) => ({ name: service.title, path: `/hizmetler/${service.slug}` })),
    ...Object.entries(SECTOR_PAGES).map(([slug, page]) => ({
      name: page.serviceName,
      path: `/sektorler/${slug}`,
    })),
  ];
  const logo = {
    "@type": "ImageObject",
    url: absoluteUrl("/logo.png"),
  };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": SEO_IDS.organization,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phoneE164,
        logo,
        image: absoluteUrl(SITE.ogImage),
        description: ORGANIZATION_DESCRIPTION,
        areaServed: AREA_SERVED,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: SITE.phoneE164,
          email: SITE.email,
          areaServed: SITE.areaServed,
          availableLanguage: "Turkish",
        },
        ...(sameAs.length > 0 && { sameAs }),
      },
      {
        "@type": "ProfessionalService",
        "@id": SEO_IDS.localBusiness,
        name: SITE.name,
        url: SITE.url,
        logo,
        image: absoluteUrl(SITE.ogImage),
        description: ORGANIZATION_DESCRIPTION,
        telephone: SITE.phoneE164,
        email: SITE.email,
        parentOrganization: { "@id": SEO_IDS.organization },
        areaServed: AREA_SERVED,
        paymentAccepted: SITE.paymentAccepted,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Quick Smart Clean temizlik hizmetleri",
          itemListElement: catalogServices.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${absoluteUrl(service.path)}#service`,
              name: service.name,
              url: absoluteUrl(service.path),
            },
          })),
        },
        ...(sameAs.length > 0 && { sameAs }),
      },
      {
        "@type": "WebSite",
        "@id": SEO_IDS.website,
        name: SITE.name,
        url: SITE.url,
        inLanguage: "tr-TR",
        publisher: { "@id": SEO_IDS.organization },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
