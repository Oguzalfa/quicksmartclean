import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Contact } from "@/components/Contact";
import { SiteLayout } from "@/components/SiteLayout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "Quick Smart Clean ile iletişime geçin. Kurumsal temizlik hizmetleri için teklif alın.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <SiteLayout>
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
    </SiteLayout>
  );
}
