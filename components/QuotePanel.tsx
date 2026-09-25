"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { useQuotePanel } from "@/contexts/QuotePanelContext";
import { useFocusTrap, useLockBody } from "@/hooks/useDialog";

export function QuotePanel() {
  const { open, initialService, closePanel } = useQuotePanel();
  const trapRef = useFocusTrap(open);
  useLockBody(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closePanel]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex justify-end bg-[rgba(5,5,5,0.65)]"
      role="presentation"
      onClick={closePanel}
    >
      <aside
        ref={trapRef}
        role="dialog"
        aria-modal="true"
        aria-label="Teklif formu"
        className="flex h-full w-full max-w-[40rem] flex-col border-l border-line-white bg-bg shadow-[-24px_0_60px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line-white px-5 py-4 md:px-8">
          <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
            Teklif Alın
          </p>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-cream"
            aria-label="Paneli kapat"
            onClick={closePanel}
          >
            <X strokeWidth={1.4} />
          </button>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto px-5 py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] md:px-8">
          <QuoteForm formLocation="panel" initialService={initialService} />
        </div>
      </aside>
    </div>
  );
}
