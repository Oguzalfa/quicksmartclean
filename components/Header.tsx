"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useQuotePanel } from "@/contexts/QuotePanelContext";
import { useFocusTrap, useLockBody } from "@/hooks/useDialog";
import { cn } from "@/lib/cn";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { openPanel } = useQuotePanel();
  const trapRef = useFocusTrap(open);
  useLockBody(open);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      if (open) {
        setHidden(false);
        lastY = y;
        return;
      }
      setHidden(y > lastY && y > 120);
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          scrolled || open || pathname !== "/"
            ? "border-b border-line-white bg-[#050505]/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="site-shell-wide flex h-[4.75rem] items-center justify-between gap-4 lg:h-[5.5rem]">
          <Logo />

          <nav className="hidden items-center gap-8 xl:flex" aria-label="Ana menü">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link text-[0.78rem] font-medium tracking-[0.12em] uppercase",
                  pathname === item.href ? "text-cream" : "text-cream/85",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={SITE.phoneTel}
              className="text-[0.78rem] tracking-[0.08em] text-muted hover:text-cream"
            >
              {SITE.phoneDisplay}
            </a>
            <button type="button" className="btn-primary min-h-11 px-5" onClick={openPanel}>
              Teklif Alın
            </button>
          </div>

          <button
            type="button"
            className="relative z-[60] inline-flex min-h-11 min-w-11 items-center justify-center text-cream lg:hidden"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobil-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X strokeWidth={1.4} /> : <Menu strokeWidth={1.4} />}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobil-menu"
        ref={trapRef}
        className={cn(
          "menu-panel fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col border-l border-line-white bg-[#0b0b0b] px-6 pt-[5.5rem] pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-[-20px_0_40px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "menu-open translate-x-0" : "pointer-events-none translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        aria-hidden={!open}
        inert={!open}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobil menü">
          {NAV.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="menu-item min-h-12 border-b border-line-white py-3 font-serif text-2xl text-cream"
              style={{ animationDelay: `${80 + index * 70}ms` }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="btn-primary mt-8 min-h-12 w-full"
          onClick={() => {
            setOpen(false);
            openPanel();
          }}
        >
          Teklif Alın
        </button>
      </div>
    </>
  );
}
