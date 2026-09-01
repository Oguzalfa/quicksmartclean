import { Reveal } from "@/components/Reveal";
import { PROCESS_STEPS } from "@/lib/site";

export function Process() {
  return (
    <section className="operation-section border-t border-line-white">
      <div className="site-shell-wide">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Operasyon</p>
          </Reveal>
          <Reveal>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08] font-normal text-cream">
              Standartlarımız
              <span className="mt-1 block text-gold">Sahada Başlar</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-2xl text-muted">
              Her projeyi keşif, planlama, uygulama ve kalite kontrol adımlarından
              oluşan yönetilebilir bir süreç olarak ele alıyoruz.
            </p>
          </Reveal>
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
            <Reveal key={step.num} delay={index * 60} className="relative border-b border-line-white py-6 pl-8">
              <span className="absolute top-6 left-0 h-full w-px bg-line" aria-hidden="true" />
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
