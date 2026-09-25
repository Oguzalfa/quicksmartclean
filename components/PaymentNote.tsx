import { CreditCard } from "lucide-react";
import { cn } from "@/lib/cn";

export function PaymentNote({ className }: { className?: string }) {
  return (
    <p className={cn("inline-flex items-center gap-2 text-sm text-cream/80", className)}>
      <CreditCard className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
      Kredi kartıyla ödeme imkânı
    </p>
  );
}
