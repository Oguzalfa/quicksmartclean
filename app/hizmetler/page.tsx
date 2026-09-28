import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteLayout } from "@/components/SiteLayout";
import { createPageMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/services-data";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from "@/lib/structured-data";

const title = "Temizlik Hizmetleri İstanbul";
const description =
  "İstanbul'da ev, ofis, dükkan ve mağaza, restoran, inşaat sonrası, detaylı, buharlı, villa ve otel temizliği. Quick Smart Clean hizmetlerini inceleyin, teklif alın.";

export const metadata = createPageMetadata({ title, description, path: "/hizmetler" });

const pageUrl = absoluteUrl("/hizmetler");
const jsonLd = graphJsonLd([
  webPageJsonLd({ pageUrl, name: "Profesyonel Temizlik Hizmetleri", description, type: "CollectionPage" }),
  breadcrumbJsonLd(pageUrl, [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
  ]),
  {
    "@type": "ItemList",
    "@id": `${pageUrl}#list`,
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: absoluteUrl(`/hizmetler/${service.slug}`),
    })),
  },
]);

const INTRO_LINKS = [
  { href: "/hizmetler/ev-temizligi", label: "ev" },
  { href: "/hizmetler/kurumsal-tesis-temizligi", label: "ofis ve kurumsal tesis" },
  { href: "/hizmetler/dukkan-magaza-temizligi", label: "dükkan ve mağaza" },
  { href: "/sektorler/restoranlar", label: "restoran ve endüstriyel mutfak" },
  { href: "/hizmetler/insaat-tadilat-sonrasi-temizlik", label: "inşaat ve tadilat sonrası" },
  { href: "/hizmetler/villa-rezidans-temizligi", label: "villa ve rezidans" },
] as const;

export default function ServicesPage() {
  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
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
            Quick Smart Clean, İstanbul’da işletmeler ve yaşam alanları için
            profesyonel temizlik hizmetleri sunar. Başlıca hizmetlerimiz{" "}
            {INTRO_LINKS.map((link, index) => (
              <span key={link.href}>
                <Link href={link.href} className="text-gold underline-offset-4 hover:underline">
                  {link.label}
                </Link>
                {index < INTRO_LINKS.length - 2 ? ", " : index === INTRO_LINKS.length - 2 ? " ve " : ""}
              </span>
            ))}{" "}
            temizliğidir. Uygun yüzeylerde buharlı temizlik ve profesyonel zemin
            makineleriyle çalışırız; kapsam her işte keşif veya ön değerlendirme
            sonrasında yazılı olarak netleşir.
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
                  {service.title} Detayları
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
