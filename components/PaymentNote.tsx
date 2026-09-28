import { CreditCard } from "lucide-react";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

export function PaymentNote({ className }: { className?: string }) {
  return (
    <p className={cn("inline-flex items-start gap-2 text-sm text-cream/80", className)}>
      <CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
      <span>
        {SITE.paymentNote}
        <span aria-hidden="true" className="px-1.5 text-cream/40">·</span>
        <span className="sr-only">, </span>
        {SITE.installmentNote}
      </span>
    </p>
  );
}
