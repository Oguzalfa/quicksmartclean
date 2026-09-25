import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Temizlik Teklifi Alın",
  description:
    "İstanbul'da restoran, ofis, zemin ve inşaat sonrası temizlik için teklif formu. Hizmet, ilçe, alan ve zamanı paylaşın; WhatsApp üzerinden iletin.",
  path: "/kurumsal-teklif",
});

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
