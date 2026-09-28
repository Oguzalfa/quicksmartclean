import { SITE } from "@/lib/site";

export type CompanyFaq = {
  question: string;
  answer: string;
  links?: { href: string; label: string }[];
};

export const COMPANY_FAQS: CompanyFaq[] = [
  {
    question: "Quick Smart Clean nedir?",
    answer:
      "Quick Smart Clean, İstanbul genelinde bireysel ve kurumsal müşterilere profesyonel temizlik hizmeti veren bir temizlik şirketidir. Her işi keşif veya ön değerlendirmeyle başlatır, kapsamı yazılı olarak paylaşır ve teslimi kontrol listesiyle yapar.",
  },
  {
    question: "Quick Smart Clean hangi hizmetleri veriyor?",
    answer:
      "Ofis ve kurumsal tesis temizliği, dükkan ve mağaza temizliği, restoran ve endüstriyel mutfak temizliği, inşaat ve tadilat sonrası temizlik, detaylı temizlik, buharlı temizlik, villa ve rezidans temizliği, otel temizliği, banyo ve ıslak alan temizliği, dış cephe ve cam temizliği ile havacılık ve yat temizliği.",
    links: [
      { href: "/hizmetler/kurumsal-tesis-temizligi", label: "Ofis ve kurumsal tesis temizliği" },
      { href: "/hizmetler/dukkan-magaza-temizligi", label: "Dükkan ve mağaza temizliği" },
      { href: "/sektorler/restoranlar", label: "Restoran ve mutfak temizliği" },
      { href: "/hizmetler/insaat-tadilat-sonrasi-temizlik", label: "İnşaat ve tadilat sonrası temizlik" },
      { href: "/hizmetler/detayli-temizlik", label: "Detaylı temizlik" },
      { href: "/hizmetler/buharli-temizlik", label: "Buharlı temizlik" },
      { href: "/hizmetler/villa-rezidans-temizligi", label: "Villa ve rezidans temizliği" },
      { href: "/sektorler/otel-konaklama", label: "Otel temizliği" },
      { href: "/hizmetler", label: "Tüm hizmetler" },
    ],
  },
  {
    question: "Quick Smart Clean hangi bölgelerde hizmet veriyor?",
    answer:
      "Quick Smart Clean, İstanbul’un Anadolu ve Avrupa Yakası genelinde, 39 ilçenin tamamında hizmet vermektedir.",
    links: [{ href: "/hizmet-bolgeleri", label: "Hizmet bölgeleri" }],
  },
  {
    question: "Quick Smart Clean İstanbul’un tamamına hizmet veriyor mu?",
    answer:
      "Evet. Quick Smart Clean, İstanbul’un Anadolu ve Avrupa Yakası genelinde hizmet vermektedir.",
  },
  {
    question: "İstanbul’da ofis temizliği yapıyor musunuz?",
    answer:
      "Evet. Ofisler ve kurumsal tesisler için günlük, haftanın belirli günlerinde veya periyodik temizlik ile tek seferlik detaylı temizlik planlıyoruz. Çalışma saatleri mesai öncesi, sonrası veya hafta sonu olarak belirlenebilir.",
    links: [{ href: "/hizmetler/kurumsal-tesis-temizligi", label: "Ofis ve kurumsal tesis temizliği" }],
  },
  {
    question: "Ev temizliği yapıyor musunuz?",
    answer:
      "Konut tarafında villa ve rezidans temizliği sunuyoruz. Farklı bir konut türü için ihtiyacınızı teklif formu, telefon veya WhatsApp üzerinden paylaşabilirsiniz.",
    links: [{ href: "/hizmetler/villa-rezidans-temizligi", label: "Villa ve rezidans temizliği" }],
  },
  {
    question: "Dükkan ve mağaza temizliği yapıyor musunuz?",
    answer:
      "Evet. Sokak mağazaları, AVM içindeki mağazalar ve showroomlar için açılış öncesi, kapanış sonrası veya periyodik temizlik planlıyoruz.",
    links: [{ href: "/hizmetler/dukkan-magaza-temizligi", label: "Dükkan ve mağaza temizliği" }],
  },
  {
    question: "İnşaat sonrası temizlik yapıyor musunuz?",
    answer:
      "Evet. İnşaat ve tadilat sonrası ince toz, boya, harç ve etiket kalıntıları için yüzeye uygun temizlik yapıyoruz. Moloz ve inşaat atığının taşınması hizmet kapsamında değildir.",
    links: [{ href: "/hizmetler/insaat-tadilat-sonrasi-temizlik", label: "İnşaat ve tadilat sonrası temizlik" }],
  },
  {
    question: "Buharlı temizlik yapıyor musunuz?",
    answer:
      "Evet. Seramik, derz, paslanmaz çelik ve buhara dayanıklı zeminlerde buhar destekli temizlik uyguluyoruz. Ahşap, laminat ve ısıya hassas yüzeylerde farklı yöntem seçiyoruz. Buharlı temizliği bir dezenfeksiyon uygulaması olarak sunmuyoruz.",
    links: [{ href: "/hizmetler/buharli-temizlik", label: "Buharlı temizlik" }],
  },
  {
    question: "Kurumsal işletmelere hizmet veriyor musunuz?",
    answer:
      "Evet. Ofis, mağaza, restoran ve otel gibi işletmeler için tek lokasyonda veya birden fazla şubede aynı kontrol listesiyle yürütülen temizlik planları oluşturuyoruz.",
  },
  {
    question: "Hangi ekipmanları kullanıyorsunuz?",
    answer:
      "Geniş zeminlerde fırçalama ve su alma için profesyonel zemin makineleri, uygun yüzeylerde buhar ekipmanı ve yüzey türüne göre seçilen ürün ve aparatlarla çalışıyoruz. Mermer, doğal taş, ahşap ve lake yüzeylerde asitli ürün ve aşındırıcı aparat kullanmıyoruz.",
  },
  {
    question: "Teklif nasıl alınır?",
    answer: `Teklif formunu doldurabilir, ${SITE.phoneDisplay} numarasını arayabilir veya WhatsApp’tan yazabilirsiniz. Hizmet türü, ilçe, yaklaşık alan, istenen sıklık ve uygun zamanı paylaşmanız yeterli. Kesin fiyat, gerekli durumlarda keşif sonrası yazılı kapsamla verilir.`,
    links: [{ href: "/kurumsal-teklif", label: "Teklif formu" }],
  },
  {
    question: "Quick Smart Clean kredi kartı kabul ediyor mu?",
    answer: "Evet. Quick Smart Clean hizmetlerinde kredi kartıyla ödeme yapılabilir.",
  },
  {
    question: "Quick Smart Clean kredi kartına taksit yapıyor mu?",
    answer:
      "Kredi kartına taksit imkânı bulunmaktadır. Güncel taksit seçenekleri için Quick Smart Clean ile iletişime geçilebilir.",
  },
];
