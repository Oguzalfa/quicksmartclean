import Link from "next/link";
import { COMPANY_FAQS } from "@/lib/company-faq";

export function CompanyFaq() {
  return (
    <section className="section-pad border-t border-line-white" aria-labelledby="sirket-sss">
      <div className="site-shell-wide max-w-4xl">
        <h2
          id="sirket-sss"
          className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.1] text-cream"
        >
          Quick Smart Clean Hakkında Sık Sorulan Sorular
        </h2>
        <div className="mt-8 divide-y divide-line-white border-y border-line-white">
          {COMPANY_FAQS.map((faq) => (
            <div key={faq.question} className="py-6">
              <h3 className="text-lg text-cream">{faq.question}</h3>
              <p className="mt-2 leading-[1.75] text-cream/85">{faq.answer}</p>
              {faq.links && (
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  {faq.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gold underline-offset-4 hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
