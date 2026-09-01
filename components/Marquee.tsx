"use client";

export function Marquee() {
  const text =
    "KURUMSAL YAPILAR  •  SAĞLIK  •  HORECA  •  HAVACILIK  •  DENİZCİLİK  •  KONAKLAMA  •  SEÇKİN YAŞAM  •  PERAKENDE";

  return (
    <section
      className="marquee-section relative overflow-hidden border-y border-line-white bg-[#070707] py-5 md:py-6"
      aria-label="Hizmet sektörleri"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#070707] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#070707] to-transparent md:w-24" />
      <div className="marquee-track flex w-max gap-16 whitespace-nowrap">
        <span className="marquee-item font-serif text-[clamp(1.4rem,3vw,2.4rem)] tracking-[0.06em] text-cream">
          {text}
        </span>
        <span
          className="marquee-item font-serif text-[clamp(1.4rem,3vw,2.4rem)] tracking-[0.06em] text-cream"
          aria-hidden="true"
        >
          {text}
        </span>
      </div>
    </section>
  );
}
