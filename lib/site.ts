import { IMAGES, type ImageKey } from "@/lib/images";

export const SITE = {
  name: "Quick Smart Clean",
  legalName: "Quick Smart Clean",
  tagline: "Professional Cleaning",
  phoneDisplay: "0531 843 50 58",
  phoneTel: "tel:+905318435058",
  phoneE164: "+905318435058",
  whatsappNumber: "905318435058",
  whatsappInfoText:
    "Merhaba Quick Smart Clean, kurumsal temizlik hizmetleriniz hakkında teklif almak istiyorum.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://quicksmartclean.com",
  locale: "tr_TR",
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export function whatsappUrl(text: string = SITE.whatsappInfoText) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const NAV = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/sektorler", label: "Sektörler" },
  { href: "/makaleler", label: "Bilgi Merkezi" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const HOME_NAV = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#sektorler", label: "Sektörler" },
  { href: "#calismalarimiz", label: "Çalışmalarımız" },
  { href: "/makaleler", label: "Bilgi Merkezi" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export const HERO_SLIDES = [
  {
    id: "otel",
    label: "Konaklama",
    sector: "Otel & Konaklama",
    imageKey: "hotel" as ImageKey,
  },
  {
    id: "horeca",
    label: "HoReCa",
    sector: "Kafe & Restoran",
    imageKey: "cafe" as ImageKey,
  },
  {
    id: "havacilik",
    label: "Havacılık",
    sector: "Uçak & Terminal",
    imageKey: "aircraft" as ImageKey,
  },
  {
    id: "denizcilik",
    label: "Denizcilik",
    sector: "Yat & Marina",
    imageKey: "yacht" as ImageKey,
  },
  {
    id: "yasam",
    label: "Seçkin Yaşam",
    sector: "Rezidans & Villa",
    imageKey: "residenceService" as ImageKey,
  },
].map((slide) => ({
  ...slide,
  image: IMAGES[slide.imageKey],
}));

export const BRAND_VALUES = [
  "Sektöre özel planlama",
  "Eğitimli saha ekipleri",
  "Çoklu lokasyon yönetimi",
  "7/24 operasyon desteği",
] as const;

export const WHY_QUICK = [
  "İşletmeye özel hizmet planlaması",
  "Eğitimli ve kontrollü saha ekipleri",
  "Tek lokasyon ve çoklu şube desteği",
  "Planlı kalite kontrolleri",
  "Operasyonu aksatmayan çalışma saatleri",
  "Düzenli hizmet raporlaması",
  "Hızlı ekip organizasyonu",
  "7/24 iletişim desteği",
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Keşif",
    text: "Mekânı, operasyon saatlerini ve hijyen ihtiyaçlarını analiz ederiz.",
  },
  {
    num: "02",
    title: "Planlama",
    text: "Ekip, vardiya, uygulama alanı ve hizmet sıklığını belirleriz.",
  },
  {
    num: "03",
    title: "Uygulama",
    text: "Eğitimli saha ekibimiz planlanan hizmeti kontrollü şekilde gerçekleştirir.",
  },
  {
    num: "04",
    title: "Kontrol",
    text: "Hizmet sonucunu değerlendirir, süreklilik için gerekli iyileştirmeleri planlarız.",
  },
] as const;

export const SECTOR_OPTIONS = [
  { value: "kurumsal", label: "Kurumsal Ofis" },
  { value: "saglik", label: "Hastane/Sağlık Kuruluşu" },
  { value: "kafe", label: "Kafe/Kahve Zinciri" },
  { value: "restoran", label: "Restoran" },
  { value: "havacilik", label: "Havacılık" },
  { value: "yat-marina", label: "Yat/Marina" },
  { value: "otel", label: "Otel" },
  { value: "avm", label: "AVM/Mağaza" },
  { value: "villa", label: "Villa/Rezidans" },
  { value: "diger", label: "Diğer" },
] as const;

export const FREQUENCY_OPTIONS = [
  { value: "tek-sefer", label: "Tek seferlik" },
  { value: "gunluk", label: "Günlük" },
  { value: "haftalik", label: "Haftalık" },
  { value: "aylik", label: "Aylık" },
  { value: "periyodik", label: "Periyodik" },
  { value: "proje", label: "Proje bazlı" },
] as const;

export const LOCATION_OPTIONS = [
  { value: "tek", label: "Tek lokasyon" },
  { value: "coklu", label: "Çoklu lokasyon" },
] as const;

export const ARTICLE_CATEGORIES = [
  "Kurumsal Temizlik",
  "Ofis ve Tesis Yönetimi",
  "Hastane ve Sağlık",
  "Restoran ve Kafe",
  "Otel ve Konaklama",
  "Havacılık",
  "Yat ve Marina",
  "Villa ve Rezidans",
  "Hijyen Rehberleri",
] as const;
