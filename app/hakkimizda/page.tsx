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
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4rem)] text-cream">
            Hakkımızda
          </h1>
        </div>
      </section>
      <About />
    </SiteLayout>
  );
}
