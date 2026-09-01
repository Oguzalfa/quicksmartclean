import { SmartImage } from "@/components/SmartImage";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/images";

export function CinematicDivider() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-[80vh]">
      <SmartImage
        image={IMAGES.yacht}
        className="absolute inset-0 h-full w-full"
        aspectRatio="auto"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-[#050505]/45" />
      <div className="site-shell-wide relative flex min-h-[70vh] items-end pb-16 md:min-h-[80vh] md:items-center md:pb-0">
        <Reveal>
          <p className="max-w-xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.1] text-cream">
            Her Detayda
            <span className="mt-1 block text-gold">Aynı Hassasiyet</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
