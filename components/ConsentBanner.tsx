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
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-line-white bg-[rgba(5,5,5,0.97)] backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="site-shell-wide flex items-center gap-3 py-2">
        <p id="consent-title" className="flex-1 text-xs leading-snug text-cream/80 sm:text-sm">
          Google Analytics çerezlerini yalnızca onayınızla kullanırız.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            ref={firstButtonRef}
            type="button"
            className="min-h-10 border border-line-white px-3 text-[0.68rem] font-semibold tracking-[0.12em] text-cream uppercase transition-colors hover:border-gold"
            onClick={() => choose("denied")}
          >
            Reddet
          </button>
          <button
            type="button"
            className="min-h-10 border border-line-white px-3 text-[0.68rem] font-semibold tracking-[0.12em] text-cream uppercase transition-colors hover:border-gold"
            onClick={() => choose("granted")}
          >
            Kabul et
          </button>
        </div>
      </div>
    </section>
  );
}
