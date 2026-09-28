import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BusinessFacts } from "@/components/BusinessFacts";
import { Contact } from "@/components/Contact";
import { SiteLayout } from "@/components/SiteLayout";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl, SEO_IDS } from "@/lib/site";
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from "@/lib/structured-data";

const description =
  "Quick Smart Clean telefon, WhatsApp ve e-posta bilgileri. İstanbul'da ofis, mağaza, restoran ve inşaat sonrası temizlik için teklif alın; kredi kartı geçerlidir.";

export const metadata = createPageMetadata({
  title: "İletişim",
  description,
  path: "/iletisim",
});

const pageUrl = absoluteUrl("/iletisim");
const jsonLd = graphJsonLd([
  webPageJsonLd({
    pageUrl,
    name: "Quick Smart Clean İletişim",
    description,
    type: "ContactPage",
    mainEntityId: SEO_IDS.localBusiness,
  }),
  breadcrumbJsonLd(pageUrl, [
    { name: "Ana Sayfa", path: "/" },
    { name: "İletişim", path: "/iletisim" },
  ]),
]);

export default function ContactPage() {
  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <section className="pt-28">
        <div className="site-shell-wide pb-8">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "İletişim" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4rem)] text-cream">
            İletişim
          </h1>
        </div>
      </section>
      <Contact />
      <BusinessFacts heading="İletişim ve Firma Bilgileri" />
    </SiteLayout>
  );
}
