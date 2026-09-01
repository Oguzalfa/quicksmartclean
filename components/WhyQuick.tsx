"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { WHY_QUICK } from "@/lib/site";

export function WhyQuick() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll("[data-item]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.getAttribute("data-index"));
          if (!Number.isNaN(index)) setActive(index);
        });
      },
      { threshold: 0.65, rootMargin: "-20% 0px -20% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="neden-quick" className="section-pad">
      <div className="site-shell-wide grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Neden Quick?</p>
          </Reveal>
          <Reveal>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08] font-normal text-cream">
              Temizlikten Daha Fazlası:
              <span className="mt-1 block text-gold">
                Yönetilebilir Bir Hizmet Standardı
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-md text-muted">
              Operasyonel disiplin, eğitimli ekipler ve sürdürülebilir kalite
              kontrolüyle işletmenizin görünmez ama kritik ihtiyacını yönetiyoruz.
            </p>
          </Reveal>
        </div>

        <div ref={listRef} className="lg:col-span-7" role="list">
          {WHY_QUICK.map((item, index) => (
            <div
              key={item}
              role="listitem"
              data-item
              data-index={index}
              className={`border-b border-line-white py-5 transition-colors ${
                active === index ? "text-cream" : "text-muted"
              }`}
            >
              <Reveal delay={index * 40}>
                <span className="text-[0.72rem] tracking-[0.2em] text-gold">
                  0{index + 1}
                </span>
                <p className="mt-2 text-[1.05rem]">{item}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
