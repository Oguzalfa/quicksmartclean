import Link from "next/link";
import { ContactActions } from "@/components/ContactActions";
import { PaymentNote } from "@/components/PaymentNote";
import type { ServicePageContent } from "@/lib/service-pages";

export function ServicePageBody({ content }: { content: ServicePageContent }) {
  return (
    <div className="max-w-[46rem]">
      {content.intro.map((paragraph) => (
        <p key={paragraph} className="mt-5 text-[1.05rem] leading-[1.8] text-cream/88 first:mt-0">
          {paragraph}
        </p>
      ))}

      <ContactActions service={content.quoteService} trackLocation="service_intro" showPhone />

      {content.sections.map((section) => (
        <section key={section.heading} className="mt-14">
          <h2 className="font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.15] text-cream">
            {section.heading}
          </h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[1.05rem] leading-[1.8] text-cream/88">
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="mt-5 list-disc space-y-2 pl-5 text-cream/88">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="leading-[1.75]">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {content.faqs.length > 0 && (
        <section className="mt-14 border-t border-line-white pt-10">
          <h2 className="font-serif text-[clamp(1.7rem,3vw,2.3rem)] text-cream">
            Sık Sorulan Sorular
          </h2>
          <div className="mt-6 divide-y divide-line-white border-y border-line-white">
            {content.faqs.map((faq) => (
              <div key={faq.question} className="py-5">
                <h3 className="text-lg text-cream">{faq.question}</h3>
                <p className="mt-2 leading-[1.75] text-cream/85">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {content.guides.length > 0 && (
        <section className="mt-14">
          <h2 className="font-serif text-[clamp(1.5rem,2.6vw,2rem)] text-cream">
            İlgili Rehberler
          </h2>
          <ul className="mt-5 space-y-5">
            {content.guides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href} className="text-gold underline-offset-4 hover:underline">
                  {guide.label}
                </Link>
                <p className="mt-1 text-sm text-muted">{guide.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-14 border border-line-white p-6 md:p-8">
        <h2 className="font-serif text-2xl text-cream">Keşif ve teklif için bize ulaşın</h2>
        <p className="mt-3 text-muted">
          Hizmet türünü, ilçeyi, yaklaşık alanı ve uygun zamanı paylaşın; kapsamı
          birlikte netleştirelim.
        </p>
        <ContactActions service={content.quoteService} trackLocation="service_footer" showPhone />
        <PaymentNote className="mt-5" />
      </section>
    </div>
  );
}
