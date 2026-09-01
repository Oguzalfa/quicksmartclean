import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "site-logo group flex min-h-11 items-center gap-2.5 text-cream no-underline",
        className,
      )}
      aria-label="Quick Smart Clean ana sayfa"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center text-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
        <VillaMark />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-serif text-[clamp(0.95rem,3.2vw,1.15rem)] font-medium tracking-[0.06em]">
          <span className="text-cream">QUICK</span>{" "}
          <span className="text-gold">SMART CLEAN</span>
        </span>
        {!compact && (
          <span className="mt-1 text-[0.58rem] font-medium tracking-[0.24em] text-muted uppercase">
            Professional Cleaning
          </span>
        )}
      </span>
    </Link>
  );
}

function VillaMark() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-8 w-8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 18.5 20 7l14 11.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 18.5v13.5h21V18.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M6 18.5h28" stroke="currentColor" strokeWidth="1.3" />
      <path d="M17 32V24.5h6V32" stroke="currentColor" strokeWidth="1.3" />
      <path d="M13.5 23.5h3M23.5 23.5h3" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.09 6.45 2.09 12c0 1.76.46 3.48 1.34 5L2 22l5.16-1.35A9.93 9.93 0 0 0 12.04 22c5.5 0 9.96-4.45 9.96-9.95 0-2.66-1.03-5.16-2.95-7.14Zm-7.01 15.32c-1.58 0-3.13-.42-4.48-1.22l-.32-.19-3.06.8.82-2.98-.21-.33a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c-.01 4.54-3.7 8.28-8.02 8.28Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.37 1 2.54c.12.16 1.73 2.63 4.19 3.69.59.25 1.04.4 1.4.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.6-1.3h1.4V3h-2.4C12.4 3 11 4.6 11 6.7v1.8H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7Z" />
    </svg>
  );
}
