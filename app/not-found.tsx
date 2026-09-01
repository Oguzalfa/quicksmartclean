import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="section-pad pt-32">
        <div className="site-shell-wide max-w-2xl">
          <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">404</p>
          <h1 className="mt-4 font-serif text-5xl text-cream">Sayfa Bulunamadı</h1>
          <p className="mt-5 text-muted">
            Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış olabilir.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="btn-primary">
              Ana Sayfaya Dön
            </Link>
            <Link href="/hizmetler" className="btn-secondary">
              Hizmetleri İncele
            </Link>
            <Link href="/makaleler" className="btn-secondary">
              Makaleleri İncele
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
