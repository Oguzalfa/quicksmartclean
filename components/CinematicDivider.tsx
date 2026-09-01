import Image from "next/image";
import { IMAGES } from "@/lib/images";

export function CinematicDivider() {
  const image = IMAGES.luxuryResidenceTeam;

  return (
    <section className="precision-section" aria-label="Her detayda aynı hassasiyet">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        quality={90}
        className="precision-image precision-image--luxury"
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
