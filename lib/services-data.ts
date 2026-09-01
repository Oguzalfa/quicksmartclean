import type { ImageKey } from "@/lib/images";

export type ServiceItem = {
  slug: string;
  num: string;
  title: string;
  summary: string;
  description: string;
  sectors: string;
  scope: string;
  keywords: string[];
  relatedSectorSlugs: string[];
  relatedArticleSlugs: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "gunluk-periyodik-temizlik",
    num: "01",
    title: "Günlük ve Periyodik Temizlik",
    summary:
      "İşletmenizin çalışma düzenine uygun günlük, haftalık veya özel periyotlu temizlik planları.",
    description:
      "Günlük ve periyodik temizlik hizmetleri, işletmenizin operasyonel ritmine göre planlanır. Yoğun kullanılan alanlar, giriş-çıkış noktaları ve ortak kullanım bölgeleri için sürdürülebilir bir temizlik standardı oluştururuz. Tek lokasyonlu işletmelerden çok şubeli yapılara kadar vardiya, ekip ve kontrol süreçlerini tek operasyon altında yönetiriz.",
    sectors: "Kurumsal, Perakende, HoReCa, Konaklama",
    scope: "Vardiya planı, zemin ve yüzey bakımı, ortak alan düzeni",
    keywords: ["günlük temizlik", "periyodik temizlik", "kurumsal temizlik"],
    relatedSectorSlugs: ["kurumsal-ofisler", "otel-konaklama", "avm-magazalar"],
    relatedArticleSlugs: [
      "ofislerde-gunluk-ve-periyodik-temizlik-farklari",
      "cok-subeli-isletmelerde-temizlik-operasyonu",
    ],
  },
  {
    slug: "kurumsal-tesis-temizligi",
    num: "02",
    title: "Kurumsal Tesis Temizliği",
    summary:
      "Ofis, mağaza, hastane, restoran ve ortak kullanım alanlarında profesyonel ekip yönetimi.",
    description:
      "Kurumsal tesis temizliği; ofisler, mağazalar, sağlık kuruluşları ve ortak kullanım alanlarında ekip koordinasyonu, alan bazlı planlama ve kalite kontrolünü kapsar. Her mekânın kullanım yoğunluğu, çalışma saatleri ve hijyen beklentileri dikkate alınarak hizmet planı oluşturulur.",
    sectors: "Kurumsal, Sağlık, Perakende",
    scope: "Ekip koordinasyonu, alan bazlı planlama, kalite kontrol",
    keywords: ["kurumsal tesis temizliği", "ofis temizliği"],
    relatedSectorSlugs: ["kurumsal-ofisler", "hastaneler-saglik", "avm-magazalar"],
    relatedArticleSlugs: ["kurumsal-temizlik-firmasi-secerken"],
  },
  {
    slug: "detayli-temizlik",
    num: "03",
    title: "Detaylı Temizlik",
    summary:
      "Yoğun kullanılan alanlarda yüzey, zemin, ekipman çevresi ve ulaşılması zor noktalar için kapsamlı uygulama.",
    description:
      "Detaylı temizlik; yoğun temas alanları, ekipman çevreleri ve ulaşılması zor noktalarda derinlemesine uygulama gerektirir. Periyodik bakım planlarına entegre edilerek işletmenin genel hijyen standardını yükseltir.",
    sectors: "Tüm sektörler",
    scope: "Derinlemesine yüzey temizliği, detay noktaları, özel alanlar",
    keywords: ["detaylı temizlik", "derin temizlik"],
    relatedSectorSlugs: ["restoranlar", "otel-konaklama"],
    relatedArticleSlugs: ["restoran-endustriyel-mutfak-temizligi"],
  },
  {
    slug: "havacilik-temizligi",
    num: "04",
    title: "Havacılık Temizliği",
    summary:
      "Uçak kabini, özel jet ve havacılık alanları için hızlı, dikkatli ve detaylı hizmet.",
    description:
      "Havacılık temizliği; uçak kabinleri, özel jetler ve havacılık operasyon alanlarında hız, dikkat ve detay gerektirir. Koltuk yüzeyleri, kabin içi alanlar ve hassas ekipman çevresinde operasyonel süreçlere uyumlu hizmet sunarız.",
    sectors: "Havacılık",
    scope: "Kabin içi, koltuk yüzeyleri, operasyon alanları",
    keywords: ["uçak temizliği", "havacılık temizliği"],
    relatedSectorSlugs: ["havacilik"],
    relatedArticleSlugs: ["ucak-kabin-temizligi-planlama"],
  },
  {
    slug: "yat-tekne-temizligi",
    num: "05",
    title: "Yat ve Tekne Temizliği",
    summary:
      "Yatların iç yaşam alanları, güverte ve hassas yüzeyleri için özel bakım ve temizlik.",
    description:
      "Yat ve tekne temizliği; iç mekân, güverte ve hassas yüzeylerde denizcilik operasyonlarına uygun özel bakım gerektirir. Marina ve yat sahiplerinin beklentilerine göre planlanan hizmetlerle iç-dış alanların düzenli bakımını sağlarız.",
    sectors: "Denizcilik",
    scope: "İç mekân, güverte, hassas yüzey bakımı",
    keywords: ["yat temizliği", "tekne temizliği", "marina temizliği"],
    relatedSectorSlugs: ["yat-marina"],
    relatedArticleSlugs: ["yat-tekne-temizliginde-hassas-yuzeyler"],
  },
  {
    slug: "villa-rezidans-temizligi",
    num: "06",
    title: "Villa ve Rezidans Temizliği",
    summary:
      "Seçkin yaşam alanları için mahremiyet, güven ve detay odaklı temizlik hizmeti.",
    description:
      "Villa ve rezidans temizliği; özel yaşam alanlarında mahremiyet, güven ve detay odaklı bir hizmet yaklaşımı gerektirir. İç mekân, ortak alanlar ve özel kullanım bölgelerinde yüksek standartlı temizlik sunarız.",
    sectors: "Seçkin Yaşam",
    scope: "İç mekân, ortak alanlar, özel yaşam alanları",
    keywords: ["villa temizliği", "rezidans temizliği"],
    relatedSectorSlugs: ["villa-rezidans"],
    relatedArticleSlugs: ["villa-rezidans-temizligi-kapsami"],
  },
  {
    slug: "dezenfeksiyon-uygulamalari",
    num: "07",
    title: "Dezenfeksiyon Uygulamaları",
    summary:
      "Yoğun temas alanlarına ve işletme ihtiyaçlarına özel hijyen uygulamaları.",
    description:
      "Dezenfeksiyon uygulamaları; yoğun temas alanları ve işletme ihtiyaçlarına göre planlanır. Sağlık kuruluşları, kurumsal yapılar ve HoReCa sektöründe operasyonel gerekliliklere uygun hijyen protokolleri uygulanır.",
    sectors: "Sağlık, Kurumsal, HoReCa",
    scope: "Hijyen protokolleri, temas yüzeyleri, periyodik uygulama",
    keywords: ["dezenfeksiyon", "hijyen uygulamaları"],
    relatedSectorSlugs: ["hastaneler-saglik", "restoranlar"],
    relatedArticleSlugs: [],
  },
  {
    slug: "operasyon-personel-yonetimi",
    num: "08",
    title: "Operasyon ve Personel Yönetimi",
    summary:
      "Çok lokasyonlu işletmeler için ekip planlama, vardiya ve kalite kontrol desteği.",
    description:
      "Operasyon ve personel yönetimi; çok lokasyonlu işletmelerde ekip planlama, vardiya düzeni, raporlama ve kalite kontrol süreçlerini kapsar. Merkezi koordinasyon ile farklı lokasyonlarda tutarlı hizmet standardı sağlanır.",
    sectors: "Çok lokasyonlu yapılar",
    scope: "Ekip planlama, vardiya, raporlama, kalite kontrol",
    keywords: ["temizlik operasyonu", "çok lokasyonlu temizlik"],
    relatedSectorSlugs: ["kurumsal-ofisler", "otel-konaklama"],
    relatedArticleSlugs: ["cok-subeli-isletmelerde-temizlik-operasyonu"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return SERVICES.map((service) => service.slug);
}
