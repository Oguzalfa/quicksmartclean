import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { IMAGES } from "@/lib/images";
import { PROCESS_STEPS } from "@/lib/site";

export function Process() {
  return (
    <section className="operation-section border-t border-line-white">
      <div className="site-shell-wide">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal variant="zoom" className="lg:col-span-7">
            <SmartImage
              image={IMAGES.qualityHandover}
              aspectRatio="16/10"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Kalite ve Operasyon Yönetimi</p>
            </Reveal>
            <Reveal>
              <h2 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08] font-normal text-cream">
                Kontrollü Teslim
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-muted">
                Tamamlanan hizmeti belirlenen kontrol adımlarıyla değerlendiriyor,
                teslim sürecini açık ve takip edilebilir şekilde yönetiyoruz.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 hidden gap-0 border-t border-line-white lg:grid lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal
              key={step.num}
              delay={index * 80}
              className="border-r border-line-white px-6 py-8 last:border-r-0"
            >
              <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                {step.num}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-cream">{step.title}</h3>
              <p className="mt-3 text-sm text-muted">{step.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 space-y-0 border-t border-line-white lg:hidden">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal
              key={step.num}
              delay={index * 60}
              className="relative border-b border-line-white py-6 pl-8"
            >
              <span
                className="absolute top-6 left-0 h-full w-px bg-line"
                aria-hidden="true"
              />
              <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                {step.num}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-cream">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
