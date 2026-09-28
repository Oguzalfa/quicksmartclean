import { About } from "@/components/About";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BusinessFacts } from "@/components/BusinessFacts";
import { CompanyFaq } from "@/components/CompanyFaq";
import { SiteLayout } from "@/components/SiteLayout";
import { COMPANY_FAQS } from "@/lib/company-faq";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl, SEO_IDS } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, graphJsonLd, webPageJsonLd } from "@/lib/structured-data";

const description =
  "Quick Smart Clean, İstanbul’da ofis, mağaza, restoran, inşaat sonrası, villa ve otel temizliği sunan profesyonel temizlik şirketidir. Hizmetler ve teklif süreci.";

export const metadata = createPageMetadata({
  title: "Hakkımızda – İstanbul Temizlik Şirketi",
  description,
  path: "/hakkimizda",
});

const pageUrl = absoluteUrl("/hakkimizda");
const jsonLd = graphJsonLd([
  webPageJsonLd({
    pageUrl,
    name: "Quick Smart Clean Hakkında",
    description,
    type: "AboutPage",
    mainEntityId: SEO_IDS.organization,
  }),
  breadcrumbJsonLd(pageUrl, [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
  ]),
  faqJsonLd(pageUrl, COMPANY_FAQS),
]);

export default function AboutPage() {
  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <section className="pt-28">
        <div className="site-shell-wide pb-8">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hakkımızda" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4rem)] text-cream">
            Hakkımızda
          </h1>
        </div>
      </section>
      <About />
      <BusinessFacts />
      <CompanyFaq />
    </SiteLayout>
  );
}
