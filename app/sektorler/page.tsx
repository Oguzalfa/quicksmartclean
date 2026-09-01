import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteLayout } from "@/components/SiteLayout";
import { createPageMetadata } from "@/lib/metadata";
import { SECTORS } from "@/lib/sectors-data";

export const metadata = createPageMetadata({
  title: "Sektörler",
  description:
    "Quick Smart Clean; kurumsal ofisler, sağlık, HoReCa, havacılık, denizcilik, otel ve seçkin yaşam alanları için temizlik hizmetleri sunar.",
  path: "/sektorler",
});

export default function SectorsPage() {
  return (
    <SiteLayout>
      <section className="section-pad pt-32">
        <div className="site-shell-wide">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Sektörler" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4rem)] text-cream">
            Hizmet Verdiğimiz Sektörler
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            Her sektörün hijyen, güvenlik ve operasyon ihtiyaçlarına özel
            planlanan temizlik çözümleri.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector) => (
              <article
                key={sector.slug}
                className="border border-line-white p-6"
              >
                <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                  {sector.num}
                </p>
                <h2 className="mt-3 font-serif text-2xl text-cream">
                  <Link href={`/sektorler/${sector.slug}`} className="hover:text-gold-light">
                    {sector.shortTitle}
                  </Link>
                </h2>
                <p className="mt-4 text-sm text-muted">{sector.summary}</p>
                <Link
                  href={`/sektorler/${sector.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center text-[0.74rem] tracking-[0.14em] text-gold uppercase"
                >
                  Sektörel Çözümleri İncele
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
