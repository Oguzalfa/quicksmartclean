import { IMAGES } from "@/lib/images";
import { SERVICES } from "@/lib/services-data";
import { SITE } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        telephone: SITE.phoneE164,
        logo: `${SITE.url}/icon.svg`,
        description:
          "Quick Smart Clean; kurumsal işletmeler, sağlık kuruluşları, HoReCa, havacılık ve denizcilik sektörü için profesyonel temizlik hizmetleri sunar.",
      },
      {
        "@type": "LocalBusiness",
        name: SITE.name,
        image: IMAGES.hotel.src,
        url: SITE.url,
        telephone: SITE.phoneE164,
        priceRange: "$$",
        areaServed: {
          "@type": "Country",
          name: "Türkiye",
        },
      },
      {
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.url,
        inLanguage: "tr-TR",
      },
      {
        "@type": "ProfessionalService",
        name: SITE.name,
        url: SITE.url,
        telephone: SITE.phoneE164,
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
