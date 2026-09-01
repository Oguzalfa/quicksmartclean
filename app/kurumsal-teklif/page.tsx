import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuotePageOpener } from "@/components/QuotePageOpener";
import { SiteLayout } from "@/components/SiteLayout";

export default function QuotePage() {
  return (
    <SiteLayout>
      <QuotePageOpener />
      <section className="section-pad pt-32">
        <div className="site-shell-wide max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Kurumsal Teklif" },
            ]}
          />
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5vw,4rem)] text-cream">
            Kurumsal Teklif Formu
          </h1>
          <p className="mt-5 text-muted">
            Form paneli açıldı. Bilgilerinizi doldurarak WhatsApp üzerinden teklif
            talebinizi iletebilirsiniz.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
