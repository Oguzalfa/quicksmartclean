import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteLayout } from "@/components/SiteLayout";
import { createPageMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/services-data";

export const metadata = createPageMetadata({
  title: "Hizmetler",
  description:
    "Quick Smart Clean kurumsal tesis temizliği, havacılık, yat, villa ve dezenfeksiyon hizmetleri sunar.",
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <SiteLayout>
      <section className="section-pad pt-32">
        <div className="site-shell-wide">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hizmetler" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4rem)] text-cream">
            Profesyonel Temizlik Hizmetleri
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            Kurumsal yapılardan havacılık ve denizcilik sektörüne kadar her
            mekâna özel planlanan hizmet yetkinliklerimizi inceleyin.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                className="border border-line-white p-6 md:p-8"
              >
                <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                  {service.num}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-cream">
                  <Link href={`/hizmetler/${service.slug}`} className="hover:text-gold-light">
                    {service.title}
                  </Link>
                </h2>
                <p className="mt-4 text-muted">{service.summary}</p>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center text-[0.74rem] tracking-[0.14em] text-gold uppercase"
                >
                  Detayları İncele
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
