import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileContactBar } from "@/components/MobileContactBar";
import { QuotePanel } from "@/components/QuotePanel";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-bg"
      >
        İçeriğe geç
      </a>
      <Header />
      <div id="icerik" className="grain-overlay fixed inset-0 z-[1] pointer-events-none" aria-hidden="true" />
      <main className="relative z-[2]">{children}</main>
      <Footer />
      <MobileContactBar />
      <QuotePanel />
    </>
  );
}
