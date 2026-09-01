"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/Logo";
import { useQuotePanel } from "@/contexts/QuotePanelContext";
import { cn } from "@/lib/cn";
import { SITE, whatsappUrl } from "@/lib/site";

export function MobileContactBar() {
  const [visible, setVisible] = useState(false);
  const { openPanel } = useQuotePanel();

  useEffect(() => {
    const hero = document.getElementById("anasayfa");
    const footer = document.querySelector("footer");
    if (!hero) return;

    let heroVisible = true;
    let footerVisible = false;

    const update = () => setVisible(!heroVisible && !footerVisible);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === "anasayfa") heroVisible = entry.isIntersecting;
          else footerVisible = entry.isIntersecting;
        }
        update();
      },
      { threshold: 0.12 },
    );

    observer.observe(hero);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line-white bg-[rgba(5,5,5,0.94)] backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-3">
        <a
          href={SITE.phoneTel}
          className="inline-flex min-h-12 items-center justify-center gap-1.5 border-r border-line-white text-[0.68rem] font-semibold tracking-[0.08em] text-cream uppercase"
        >
          <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
          Hemen Ara
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-1.5 border-r border-line-white text-[0.68rem] font-semibold tracking-[0.08em] text-gold uppercase"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
        <button
          type="button"
          className="inline-flex min-h-12 items-center justify-center text-[0.68rem] font-semibold tracking-[0.08em] text-cream uppercase"
          onClick={openPanel}
        >
          Teklif Al
        </button>
      </div>
    </div>
  );
}
