import { absoluteUrl, SEO_IDS } from "@/lib/site";

export type BreadcrumbEntry = { name: string; path: string };

export function breadcrumbJsonLd(pageUrl: string, items: BreadcrumbEntry[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd({
  pageUrl,
  name,
  description,
  image,
}: {
  pageUrl: string;
  name: string;
  description: string;
  image?: string;
}) {
  return {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name,
    description,
    url: pageUrl,
    image: image ? absoluteUrl(image) : undefined,
    provider: { "@id": SEO_IDS.localBusiness },
    areaServed: { "@type": "City", name: "İstanbul" },
  };
}

export function faqJsonLd(
  pageUrl: string,
  faqs: { question: string; answer: string }[],
) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function graphJsonLd(nodes: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}
