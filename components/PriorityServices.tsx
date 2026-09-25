import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const PRIORITY_SERVICES = [
  {
    href: "/sektorler/restoranlar",
    title: "Restoran ve Endüstriyel Mutfak Temizliği",
    text: "Mutfak, salon, zemin ve derz için kapanış sonrası planlanan detay veya periyodik temizlik.",
  },
  {
    href: "/hizmetler/kurumsal-tesis-temizligi",
    title: "Ofis ve Kurumsal Tesis Temizliği",
    text: "Günlük veya periyodik ofis temizliği, makineli zemin temizliği ve kontrol listesiyle teslim.",
  },
  {
    href: "/hizmetler/insaat-tadilat-sonrasi-temizlik",
    title: "İnşaat ve Tadilat Sonrası Temizlik",
    text: "İnce toz, boya, harç ve etiket kalıntıları için yüzeye uygun yöntemle kullanıma hazırlık.",
  },
] as const;

export function PriorityServices() {
  return (
    <section className="section-pad border-t border-line-white" aria-labelledby="oncelikli-hizmetler">
      <div className="site-shell-wide">
        <Reveal>
          <p className="eyebrow">İstanbul</p>
        </Reveal>
        <Reveal>
          <h2
            id="oncelikli-hizmetler"
            className="mt-6 max-w-3xl font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-normal text-cream"
          >
            En Çok Talep Edilen Hizmetler
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-px border border-line-white bg-[rgba(255,255,255,0.09)] md:grid-cols-3">
          {PRIORITY_SERVICES.map((service) => (
            <li key={service.href} className="bg-bg">
              <Link
                href={service.href}
                className="group flex h-full min-h-11 flex-col p-6 md:p-8"
              >
                <span className="font-serif text-2xl text-cream group-hover:text-gold-light">
                  {service.title}
                </span>
                <span className="mt-4 text-muted">{service.text}</span>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.74rem] tracking-[0.14em] text-gold uppercase">
                  Kapsamı ve süreci görün
                  <ArrowRight className="arrow-shift h-4 w-4" strokeWidth={1.6} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
