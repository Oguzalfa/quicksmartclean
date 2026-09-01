import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES } from "@/lib/images";

export function About() {
  return (
    <section id="hakkimizda" className="section-pad bg-bg-secondary">
      <div className="site-shell-wide grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal variant="zoom" className="lg:col-span-5">
          <SmartImage
            image={IMAGES.cafe}
            aspectRatio="4/5"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Quick Smart Clean</p>
          </Reveal>
          <Reveal>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08] font-normal text-cream">
              Her Mekâna Özel,
              <span className="mt-1 block text-gold">Tek Bir Kalite Standardı</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-2xl text-muted">
              Quick Smart Clean; kurumsal işletmeler, sağlık kuruluşları,
              yeme-içme markaları, havacılık ve denizcilik sektörü ile seçkin
              yaşam alanları için profesyonel temizlik çözümleri sunar. Her
              sektörün hijyen beklentisini, çalışma düzenini ve operasyonel
              hassasiyetlerini analiz ederek mekâna özel hizmet planları
              oluştururuz.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 max-w-2xl text-muted">
              Amacımız yalnızca temizlik yapmak değil; işletmelerin marka
              değerini, çalışan deneyimini ve misafir memnuniyetini destekleyen
              sürdürülebilir bir hizmet standardı oluşturmaktır.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
