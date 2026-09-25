import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppIcon } from "@/components/Logo";
import { PaymentNote } from "@/components/PaymentNote";
import { QuoteForm } from "@/components/QuoteForm";
import { SiteLayout } from "@/components/SiteLayout";
import { SITE, whatsappUrl } from "@/lib/site";

export default function QuotePage() {
  return (
    <SiteLayout>
      <section className="section-pad pt-32">
        <div className="site-shell-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Breadcrumbs
              items={[
                { label: "Ana Sayfa", href: "/" },
                { label: "Teklif Al" },
              ]}
            />
            <h1 className="mt-6 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] text-cream">
              Temizlik Teklifi Alın
            </h1>
            <p className="mt-5 text-muted">
              Hizmet türünü, ilçeyi, yaklaşık alanı ve zamanlamayı paylaşın.
              Bilgileriniz WhatsApp mesajı olarak hazırlanır; mesajı
              gönderdiğinizde talebiniz bize ulaşır. Kesin teklif, gerekli
              durumlarda keşif sonrası yazılı kapsamla hazırlanır.
            </p>
            <div className="mt-8 space-y-3" data-track-location="quote_page">
              <a href={SITE.phoneTel} className="btn-secondary w-full sm:w-auto">
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                {SITE.phoneDisplay}
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:ml-3 sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp’tan Yazın
              </a>
            </div>
            <PaymentNote className="mt-6" />
          </div>
          <div className="border border-line-white p-5 md:p-8 lg:col-span-7">
            <QuoteForm formLocation="page" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
