import { absoluteUrl, SEO_IDS, SITE } from "@/lib/site";

export function JsonLd() {
  const sameAs = Object.values(SITE.social).filter((url) => url.startsWith("https://"));
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
          url: absoluteUrl("/logo.png"),
        },
        image: absoluteUrl(SITE.ogImage),
        description:
          "Quick Smart Clean; restoran ve endüstriyel mutfaklar, ofis ve kurumsal tesisler, inşaat sonrası alanlar ile havacılık ve denizcilik sektörü için profesyonel temizlik hizmetleri sunar.",
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
        image: absoluteUrl(SITE.ogImage),
        telephone: SITE.phoneE164,
        email: SITE.email,
        parentOrganization: { "@id": SEO_IDS.organization },
        areaServed: { "@type": "City", name: SITE.areaServed },
        paymentAccepted: SITE.paymentAccepted,
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
