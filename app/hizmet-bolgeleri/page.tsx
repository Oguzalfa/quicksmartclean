import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactActions } from "@/components/ContactActions";
import { PaymentNote } from "@/components/PaymentNote";
import { SiteLayout } from "@/components/SiteLayout";
import { createPageMetadata } from "@/lib/metadata";
import {
  absoluteUrl,
  ANATOLIAN_SIDE_DISTRICTS,
  EUROPEAN_SIDE_DISTRICTS,
  SEO_IDS,
} from "@/lib/site";
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from "@/lib/structured-data";

const description =
  "Quick Smart Clean, İstanbul'un Anadolu ve Avrupa Yakası'ndaki 39 ilçenin tamamında profesyonel temizlik hizmeti verir. İlçe listesi, hizmetler ve teklif süreci.";

export const metadata = createPageMetadata({
  title: "İstanbul Temizlik Hizmet Bölgeleri",
  description,
  path: "/hizmet-bolgeleri",
});

const pageUrl = absoluteUrl("/hizmet-bolgeleri");
const jsonLd = graphJsonLd([
  webPageJsonLd({
    pageUrl,
    name: "Hizmet Bölgeleri: İstanbul Geneli Temizlik Hizmeti",
    description,
    mainEntityId: SEO_IDS.localBusiness,
  }),
  breadcrumbJsonLd(pageUrl, [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmet Bölgeleri", path: "/hizmet-bolgeleri" },
  ]),
]);

const SERVICE_LINKS = [
  { href: "/hizmetler/ev-temizligi", label: "Ev temizliği" },
  { href: "/hizmetler/kurumsal-tesis-temizligi", label: "Ofis ve kurumsal tesis temizliği" },
  { href: "/hizmetler/dukkan-magaza-temizligi", label: "Dükkan ve mağaza temizliği" },
  { href: "/sektorler/restoranlar", label: "Restoran ve endüstriyel mutfak temizliği" },
  { href: "/hizmetler/insaat-tadilat-sonrasi-temizlik", label: "İnşaat ve tadilat sonrası temizlik" },
  { href: "/hizmetler/detayli-temizlik", label: "Detaylı temizlik" },
  { href: "/hizmetler/buharli-temizlik", label: "Buharlı temizlik" },
  { href: "/hizmetler/villa-rezidans-temizligi", label: "Villa ve rezidans temizliği" },
  { href: "/sektorler/otel-konaklama", label: "Otel temizliği" },
] as const;

export default function ServiceAreasPage() {
  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <section className="section-pad pt-32">
        <div className="site-shell-wide max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hizmet Bölgeleri" },
            ]}
          />
          <h1 className="mt-6 font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.06] text-cream">
            Hizmet Bölgeleri
          </h1>
          <p className="mt-5 max-w-[46rem] text-[1.05rem] leading-[1.8] text-cream/88">
            Quick Smart Clean, İstanbul genelinde bireysel ve kurumsal müşterilere
            profesyonel temizlik hizmetleri sunar. İstanbul’un Anadolu ve Avrupa
            Yakası’nda profesyonel ekibimiz ve modern temizlik ekipmanlarımızla
            hizmet veriyoruz.
          </p>

          <section className="mt-14" aria-labelledby="istanbul-geneli">
            <h2
              id="istanbul-geneli"
              className="font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.15] text-cream"
            >
              İstanbul Geneli Temizlik Hizmeti
            </h2>
            <p className="mt-4 max-w-[46rem] leading-[1.8] text-cream/88">
              İstanbul’un 39 ilçesinin tamamında hizmet veriyoruz. Teklif formunda
              ilçenizi seçmeniz yeterli; çalışma günü ve saati teklif aşamasında
              birlikte planlanır. Daire, villa ve rezidanslar için{" "}
              <Link href="/hizmetler/ev-temizligi" className="text-gold underline-offset-4 hover:underline">
                İstanbul genelinde ev temizliği
              </Link>{" "}
              hizmetimizi inceleyebilirsiniz.
            </p>
            <div className="mt-8 grid gap-px border border-line-white bg-[rgba(255,255,255,0.09)] md:grid-cols-2">
              <DistrictGroup title="Anadolu Yakası" districts={ANATOLIAN_SIDE_DISTRICTS} />
              <DistrictGroup title="Avrupa Yakası" districts={EUROPEAN_SIDE_DISTRICTS} />
            </div>
          </section>

          <section className="mt-14" aria-labelledby="bolge-hizmetleri">
            <h2
              id="bolge-hizmetleri"
              className="font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.15] text-cream"
            >
              Tüm Bölgelerde Sunduğumuz Hizmetler
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {SERVICE_LINKS.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gold underline-offset-4 hover:underline">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/hizmetler"
              className="mt-6 inline-flex min-h-11 items-center text-[0.74rem] tracking-[0.14em] text-gold uppercase"
            >
              Tüm hizmetleri görün
            </Link>
          </section>

          <section className="mt-14 border border-line-white p-6 md:p-8" aria-labelledby="bolge-teklif">
            <h2 id="bolge-teklif" className="font-serif text-2xl text-cream">
              İlçenizde Teklif Alın
            </h2>
            <p className="mt-3 text-muted">
              Hizmet türü, ilçe, yaklaşık alan, istenen sıklık ve uygun zamanı
              paylaşın. Kesin fiyat, gerekli durumlarda keşif sonrası yazılı kapsamla
              verilir. Quick Smart Clean hizmetlerinde kredi kartıyla ödeme
              yapabilirsiniz; taksit seçenekleri için bizimle iletişime geçebilirsiniz.
            </p>
            <ContactActions trackLocation="service_areas" showPhone />
            <PaymentNote className="mt-5" />
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}

function DistrictGroup({ title, districts }: { title: string; districts: readonly string[] }) {
  return (
    <div className="bg-bg p-6 md:p-8">
      <h3 className="font-serif text-2xl text-cream">
        {title}
        <span className="ml-2 text-sm text-muted">({districts.length} ilçe)</span>
      </h3>
      <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-cream/85">
        {districts.map((district) => (
          <li key={district}>{district}</li>
        ))}
      </ul>
    </div>
  );
}
