import { Reveal } from "@/components/Reveal";
import { BRAND_VALUES } from "@/lib/site";

export function BrandStatement() {
  return (
    <section className="section-pad border-b border-line-white">
      <div className="site-shell-wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Quick Smart Clean</p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.15] text-cream">
                Temizliği yalnızca bir hizmet olarak değil, markanızın
                görünmeyen kalite standardı olarak yönetiyoruz.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-muted">
                Tek lokasyondan çok şubeli yapılara kadar planlama, ekip
                yönetimi ve kalite kontrolünü tek bir operasyon altında
                birleştiriyoruz.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-0 border-t border-line-white md:grid-cols-2 lg:grid-cols-4">
          {BRAND_VALUES.map((value, index) => (
            <Reveal
              key={value}
              delay={index * 80}
              className="border-b border-line-white px-0 py-6 md:border-r md:px-6 md:last:border-r-0 lg:py-8"
            >
              <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                0{index + 1}
              </p>
              <p className="mt-3 text-[0.98rem] text-cream">{value}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
