"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { useFocusTrap, useLockBody } from "@/hooks/useDialog";
import { cn } from "@/lib/cn";
import {
  GALLERY_LAYOUT,
  IMAGES,
  MOBILE_GALLERY_ORDER,
  type ImageKey,
} from "@/lib/images";

export function OperationsGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const trapRef = useFocusTrap(open);
  useLockBody(open);

  const items = GALLERY_LAYOUT.map((item) => ({
    ...item,
    image: IMAGES[item.imageKey],
  }));

  const mobileItems = MOBILE_GALLERY_ORDER.map((key) => IMAGES[key]);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => {
    setIndex((current) =>
      current === null ? current : (current + items.length - 1) % items.length,
    );
  }, [items.length]);
  const next = useCallback(() => {
    setIndex((current) =>
      current === null ? current : (current + 1) % items.length,
    );
  }, [items.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <section id="calismalarimiz" className="section-pad bg-bg-secondary">
      <div className="site-shell-wide">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Selected Operations</p>
          </Reveal>
          <Reveal>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08] font-normal text-cream">
              Farklı Sektörlerde
              <span className="mt-1 block text-gold">Tek Bir Kalite Standardı</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 hidden gap-4 md:grid md:grid-cols-12 md:gap-5">
          {items.map((item, itemIndex) => (
            <GalleryCard
              key={item.imageKey}
              image={item.image}
              layout={item.layout}
              onOpen={() => setIndex(itemIndex)}
            />
          ))}
        </div>

        <div className="gallery-snap mt-10 flex gap-4 overflow-x-auto pb-2 md:hidden">
          {mobileItems.map((image, itemIndex) => (
            <button
              key={image.id}
              type="button"
              className="work-card relative w-[86vw] max-w-[22rem] shrink-0 overflow-hidden bg-surface"
              onClick={() => setIndex(itemIndex)}
              aria-label={`${image.sector} görselini incele`}
            >
              <SmartImage
                image={image}
                aspectRatio="16/10"
                sizes="86vw"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#050505]/75 to-transparent p-5 text-left">
                <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                  {image.sector}
                </p>
                <p className="mt-2 font-serif text-2xl text-cream">{image.service}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && index !== null && (
        <Lightbox
          trapRef={trapRef}
          items={items}
          index={index}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}

function GalleryCard({
  image,
  layout,
  onOpen,
}: {
  image: (typeof IMAGES)[ImageKey];
  layout: "hero" | "tall" | "wide" | "normal";
  onOpen: () => void;
}) {
  return (
    <Reveal
      variant="zoom"
      className={cn(
        "work-card",
        layout === "hero" && "md:col-span-7 md:row-span-2",
        layout === "tall" && "md:col-span-5",
        layout === "wide" && "md:col-span-12",
        layout === "normal" && "md:col-span-6",
      )}
    >
      <button
        type="button"
        className="group relative block w-full overflow-hidden bg-surface text-left"
        onClick={onOpen}
        aria-label={`${image.sector} görselini incele`}
      >
        <SmartImage
          image={image}
          aspectRatio={layout === "tall" ? "4/5" : layout === "wide" ? "3/2" : "16/10"}
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="work-overlay absolute inset-0 flex flex-col justify-between bg-[#050505]/40 p-5 md:p-6">
          <Expand className="ml-auto h-4 w-4 text-gold" strokeWidth={1.4} />
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
              {image.sector}
            </p>
            <p className="mt-2 font-serif text-2xl text-cream">{image.service}</p>
            <span className="mt-3 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.14em] text-cream/85 uppercase">
              İncele <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

function Lightbox({
  trapRef,
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  trapRef: React.RefObject<HTMLDivElement | null>;
  items: Array<{ image: (typeof IMAGES)[ImageKey] }>;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index].image;
  const [touchX, setTouchX] = useState<number | null>(null);

  return (
    <div
      ref={trapRef}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92"
      role="dialog"
      aria-modal="true"
      aria-label="Galeri görseli"
      onClick={onClose}
      onTouchStart={(event) => setTouchX(event.changedTouches[0]?.clientX ?? null)}
      onTouchEnd={(event) => {
        if (touchX === null) return;
        const dx = event.changedTouches[0].clientX - touchX;
        if (dx > 50) onPrev();
        if (dx < -50) onNext();
        setTouchX(null);
      }}
    >
      <button
        type="button"
        className="absolute top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] z-10 inline-flex min-h-11 min-w-11 items-center justify-center text-cream"
        aria-label="Kapat"
        onClick={onClose}
      >
        <X strokeWidth={1.4} />
      </button>
      <button
        type="button"
        className="absolute top-1/2 left-[max(0.4rem,env(safe-area-inset-left))] z-10 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-cream"
        aria-label="Önceki"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
      >
        <ChevronLeft strokeWidth={1.4} />
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-[max(0.4rem,env(safe-area-inset-right))] z-10 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-cream"
        aria-label="Sonraki"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
      >
        <ChevronRight strokeWidth={1.4} />
      </button>
      <div
        className="relative mx-12 max-h-[85dvh] w-[min(100%-2rem,72rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        <SmartImage image={item} aspectRatio="16/10" sizes="100vw" />
        <p className="mt-4 text-center text-sm text-muted">
          {item.caption}
          <span className="mt-1 block tracking-[0.16em] text-gold uppercase">
            {index + 1} / {items.length}
          </span>
        </p>
      </div>
    </div>
  );
}
