"use client";

import { ArrowRight } from "lucide-react";
import { useQuotePanel } from "@/contexts/QuotePanelContext";
import { whatsappUrl } from "@/lib/site";

export function ContactActions() {
  const { openPanel } = useQuotePanel();

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
      <button type="button" className="btn-primary" onClick={openPanel}>
        Kurumsal Teklif Alın
        <ArrowRight className="arrow-shift h-4 w-4" strokeWidth={1.6} />
      </button>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
      >
        WhatsApp
      </a>
    </div>
  );
}
