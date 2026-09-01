import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Kurumsal Teklif",
  description:
    "Quick Smart Clean kurumsal temizlik hizmetleri için teklif formu. Bilgilerinizi doldurun, WhatsApp üzerinden iletin.",
  path: "/kurumsal-teklif",
});

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
