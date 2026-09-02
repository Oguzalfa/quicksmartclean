import { OperationsGallery } from "@/components/OperationsGallery";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteLayout } from "@/components/SiteLayout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Çalışmalarımız",
  description:
    "Quick Smart Clean; otel, HoReCa, havacılık, denizcilik, spor salonu, rezidans ve kurumsal yapılarda yürüttüğü profesyonel temizlik operasyonlarından seçilmiş görseller.",
  path: "/calismalarimiz",
});

export default function WorksPage() {
  return (
    <SiteLayout>
      <section className="pt-28">
        <div className="site-shell-wide pb-8">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Çalışmalarımız" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4rem)] text-cream">
            Çalışmalarımız
          </h1>
        </div>
      </section>
      <OperationsGallery variant="full" />
    </SiteLayout>
  );
}
