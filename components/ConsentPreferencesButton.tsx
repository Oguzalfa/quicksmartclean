"use client";

import { openConsentPreferences } from "@/lib/consent";

export function ConsentPreferencesButton() {
  return (
    <button
      type="button"
      onClick={openConsentPreferences}
      className="min-h-11 text-sm text-muted underline-offset-4 hover:text-cream hover:underline"
    >
      Çerez tercihleri
    </button>
  );
}
