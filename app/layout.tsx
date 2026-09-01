import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { QuotePanelProvider } from "@/contexts/QuotePanelContext";
import { SITE } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const defaultTitle =
  "Quick Smart Clean | Kurumsal ve Profesyonel Temizlik Hizmetleri";
const defaultDescription =
  "Quick Smart Clean; şirketler, hastaneler, kahve zincirleri, restoranlar, havacılık, marinalar, yatlar, oteller, villalar ve rezidanslar için profesyonel temizlik hizmetleri sunar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: "%s | Quick Smart Clean",
  },
  description: defaultDescription,
  applicationName: SITE.name,
  keywords: [
    "kurumsal temizlik",
    "profesyonel temizlik şirketi",
    "ofis temizliği",
    "hastane temizliği",
    "restoran ve kafe temizliği",
    "uçak temizliği",
    "yat ve marina temizliği",
    "villa ve rezidans temizliği",
    "çok lokasyonlu temizlik hizmetleri",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE.url,
    siteName: SITE.name,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${cormorant.variable} no-js`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');`,
          }}
        />
      </head>
      <body className="bg-bg font-sans text-cream antialiased">
        <QuotePanelProvider>
          <JsonLd />
          {children}
        </QuotePanelProvider>
      </body>
    </html>
  );
}
