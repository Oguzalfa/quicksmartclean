import { Reveal } from "@/components/Reveal";
import { ContactActions } from "@/components/ContactActions";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="iletisim" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage
          image={IMAGES.yacht}
          aspectRatio="auto"
          sizes="100vw"
          className="h-full min-h-[520px]"
        />
        <div className="absolute inset-0 bg-[#050505]/82" />
      </div>

      <div className="site-shell-wide relative section-pad">
        <Reveal>
          <p className="eyebrow">Yeni Bir Proje Başlatalım</p>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.08] font-normal text-cream">
            İşletmeniz İçin
            <span className="mt-1 block text-gold">Doğru Hizmeti Planlayalım</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-cream/88">
            Tek lokasyondan çok şubeli yapılara kadar ihtiyacınıza özel hizmet
            kapsamını birlikte oluşturalım.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <ContactActions />
        </Reveal>
        <Reveal delay={220}>
          <a
            href={SITE.phoneTel}
            className="mt-6 inline-block font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-gold"
          >
            {SITE.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
