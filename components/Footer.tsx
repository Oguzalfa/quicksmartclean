import { FacebookIcon, InstagramIcon, Logo, WhatsAppIcon } from "@/components/Logo";
import Link from "next/link";
import { ConsentPreferencesButton } from "@/components/ConsentPreferencesButton";
import { NAV, SITE, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line-white bg-[#050505] pt-12 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-10">
      <div className="site-shell-wide grid gap-10 md:grid-cols-3 md:items-start">
        <div className="space-y-4">
          <Logo />
          <div className="space-y-1 text-sm" data-track-location="footer">
            <a href={SITE.phoneTel} className="block w-fit text-cream hover:text-gold">
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="block w-fit break-all text-muted hover:text-cream">
              {SITE.email}
            </a>
          </div>
        </div>
        <nav
          className="flex flex-col gap-3 md:items-center"
          aria-label="Footer menü"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link w-fit text-sm tracking-[0.12em] text-muted uppercase hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3 md:justify-end" data-track-location="footer">
          <Social label="Instagram hesabı yakında" href={SITE.social.instagram}>
            <InstagramIcon className="h-5 w-5" />
          </Social>
          <Social label="Facebook hesabı yakında" href={SITE.social.facebook}>
            <FacebookIcon className="h-5 w-5" />
          </Social>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line-white text-gold hover:border-gold"
            aria-label="WhatsApp ile yazın"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="site-shell-wide mt-10 flex flex-col items-center gap-2 border-t border-line-white pt-6 text-center text-sm text-muted md:flex-row md:justify-center md:gap-6">
        <p>© 2026 Quick Smart Clean. Tüm hakları saklıdır.</p>
        <ConsentPreferencesButton />
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return (
      <span
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line-white text-muted"
        title={label}
        aria-label={label}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line-white text-gold hover:border-gold"
      aria-label={label}
    >
      {children}
    </a>
  );
}
