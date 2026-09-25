export type AnalyticsEventName =
  | "phone_click"
  | "whatsapp_click"
  | "quote_form_start"
  | "quote_whatsapp_handoff";

type AnalyticsParams = Record<string, string | number | undefined>;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

const rawMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const GA_MEASUREMENT_ID = /^G-[A-Z0-9]+$/.test(rawMeasurementId)
  ? rawMeasurementId
  : "";

// Matched only against an explicit referrer host or utm_source value; traffic without either stays unlabelled.
export const AI_SOURCE_HOSTS = [
  "chatgpt.com",
  "chat.openai.com",
  "perplexity.ai",
  "copilot.microsoft.com",
  "gemini.google.com",
  "claude.ai",
] as const;

// Params must stay free of personal data: no names, phone numbers, e-mails or free text.
export function trackEvent(name: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  const payload = Object.fromEntries(
    Object.entries({ ...params, page_path: window.location.pathname }).filter(
      ([, value]) => value !== undefined && value !== "",
    ),
  );

  if (typeof w.gtag === "function") {
    w.gtag("event", name, payload);
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: name, ...payload });
  }
}
