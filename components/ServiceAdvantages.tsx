import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

const ADVANTAGES = [
  "İstanbul geneli hizmet",
  "Profesyonel ekip",
  "Profesyonel ekipman",
  SITE.paymentNote,
  SITE.installmentNote,
] as const;

export function ServiceAdvantages({ className }: { className?: string }) {
  return (
    <ul
      className={cn("mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/80", className)}
      aria-label="Quick Smart Clean avantajları"
    >
      {ADVANTAGES.map((item) => (
        <li key={item} className="inline-flex items-center gap-2">
          <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
