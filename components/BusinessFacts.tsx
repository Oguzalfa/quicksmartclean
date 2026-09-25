import Link from "next/link";
import { SITE, whatsappUrl } from "@/lib/site";

const PRIORITY_SERVICE_LINKS = [
  { href: "/sektorler/restoranlar", label: "Restoran ve endüstriyel mutfak temizliği" },
  { href: "/hizmetler/kurumsal-tesis-temizligi", label: "Ofis ve kurumsal tesis temizliği" },
  { href: "/hizmetler/insaat-tadilat-sonrasi-temizlik", label: "İnşaat ve tadilat sonrası temizlik" },
] as const;

export function BusinessFacts({ heading = "Firma Bilgileri" }: { heading?: string }) {
  return (
    <section className="section-pad border-t border-line-white" aria-labelledby="firma-bilgileri">
      <div className="site-shell-wide">
        <h2
          id="firma-bilgileri"
          className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.1] text-cream"
        >
          {heading}
        </h2>
        <dl
          className="mt-8 grid gap-px border border-line-white bg-[rgba(255,255,255,0.09)] sm:grid-cols-2 lg:grid-cols-3"
          data-track-location="business_facts"
        >
          <Fact term="Firma">{SITE.name}</Fact>
          <Fact term="Hizmet bölgesi">{SITE.areaServed}</Fact>
          <Fact term="Öne çıkan hizmetler">
            <ul className="space-y-1">
              {PRIORITY_SERVICE_LINKS.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gold underline-offset-4 hover:underline">
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/hizmetler" className="text-cream/80 underline-offset-4 hover:underline">
                  Tüm hizmetler
                </Link>
              </li>
            </ul>
          </Fact>
          <Fact term="Telefon">
            <a href={SITE.phoneTel} className="text-gold underline-offset-4 hover:underline">
              {SITE.phoneDisplay}
            </a>
          </Fact>
          <Fact term="WhatsApp">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline-offset-4 hover:underline"
            >
              {SITE.phoneDisplay}
            </a>
          </Fact>
          <Fact term="E-posta">
            <a href={`mailto:${SITE.email}`} className="text-gold underline-offset-4 hover:underline">
              {SITE.email}
            </a>
          </Fact>
          <Fact term="Ödeme">{SITE.paymentNote}</Fact>
          <Fact term="Teklif">
            <Link href="/kurumsal-teklif" className="text-gold underline-offset-4 hover:underline">
              Teklif formu
            </Link>
          </Fact>
        </dl>
      </div>
    </section>
  );
}

function Fact({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="bg-bg p-5 md:p-6">
      <dt className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">{term}</dt>
      <dd className="mt-2 text-cream">{children}</dd>
    </div>
  );
}
