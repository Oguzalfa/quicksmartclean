"use client";

import { ArrowRight, Phone } from "lucide-react";
import { useQuotePanel } from "@/contexts/QuotePanelContext";
import { SITE, whatsappUrl } from "@/lib/site";

export function ContactActions({
  service,
  trackLocation = "contact_section",
  showPhone = false,
}: {
  service?: string;
  trackLocation?: string;
  showPhone?: boolean;
}) {
  const { openPanel } = useQuotePanel();

  return (
    <div
      className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
      data-track-location={trackLocation}
    >
      <button type="button" className="btn-primary" onClick={() => openPanel({ service })}>
        Teklif Alın
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
      {showPhone && (
        <a href={SITE.phoneTel} className="btn-secondary">
          <Phone className="h-4 w-4" strokeWidth={1.5} />
          {SITE.phoneDisplay}
        </a>
      )}
    </div>
  );
}
