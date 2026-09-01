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
        </div>
      </section>
      <Contact />
    </SiteLayout>
  );
}
