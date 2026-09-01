"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useQuotePanel } from "@/contexts/QuotePanelContext";
import { SERVICES } from "@/lib/services-data";

export function Services() {
  const [openSlug, setOpenSlug] = useState<string | null>(SERVICES[0].slug);
  const { openPanel } = useQuotePanel();

  return (
    <section id="hizmetler" className="section-pad border-t border-line-white">
      <div className="site-shell-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">Hizmetler</p>
          </Reveal>
          <Reveal>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-normal text-cream">
              Hizmet Yetkinliklerimiz
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-muted">
              Her hizmet, sektörünüzün operasyonel ihtiyaçlarına göre planlanır
              ve kontrollü şekilde uygulanır.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <Link href="/hizmetler" className="btn-secondary mt-8 inline-flex">
              Tüm Hizmetleri Görüntüle
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-line-white">
            {SERVICES.map((service, index) => {
              const open = openSlug === service.slug;
              return (
                <Reveal key={service.slug} delay={index * 50} as="article">
                  <button
                    type="button"
                    className="flex w-full items-start gap-5 border-b border-line-white py-6 text-left"
                    aria-expanded={open}
                    onClick={() =>
                      setOpenSlug((current) =>
                        current === service.slug ? null : service.slug,
                      )
                    }
                  >
                    <span className="mt-1 text-[0.72rem] tracking-[0.2em] text-gold">
                      {service.num}
                    </span>
                    <span className="flex-1">
                      <span className="block font-serif text-2xl text-cream">
                        {service.title}
                      </span>
                    </span>
                    <span className="text-muted">{open ? "—" : "+"}</span>
                  </button>
                  <div className="accordion-panel" data-open={open}>
                    <div className="overflow-hidden">
                      <div className="pb-6 pl-10">
                        <p className="max-w-2xl text-muted">{service.summary}</p>
                        <p className="mt-4 text-sm text-cream/85">
                          <span className="text-gold">Uygun sektörler:</span>{" "}
                          {service.sectors}
                        </p>
                        <p className="mt-2 text-sm text-cream/85">
                          <span className="text-gold">Hizmet kapsamı:</span>{" "}
                          {service.scope}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-4">
                          <Link
                            href={`/hizmetler/${service.slug}`}
                            className="inline-flex min-h-11 items-center gap-2 text-[0.74rem] tracking-[0.14em] text-gold uppercase"
                          >
                            Detayları İncele
                            <ArrowRight className="arrow-shift h-4 w-4" strokeWidth={1.6} />
                          </Link>
                          <button
                            type="button"
                            className="inline-flex min-h-11 items-center gap-2 text-[0.74rem] tracking-[0.14em] text-muted uppercase hover:text-gold"
                            onClick={openPanel}
                          >
                            Teklif Alın
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
