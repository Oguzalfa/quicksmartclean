import Image from "next/image";

export function CinematicDivider() {
  return (
    <section className="precision-section" aria-label="Her detayda aynı hassasiyet">
      <Image
        src="/images/quick-smart-clean-yacht.jpeg"
        alt="Quick Smart Clean yat ve marina temizlik operasyonu"
        fill
        sizes="100vw"
        quality={90}
        className="precision-image"
      />

      <div className="precision-overlay" aria-hidden="true" />

      <div className="precision-content">
        <p className="precision-eyebrow">QUICK SMART CLEAN</p>

        <h2 className="precision-title font-serif">
          <span>Her Detayda</span>
          <span>Aynı Hassasiyet</span>
        </h2>
      </div>
    </section>
  );
}
