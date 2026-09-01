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
    featured: false,
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
    featured: false,
  },
  gym: {
    id: "gym",
    src: "/images/quick-smart-clean-gym.jpeg",
    alt: "Quick Smart Clean ekibinin spor salonunda profesyonel temizlik çalışması",
    width: 1920,
    height: 1080,
    sector: "Spor ve Yaşam Merkezleri",
    service: "Spor Salonu Temizliği",
    caption: "Spor salonlarında ekipman, zemin ve ortak alan temizliği",
    objectPosition: "center center",
    mobileObjectPosition: "58% center",
    aspectRatio: "3/2",
    featured: true,
  },
  pool: {
    id: "pool",
    src: "/images/quick-smart-clean-pool.jpeg",
    alt: "Quick Smart Clean ekibi villa havuz çevresinde temizlik operasyonu yürütüyor",
    width: 1920,
    height: 1080,
    sector: "Villa, Otel ve Yaşam Alanları",
    service: "Havuz ve Çevre Alan Temizliği",
    caption: "Havuz çevresi ve açık yaşam alanlarında düzenli temizlik desteği",
    objectPosition: "center 45%",
    mobileObjectPosition: "55% 45%",
    aspectRatio: "16/10",
    featured: true,
  },
  facade: {
    id: "facade",
    src: "/images/quick-smart-clean-facade.jpeg",
    alt: "Quick Smart Clean ekibi kurumsal binada dış cephe ve cam temizliği yapıyor",
    width: 1920,
    height: 1080,
    sector: "Kurumsal Yapılar",
    service: "Dış Cephe ve Cam Temizliği",
    caption: "Kurumsal binalarda cam ve dış cephe yüzeyleri için planlı temizlik",
    objectPosition: "center 40%",
    mobileObjectPosition: "52% 40%",
    aspectRatio: "16/9",
    featured: false,
  },
  qualityHandover: {
    id: "quality-handover",
    src: "/images/quick-smart-clean-quality-handover.jpeg",
    alt: "Quick Smart Clean temizlik teslimat formu ile kontrollü hizmet teslimi",
    width: 1920,
    height: 1080,
    sector: "Kalite ve Operasyon Yönetimi",
    service: "Kalite Kontrol ve Teslim Süreci",
    caption: "Tamamlanan hizmetin kontrol adımlarıyla değerlendirildiği teslim süreci",
    objectPosition: "center 42%",
    mobileObjectPosition: "50% 42%",
    aspectRatio: "16/10",
    featured: true,
  },
  bathroom: {
    id: "bathroom",
    src: "/images/quick-smart-clean-bathroom.jpeg",
    alt: "Quick Smart Clean ekibi lüks banyoda detaylı ıslak alan temizliği yapıyor",
    width: 1920,
    height: 1440,
    sector: "Seçkin Yaşam",
    service: "Banyo ve Islak Alan Temizliği",
    caption: "Banyo ve ıslak alanlarda detay odaklı temizlik uygulamaları",
    objectPosition: "center 42%",
    mobileObjectPosition: "48% 42%",
    aspectRatio: "4/5",
    featured: false,
  },
  luxuryResidenceTeam: {
    id: "luxury-residence-team",
    src: "/images/quick-smart-clean-luxury-residence-team.jpeg",
    alt: "Quick Smart Clean ekibi lüks rezidansta kapsamlı profesyonel temizlik operasyonu yürütüyor",
    width: 1920,
    height: 1080,
    sector: "Seçkin Yaşam",
    service: "Villa ve Rezidans Temizliği",
    caption: "Geniş yaşam alanlarında ekip ve ekipmanla yürütülen kapsamlı temizlik",
    objectPosition: "center 55%",
    mobileObjectPosition: "58% center",
    aspectRatio: "16/10",
    featured: true,
  },
  postConstruction: {
    id: "post-construction",
    src: "/images/quick-smart-clean-post-construction.jpeg",
    alt: "Quick Smart Clean ekibi yeni tamamlanan villada inşaat sonrası temizlik yapıyor",
    width: 1920,
    height: 1080,
    sector: "Seçkin Yaşam",
    service: "İnşaat ve Tadilat Sonrası Temizlik",
    caption: "Yeni tamamlanan alanları kullanıma hazırlayan kapsamlı temizlik",
    objectPosition: "center 44%",
    mobileObjectPosition: "55% 44%",
    aspectRatio: "3/2",
    featured: true,
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof IMAGES;

export type GalleryLayoutType = "hero" | "tall" | "wide" | "normal" | "cinema";

export const ALL_IMAGES: ImageAsset[] = Object.values(IMAGES);

export const HERO_IMAGE_KEYS: ImageKey[] = [
  "hotel",
  "cafe",
  "aircraft",
  "yacht",
  "residenceService",
];

/** Ana sayfa galerisi — seçilmiş 10 görsel */
export const HOME_GALLERY_LAYOUT: Array<{
  imageKey: ImageKey;
  layout: GalleryLayoutType;
}> = [
  { imageKey: "luxuryResidenceTeam", layout: "hero" },
  { imageKey: "gym", layout: "normal" },
  { imageKey: "commercialKitchen", layout: "wide" },
  { imageKey: "hotel", layout: "normal" },
  { imageKey: "aircraft", layout: "normal" },
  { imageKey: "yacht", layout: "normal" },
  { imageKey: "postConstruction", layout: "wide" },
  { imageKey: "pool", layout: "normal" },
  { imageKey: "cafe", layout: "normal" },
  { imageKey: "bathroom", layout: "tall" },
];

export const HOME_MOBILE_GALLERY_ORDER: ImageKey[] = [
  "luxuryResidenceTeam",
  "gym",
  "commercialKitchen",
  "hotel",
  "aircraft",
  "yacht",
  "postConstruction",
  "pool",
  "cafe",
  "bathroom",
];

/** Tam galeri — 14 görsel */
export const GALLERY_LAYOUT: Array<{
  imageKey: ImageKey;
  layout: GalleryLayoutType;
}> = [
  { imageKey: "luxuryResidenceTeam", layout: "hero" },
  { imageKey: "gym", layout: "normal" },
  { imageKey: "commercialKitchen", layout: "wide" },
  { imageKey: "hotel", layout: "normal" },
  { imageKey: "aircraft", layout: "normal" },
  { imageKey: "yacht", layout: "normal" },
  { imageKey: "pool", layout: "normal" },
  { imageKey: "cafe", layout: "normal" },
  { imageKey: "qualityHandover", layout: "tall" },
  { imageKey: "bathroom", layout: "tall" },
  { imageKey: "postConstruction", layout: "wide" },
  { imageKey: "facade", layout: "cinema" },
  { imageKey: "villaExterior", layout: "normal" },
  { imageKey: "villaInterior", layout: "tall" },
];

export const MOBILE_GALLERY_ORDER: ImageKey[] = [
  "luxuryResidenceTeam",
  "gym",
  "commercialKitchen",
  "hotel",
  "aircraft",
  "yacht",
  "pool",
  "cafe",
  "qualityHandover",
  "bathroom",
  "postConstruction",
  "facade",
  "villaExterior",
  "villaInterior",
];
