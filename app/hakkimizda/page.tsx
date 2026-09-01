import { About } from "@/components/About";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteLayout } from "@/components/SiteLayout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hakkımızda",
  description:
    "Quick Smart Clean; kurumsal işletmeler, sağlık kuruluşları, HoReCa, havacılık ve denizcilik sektörü için profesyonel temizlik çözümleri sunar.",
  path: "/hakkimizda",
});

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="pt-28">
        <div className="site-shell-wide pb-8">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hakkımızda" },
            ]}
          />
        </div>
      </section>
      <About />
    </SiteLayout>
  );
}
