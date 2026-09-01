"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SmartImage } from "@/components/SmartImage";
import { useQuotePanel } from "@/contexts/QuotePanelContext";
import { HERO_SLIDES } from "@/lib/site";

export function Hero() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { openPanel } = useQuotePanel();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const slide = HERO_SLIDES[active];

  return (
    <section
      id="anasayfa"
      className="relative isolate flex min-h-[88svh] items-end overflow-hidden md:min-h-[100svh] md:items-center"
    >
      <div className="absolute inset-0 aspect-[4/5] md:aspect-auto">
        {HERO_SLIDES.map((item, index) => (
          <div
            key={item.id}
            className={`hero-slide absolute inset-0 ${index === active ? "is-active" : ""}`}
            aria-hidden={index !== active}
          >
            <SmartImage
              image={item.image}
              priority={index === 0}
              sizes="100vw"
              className="h-full w-full"
              aspectRatio="auto"
              imageClassName="h-full w-full"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/88 via-[#050505]/45 to-transparent md:from-[#050505]/78 md:via-[#050505]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent md:from-transparent md:via-transparent" />
      </div>

      <div className="site-shell-wide hero-content relative z-10 w-full pt-28 pb-28 md:pb-32">
        <p
          className="hero-rise text-[0.68rem] font-medium tracking-[0.28em] text-gold uppercase"
          style={{ ["--d" as string]: "120ms" }}
        >
          {slide.sector}
        </p>

        <h1 className="mt-5 max-w-[13ch] font-serif leading-[0.92] font-normal">
          <span
            className="hero-rise block text-cream"
            style={{
              ["--d" as string]: "220ms",
              fontSize: "clamp(2.625rem, 6.2vw, 7.2rem)",
              lineHeight: "0.92",
            }}
          >
            HER ALANDA
          </span>
          <span
            className="hero-rise mt-1 block"
            style={{
              ["--d" as string]: "360ms",
              fontSize: "clamp(2.625rem, 6.2vw, 7.2rem)",
              lineHeight: "0.92",
            }}
          >
            <span className="text-cream">KUSURSUZ </span>
            <span className="text-gold">STANDART</span>
          </span>
        </h1>

        <p
          className="hero-rise mt-5 max-w-xl text-base text-cream/88 md:text-lg"
          style={{ ["--d" as string]: "500ms" }}
        >
          Kurumsal yapılardan sağlık kuruluşlarına, yeme-içme markalarından
          havacılık ve denizcilik sektörüne kadar her mekâna özel profesyonel
          temizlik çözümleri.
        </p>

        <div
          className="hero-rise mt-7 flex flex-col gap-3 sm:flex-row"
          style={{ ["--d" as string]: "640ms" }}
        >
          <button type="button" className="btn-primary w-full sm:w-auto" onClick={openPanel}>
            Kurumsal Teklif Alın
            <ArrowRight className="arrow-shift h-4 w-4" strokeWidth={1.6} />
          </button>
          <Link href="/sektorler" className="btn-secondary w-full sm:w-auto">
            Hizmet Alanlarını Keşfedin
            <ArrowRight className="arrow-shift h-4 w-4" strokeWidth={1.6} />
          </Link>
        </div>

        <div
          className="hero-rise hero-sector-scroll mt-10 flex gap-6 overflow-x-auto border-t border-line-white pt-5 md:gap-8"
          style={{ ["--d" as string]: "760ms" }}
          role="tablist"
          aria-label="Hero sektör navigasyonu"
        >
          {HERO_SLIDES.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={`relative min-h-11 shrink-0 text-left transition-colors ${
                index === active ? "text-cream" : "text-muted hover:text-cream/80"
              }`}
              onClick={() => setActive(index)}
            >
              <span className="block text-[0.62rem] tracking-[0.2em] text-gold">
                0{index + 1}
              </span>
              <span className="mt-1 block text-sm tracking-[0.08em] uppercase">
                {item.label}
              </span>
              <span
                className={`absolute -bottom-5 left-0 h-px bg-gold transition-all duration-500 ${
                  index === active ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
