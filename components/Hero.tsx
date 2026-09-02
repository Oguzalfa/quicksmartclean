"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section id="anasayfa" className="hero">
      <div className="hero-media" aria-hidden="true">
        {HERO_SLIDES.map((item, index) => (
          <div
            key={item.id}
            className={`hero-slide absolute inset-0 ${index === active ? "is-active" : ""}`}
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              className="hero-image"
            />
          </div>
        ))}
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">
          <p
            className="hero-eyebrow hero-rise text-gold uppercase"
            style={{ ["--d" as string]: "120ms" }}
          >
            {slide.sector}
          </p>

          <h1 className="hero-title font-serif">
            <span className="block">Her Alanda</span>{" "}
            <span className="block">
              <span className="text-cream">Kusursuz</span>{" "}
              <span className="text-gold">Standart</span>
            </span>
          </h1>

          <p
            className="hero-description hero-rise text-cream/88"
            style={{ ["--d" as string]: "500ms" }}
          >
            Kurumsal yapılardan sağlık kuruluşlarına, yeme-içme markalarından
            havacılık ve denizcilik sektörüne kadar her mekâna özel profesyonel
            temizlik çözümleri.
          </p>

          <div
            className="hero-actions hero-rise"
            style={{ ["--d" as string]: "640ms" }}
          >
            <button type="button" className="btn-primary" onClick={openPanel}>
              Kurumsal Teklif Alın
              <ArrowRight className="arrow-shift h-4 w-4" strokeWidth={1.6} />
            </button>
            <Link href="/sektorler" className="btn-secondary">
              Hizmet Alanlarını Keşfedin
              <ArrowRight className="arrow-shift h-4 w-4" strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="hero-sectors"
        role="tablist"
        aria-label="Hero sektör navigasyonu"
      >
        {HERO_SLIDES.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={`hero-sector-tab ${index === active ? "is-active" : ""}`}
            onClick={() => setActive(index)}
          >
            <span className="hero-sector-num">0{index + 1}</span>
            <span className="hero-sector-label">{item.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
