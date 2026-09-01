import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES } from "@/lib/images";
import { FEATURED_SECTORS } from "@/lib/sectors-data";

export function SectorShowcase() {
  return (
    <section id="sektorler" className="section-pad">
      <div className="site-shell-wide">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Hizmet Verdiğimiz Sektörler</p>
          </Reveal>
          <Reveal>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08] font-normal text-cream">
              Her Sektörün İhtiyacına
              <span className="mt-1 block text-gold">Özel Çözümler</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-2xl text-muted">
              Farklı sektörlerin hijyen, güvenlik ve operasyon ihtiyaçlarını tek
              tip hizmetle değil, alana özel planlamayla karşılıyoruz.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {FEATURED_SECTORS.map((sector, index) => {
            const image = sector.imageKey ? IMAGES[sector.imageKey] : null;
            const reversed = index % 2 === 1;

            return (
              <Reveal key={sector.slug} delay={index * 60}>
                <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  <div
                    className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}
                  >
                    <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                      {sector.num}
                    </p>
                    <h3 className="mt-3 font-serif text-[clamp(1.8rem,3vw,2.6rem)] text-cream">
                      {sector.shortTitle}
                    </h3>
                    <span className="mt-4 block h-px w-12 bg-gold" />
                    <p className="mt-5 text-muted">{sector.summary}</p>
                    <Link
                      href={`/sektorler/${sector.slug}`}
                      className="mt-6 inline-flex min-h-11 items-center gap-2 text-[0.74rem] tracking-[0.14em] text-gold uppercase"
                    >
                      Hizmeti İncele
                      <ArrowRight className="arrow-shift h-4 w-4" strokeWidth={1.6} />
                    </Link>
                  </div>

                  {image && (
                    <Reveal
                      variant="zoom"
                      className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}
                    >
                      <SmartImage
                        image={image}
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        aspectRatio={image.aspectRatio}
                      />
                    </Reveal>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 text-center">
          <Link href="/sektorler" className="btn-secondary">
            Tüm Sektörleri Görüntüle
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
