"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useQuotePanel } from "@/contexts/QuotePanelContext";
import { useFocusTrap, useLockBody } from "@/hooks/useDialog";
import { cn } from "@/lib/cn";
import { NAV } from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openPanel } = useQuotePanel();
  const trapRef = useFocusTrap(open);
  useLockBody(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          "site-header",
          scrolled && "is-scrolled",
          open && "is-menu-open",
        )}
      >
        <div className="site-header-inner">
          <Logo />

          <nav className="desktop-navigation" aria-label="Ana menü">
            {NAV.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="navigation-link"
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="header-cta"
            onClick={openPanel}
          >
            Teklif Al
          </button>

          <button
            type="button"
            className="mobile-menu-trigger"
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
          "mobile-menu-backdrop",
          open ? "is-visible" : "",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobil-menu"
        ref={trapRef}
        className={cn("mobile-menu-panel", open && "is-open")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        aria-hidden={!open}
      >
        <nav className="mobile-menu-nav" aria-label="Mobil menü">
          {NAV.map((item, index) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("mobile-menu-link", active && "is-active")}
                style={{ animationDelay: `${80 + index * 60}ms` }}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="header-cta mobile-menu-cta"
          onClick={() => {
            setOpen(false);
            openPanel();
          }}
        >
          Teklif Al
        </button>
      </div>
    </>
  );
}
