"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section-pad pt-32">
      <div className="site-shell-wide max-w-2xl">
        <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">Hata</p>
        <h1 className="mt-4 font-serif text-5xl text-cream">Bir Sorun Oluştu</h1>
        <p className="mt-5 text-muted">
          Sayfa yüklenirken beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button type="button" className="btn-primary" onClick={reset}>
            Tekrar Dene
          </button>
          <Link href="/" className="btn-secondary">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </section>
  );
}
