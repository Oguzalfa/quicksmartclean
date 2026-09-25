import { absoluteUrl, SEO_IDS, SITE } from "@/lib/site";

export function JsonLd() {
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
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/icon.svg"),
        },
        image: absoluteUrl(SITE.ogImage),
        description:
          "Quick Smart Clean; restoran ve endüstriyel mutfaklar, ofis ve kurumsal tesisler, inşaat sonrası alanlar ile havacılık ve denizcilik sektörü için profesyonel temizlik hizmetleri sunar.",
      },
      {
        "@type": "ProfessionalService",
        "@id": SEO_IDS.localBusiness,
        name: SITE.name,
        url: SITE.url,
        image: absoluteUrl(SITE.ogImage),
        telephone: SITE.phoneE164,
        email: SITE.email,
        parentOrganization: { "@id": SEO_IDS.organization },
        areaServed: { "@type": "City", name: "İstanbul" },
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
