import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileContactBar } from "@/components/MobileContactBar";
import { QuotePanel } from "@/components/QuotePanel";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#icerik"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[100] focus-visible:bg-gold focus-visible:px-4 focus-visible:py-2 focus-visible:text-bg"
      >
        İçeriğe geç
      </a>
      <Header />
      <div className="grain-overlay fixed inset-0 z-[1] pointer-events-none" aria-hidden="true" />
      <main id="icerik" tabIndex={-1} className="relative z-[2] outline-none">
        {children}
      </main>
      <Footer />
      <MobileContactBar />
      <QuotePanel />
    </>
  );
}
