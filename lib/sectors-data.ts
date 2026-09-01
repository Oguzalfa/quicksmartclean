import type { ImageKey } from "@/lib/images";

export type SectorItem = {
  slug: string;
  num: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  imageKey: ImageKey | null;
  keywords: string[];
  relatedServiceSlugs: string[];
  relatedArticleSlugs: string[];
  featured: boolean;
};

export const SECTORS: SectorItem[] = [
  {
    slug: "kurumsal-ofisler",
    num: "01",
    title: "Kurumsal Yapılar",
    shortTitle: "Kurumsal Ofisler",
    summary:
      "Ofisler, genel merkezler ve şirket çalışma alanları için planlı temizlik hizmetleri.",
    description:
      "Kurumsal ofislerde çalışma saatlerine uyumlu vardiya planlaması, toplantı odaları, ortak alanlar ve yoğun kullanımlı yüzeyler için sürdürülebilir temizlik standartları oluşturuyoruz.",
    imageKey: null,
    keywords: ["kurumsal ofis temizliği", "ofis temizliği"],
    relatedServiceSlugs: ["gunluk-periyodik-temizlik", "kurumsal-tesis-temizligi"],
    relatedArticleSlugs: ["kurumsal-temizlik-firmasi-secerken"],
    featured: false,
  },
  {
    slug: "hastaneler-saglik",
    num: "02",
    title: "Sağlık Kuruluşları",
    shortTitle: "Hastaneler & Sağlık",
    summary:
      "Hijyen hassasiyeti yüksek sağlık alanları için kontrollü ve detaylı uygulamalar.",
    description:
      "Sağlık kuruluşlarında hasta ve personel güvenliğini önceleyen protokollerle bekleme alanları, klinik bölgeler ve ortak kullanım alanlarında kontrollü hijyen uygulamaları sunuyoruz. Kurumun kendi enfeksiyon kontrol prosedürleri her zaman önceliklidir.",
    imageKey: null,
    keywords: ["hastane temizliği", "sağlık kuruluşu temizliği"],
    relatedServiceSlugs: ["dezenfeksiyon-uygulamalari", "kurumsal-tesis-temizligi"],
    relatedArticleSlugs: [],
    featured: false,
  },
  {
    slug: "kafe-kahve-zincirleri",
    num: "03",
    title: "Kafe & Kahve Zincirleri",
    shortTitle: "Kafe & Kahve Zincirleri",
    summary:
      "Müşteri trafiği yüksek kafe ve kahve zincirleri için açılış öncesi, kapanış sonrası ve periyodik temizlik.",
    description:
      "Kahve zincirlerinde marka standartlarını koruyan ekiplerimizle salon, tezgâh çevresi ve yoğun temas alanlarında işletme ritminize uygun temizlik planları yürütüyoruz.",
    imageKey: "cafe",
    keywords: ["kafe temizliği", "kahve zinciri temizliği"],
    relatedServiceSlugs: ["gunluk-periyodik-temizlik", "detayli-temizlik"],
    relatedArticleSlugs: [],
    featured: true,
  },
  {
    slug: "restoranlar",
    num: "04",
    title: "Restoranlar",
    shortTitle: "Restoranlar",
    summary:
      "Mutfak dışı alanlar, salonlar ve yoğun kullanımlı yüzeyler için işletme düzenine özel çözümler.",
    description:
      "Restoranlarda salon, servis alanları ve endüstriyel mutfak bölgelerinde hijyen ve operasyon uyumunu gözeten temizlik planları oluşturuyoruz.",
    imageKey: "commercialKitchen",
    keywords: ["restoran temizliği", "endüstriyel mutfak temizliği"],
    relatedServiceSlugs: ["detayli-temizlik", "dezenfeksiyon-uygulamalari"],
    relatedArticleSlugs: ["restoran-endustriyel-mutfak-temizligi"],
    featured: true,
  },
  {
    slug: "havacilik",
    num: "05",
    title: "Havacılık",
    shortTitle: "Havacılık",
    summary:
      "Uçak, özel jet, terminal ve havacılık operasyon alanları için detaylı temizlik hizmetleri.",
    description:
      "Havacılık sektöründe kabin içi, koltuk yüzeyleri ve hassas ekipman çevresinde hızlı, dikkatli ve standartlara uygun uygulamalar gerçekleştiriyoruz.",
    imageKey: "aircraft",
    keywords: ["uçak temizliği", "havacılık temizliği"],
    relatedServiceSlugs: ["havacilik-temizligi"],
    relatedArticleSlugs: ["ucak-kabin-temizligi-planlama"],
    featured: true,
  },
  {
    slug: "yat-marina",
    num: "06",
    title: "Denizcilik",
    shortTitle: "Yat & Marina",
    summary:
      "Yatların iç ve dış yaşam alanları ile marina operasyonlarına özel bakım ve temizlik.",
    description:
      "Yat ve marina operasyonlarında güverte, iç mekân ve hassas yüzeylerde denizcilik operasyonlarına uygun, detay odaklı temizlik ve bakım hizmetleri sunuyoruz.",
    imageKey: "yacht",
    keywords: ["yat temizliği", "marina temizliği"],
    relatedServiceSlugs: ["yat-tekne-temizligi"],
    relatedArticleSlugs: ["yat-tekne-temizliginde-hassas-yuzeyler"],
    featured: true,
  },
  {
    slug: "otel-konaklama",
    num: "07",
    title: "Otel & Konaklama",
    shortTitle: "Otel & Konaklama",
    summary:
      "Misafir deneyimini destekleyen oda, ortak alan ve operasyon temizliği.",
    description:
      "Otel ve konaklama tesislerinde oda devir süreçleri, lobi ve ortak alanlarda misafir memnuniyetini destekleyen, operasyonu aksatmayan hizmet planları oluşturuyoruz.",
    imageKey: "hotel",
    keywords: ["otel temizliği", "konaklama temizliği"],
    relatedServiceSlugs: ["gunluk-periyodik-temizlik", "kurumsal-tesis-temizligi"],
    relatedArticleSlugs: ["otel-temizliginde-kalite-standardi"],
    featured: true,
  },
  {
    slug: "avm-magazalar",
    num: "08",
    title: "Perakende",
    shortTitle: "AVM & Mağazalar",
    summary:
      "Yoğun ziyaretçi trafiğine sahip ticari alanlar için düzenli temizlik çözümleri.",
    description:
      "AVM ve mağazalarda vitrin, koridor ve yoğun kullanımlı alanlarda marka algınızı destekleyen düzenli temizlik operasyonları yürütüyoruz.",
    imageKey: null,
    keywords: ["avm temizliği", "mağaza temizliği"],
    relatedServiceSlugs: ["gunluk-periyodik-temizlik"],
    relatedArticleSlugs: [],
    featured: false,
  },
  {
    slug: "villa-rezidans",
    num: "09",
    title: "Seçkin Yaşam",
    shortTitle: "Villa & Rezidans",
    summary:
      "Villa, rezidans ve seçkin yaşam alanlarında detaylı ve güvenilir temizlik hizmeti.",
    description:
      "Villa ve rezidanslarda mahremiyet, güven ve detay odaklı yaklaşımla özel yaşam alanlarında yüksek standartlı temizlik hizmeti sunuyoruz.",
    imageKey: "residenceService",
    keywords: ["villa temizliği", "rezidans temizliği"],
    relatedServiceSlugs: ["villa-rezidans-temizligi"],
    relatedArticleSlugs: ["villa-rezidans-temizligi-kapsami"],
    featured: true,
  },
];

export const FEATURED_SECTORS = SECTORS.filter((sector) => sector.featured && sector.imageKey);

export function getSectorBySlug(slug: string) {
  return SECTORS.find((sector) => sector.slug === slug);
}

export function getAllSectorSlugs() {
  return SECTORS.map((sector) => sector.slug);
}
