export type ImageAsset = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  sector: string;
  service: string;
  caption: string;
  objectPosition: string;
  mobileObjectPosition: string;
  aspectRatio: string;
  featured: boolean;
};

export const IMAGES = {
  hotel: {
    id: "hotel",
    src: "/images/quick-smart-clean-hotel.jpeg",
    alt: "Quick Smart Clean ekibi otel koridorunda oda temizliği operasyonu yürütüyor",
    width: 1920,
    height: 1440,
    sector: "Otel & Konaklama",
    service: "Kat ve Oda Operasyonları",
    caption: "Otel koridorlarında planlı oda ve ortak alan temizliği",
    objectPosition: "center 42%",
    mobileObjectPosition: "62% 42%",
    aspectRatio: "16/10",
    featured: true,
  },
  cafe: {
    id: "cafe",
    src: "/images/quick-smart-clean-cafe.jpeg",
    alt: "Quick Smart Clean ekibi kahve zincirinde profesyonel temizlik yapıyor",
    width: 1920,
    height: 1080,
    sector: "Kafe & Kahve Zincirleri",
    service: "HoReCa Temizliği",
    caption: "Yoğun müşteri trafiğine sahip kafe alanlarında operasyonel temizlik",
    objectPosition: "center 38%",
    mobileObjectPosition: "55% 40%",
    aspectRatio: "16/10",
    featured: true,
  },
  commercialKitchen: {
    id: "commercial-kitchen",
    src: "/images/quick-smart-clean-commercial-kitchen.jpeg",
    alt: "Quick Smart Clean ekibi endüstriyel mutfakta profesyonel temizlik uyguluyor",
    width: 1920,
    height: 1080,
    sector: "Restoranlar",
    service: "Endüstriyel Mutfak Temizliği",
    caption: "Endüstriyel mutfaklarda hijyen ve operasyon uyumlu temizlik",
    objectPosition: "center 45%",
    mobileObjectPosition: "50% 45%",
    aspectRatio: "3/2",
    featured: true,
  },
  aircraft: {
    id: "aircraft",
    src: "/images/quick-smart-clean-aircraft.jpeg",
    alt: "Quick Smart Clean ekibi uçak kabininde detaylı temizlik uyguluyor",
    width: 1920,
    height: 1080,
    sector: "Havacılık",
    service: "Kabin Temizliği",
    caption: "Uçak kabinlerinde hassas ve hızlı temizlik operasyonları",
    objectPosition: "center 40%",
    mobileObjectPosition: "58% 40%",
    aspectRatio: "16/10",
    featured: true,
  },
  yacht: {
    id: "yacht",
    src: "/images/quick-smart-clean-yacht.jpeg",
    alt: "Quick Smart Clean ekibi yat ve marina alanında temizlik hizmeti veriyor",
    width: 1920,
    height: 1080,
    sector: "Yat & Marina",
    service: "Denizcilik Temizliği",
    caption: "Yat ve marina operasyonlarında iç-dış alan bakımı",
    objectPosition: "center 44%",
    mobileObjectPosition: "60% 44%",
    aspectRatio: "16/10",
    featured: true,
  },
  residenceService: {
    id: "residence-service",
    src: "/images/quick-smart-clean-residence-service.jpeg",
    alt: "Quick Smart Clean ekibi rezidans dairesinde detaylı iç mekân temizliği yapıyor",
    width: 1920,
    height: 1440,
    sector: "Rezidans",
    service: "Özel Yaşam Alanları",
    caption: "Rezidans ve dairelerde detay odaklı iç mekân temizliği",
    objectPosition: "center 42%",
    mobileObjectPosition: "55% 42%",
    aspectRatio: "4/5",
    featured: true,
  },
  villaExterior: {
    id: "villa-exterior",
    src: "/images/quick-smart-clean-villa.jpeg",
    alt: "Quick Smart Clean ekibi villa dış alanında operasyon gerçekleştiriyor",
    width: 1920,
    height: 1080,
    sector: "Villa",
    service: "Villa Operasyonu",
    caption: "Villa dış alanlarında profesyonel saha operasyonu",
    objectPosition: "center 42%",
    mobileObjectPosition: "62% 42%",
    aspectRatio: "16/10",
    featured: true,
  },
  villaInterior: {
    id: "villa-interior",
    src: "/images/quick-smart-clean-residence.jpeg",
    alt: "Quick Smart Clean ekibi villa iç mekânında detaylı temizlik yapıyor",
    width: 1920,
    height: 1440,
    sector: "Seçkin Yaşam",
    service: "İç Mekân Temizliği",
    caption: "Seçkin yaşam alanlarında mahremiyet odaklı temizlik",
    objectPosition: "center 40%",
    mobileObjectPosition: "52% 40%",
    aspectRatio: "4/5",
    featured: true,
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof IMAGES;

export const ALL_IMAGES: ImageAsset[] = Object.values(IMAGES);

export const HERO_IMAGE_KEYS: ImageKey[] = [
  "hotel",
  "cafe",
  "aircraft",
  "yacht",
  "residenceService",
];

export const GALLERY_LAYOUT: Array<{
  imageKey: ImageKey;
  layout: "hero" | "tall" | "wide" | "normal";
}> = [
  { imageKey: "hotel", layout: "hero" },
  { imageKey: "residenceService", layout: "tall" },
  { imageKey: "commercialKitchen", layout: "wide" },
  { imageKey: "aircraft", layout: "normal" },
  { imageKey: "yacht", layout: "normal" },
  { imageKey: "cafe", layout: "normal" },
  { imageKey: "villaInterior", layout: "normal" },
  { imageKey: "villaExterior", layout: "normal" },
];

export const MOBILE_GALLERY_ORDER: ImageKey[] = [
  "hotel",
  "commercialKitchen",
  "cafe",
  "aircraft",
  "yacht",
  "residenceService",
  "villaInterior",
  "villaExterior",
];
