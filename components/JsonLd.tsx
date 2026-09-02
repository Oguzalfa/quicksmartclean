import { IMAGES } from "@/lib/images";
import { SERVICES } from "@/lib/services-data";
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
          "Quick Smart Clean; kurumsal işletmeler, sağlık kuruluşları, HoReCa, havacılık ve denizcilik sektörü için profesyonel temizlik hizmetleri sunar.",
      },
      {
        "@type": "LocalBusiness",
        "@id": SEO_IDS.localBusiness,
        name: SITE.name,
        image: absoluteUrl(IMAGES.hotel.src),
        url: SITE.url,
        telephone: SITE.phoneE164,
        email: SITE.email,
        priceRange: "$$",
        parentOrganization: { "@id": SEO_IDS.organization },
        areaServed: {
          "@type": "Country",
          name: "Türkiye",
        },
      },
      {
        "@type": "WebSite",
        "@id": SEO_IDS.website,
        name: SITE.name,
        url: SITE.url,
        inLanguage: "tr-TR",
        publisher: { "@id": SEO_IDS.organization },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#professionalservice`,
        name: SITE.name,
        url: SITE.url,
        telephone: SITE.phoneE164,
        email: SITE.email,
        image: absoluteUrl(SITE.ogImage),
        provider: { "@id": SEO_IDS.organization },
        serviceType: SERVICES.map((service) => service.title),
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
