"use client";

import { useEffect, useRef, useState } from "react";
import {
  CONSENT_OPEN_EVENT,
  getAnalyticsConsent,
  setAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/consent";

export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const firstButtonRef = useRef<HTMLButtonElement>(null);
  const focusOnOpen = useRef(false);

  useEffect(() => {
    if (getAnalyticsConsent() === null) setOpen(true);
    const onOpen = () => {
      focusOnOpen.current = true;
      setOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (open && focusOnOpen.current) {
      focusOnOpen.current = false;
      firstButtonRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  const choose = (value: AnalyticsConsent) => {
    setAnalyticsConsent(value);
    setOpen(false);
  };

  return (
    <section
      aria-labelledby="consent-title"
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[70] mx-auto max-w-3xl border border-line-white bg-[rgba(5,5,5,0.97)] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.5)] backdrop-blur-md md:p-6"
    >
      <h2 id="consent-title" className="font-serif text-xl text-cream">
        Analiz çerezleri
      </h2>
      <p className="mt-2 text-sm leading-[1.7] text-cream/80">
        Sitenin nasıl kullanıldığını anlamak için Google Analytics analiz
        çerezlerini yalnızca onayınızla kullanırız. Reddetmeniz sitenin ve
        teklif formunun çalışmasını etkilemez. Tercihinizi sayfanın altındaki
        “Çerez tercihleri” bağlantısından değiştirebilirsiniz.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          ref={firstButtonRef}
          type="button"
          className="btn-secondary min-h-11 w-full"
          onClick={() => choose("denied")}
        >
          Reddet
        </button>
        <button
          type="button"
          className="btn-secondary min-h-11 w-full"
          onClick={() => choose("granted")}
        >
          Kabul et
        </button>
      </div>
    </section>
  );
}
