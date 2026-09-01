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
    relatedArticleSlugs: [
      "cok-subeli-isletmelerde-temizlik-operasyonu",
      "profesyonel-temizlikte-kalite-kontrol-teslim-sureci",
    ],
  },
  {
    slug: "spor-salonu-temizligi",
    num: "09",
    title: "Spor Salonu Temizliği",
    summary:
      "Yoğun temas alanları, spor ekipmanları, zeminler ve ortak kullanım alanları için planlı temizlik hizmetleri.",
    description:
      "Spor salonu temizliği; ekipman yüzeyleri, zeminler, soyunma odaları ve ortak kullanım alanlarında işletmenin çalışma saatlerine uygun planlı uygulamaları kapsar. Yoğun kullanım dönemlerine göre vardiya ve kontrol planı oluşturulur.",
    sectors: "Spor, Yaşam Merkezleri",
    scope: "Ekipman yüzeyleri, zemin, soyunma odası, ortak alan",
    keywords: ["spor salonu temizliği", "fitness merkezi temizliği"],
    relatedSectorSlugs: ["spor-salonlari-yasam"],
    relatedArticleSlugs: ["spor-salonlarinda-temizlik-plani"],
  },
  {
    slug: "havuz-cevre-alan-temizligi",
    num: "10",
    title: "Havuz ve Çevre Alan Temizliği",
    summary:
      "Havuz çevresi, açık alan yüzeyleri ve yoğun kullanılan dış yaşam alanları için düzenli temizlik desteği.",
    description:
      "Havuz ve çevre alan temizliği; teras, havuz kenarı, açık kullanım bölgeleri ve yoğun temas alanlarında düzenli temizlik planı gerektirir. Havuz suyu kimyasal analizi veya teknik bakım hizmeti bu kapsamın dışındadır.",
    sectors: "Villa, Otel, Seçkin Yaşam",
    scope: "Havuz çevresi, teras, açık alan yüzeyleri",
    keywords: ["havuz çevresi temizliği", "açık alan temizliği"],
    relatedSectorSlugs: ["havuz-acik-yasam", "villa-rezidans", "otel-konaklama"],
    relatedArticleSlugs: ["havuz-cevresi-acik-yasam-alanlari-temizligi"],
  },
  {
    slug: "dis-cephe-cam-temizligi",
    num: "11",
    title: "Dış Cephe ve Cam Temizliği",
    summary:
      "Kurumsal binaların cam ve dış cephe yüzeyleri için erişim koşullarına göre planlanan profesyonel temizlik.",
    description:
      "Dış cephe ve cam temizliği; bina yapısı, yükseklik ve erişim koşullarına göre planlanır. Her proje için saha keşfi yapılır, uygulama yöntemi ve ekip düzeni proje bazında belirlenir.",
    sectors: "Kurumsal Yapılar",
    scope: "Cam cephe, dış yüzey, erişim planlaması",
    keywords: ["dış cephe temizliği", "cam temizliği"],
    relatedSectorSlugs: ["kurumsal-dis-cephe", "kurumsal-ofisler"],
    relatedArticleSlugs: ["dis-cephe-cam-temizligi-planlama"],
  },
  {
    slug: "banyo-islak-alan-temizligi",
    num: "12",
    title: "Banyo ve Islak Alan Temizliği",
    summary:
      "Banyo, lavabo, duş ve yoğun neme maruz kalan yüzeylerde detay odaklı temizlik uygulamaları.",
    description:
      "Banyo ve ıslak alan temizliği; lavabo, duş, fayans yüzeyleri ve yoğun neme maruz bölgelerde detay odaklı uygulama gerektirir. Otel, villa ve rezidans projelerinde alan bazlı kontrol listeleri kullanılır.",
    sectors: "Otel, Villa, Rezidans",
    scope: "Banyo, lavabo, duş, ıslak yüzeyler",
    keywords: ["banyo temizliği", "ıslak alan temizliği"],
    relatedSectorSlugs: ["villa-rezidans", "otel-konaklama"],
    relatedArticleSlugs: ["banyo-islak-alan-temizliginde-dikkat-edilmesi-gerekenler"],
  },
  {
    slug: "insaat-tadilat-sonrasi-temizlik",
    num: "13",
    title: "İnşaat ve Tadilat Sonrası Temizlik",
    summary:
      "Yeni tamamlanan veya yenilenen yaşam ve çalışma alanlarını kullanıma hazırlayan kapsamlı temizlik uygulamaları.",
    description:
      "İnşaat ve tadilat sonrası temizlik; ince toz, yüzey kalıntıları ve kullanım öncesi detay temizliğini kapsar. Moloz taşıma, tehlikeli atık bertarafı veya teknik inşaat hizmetleri bu kapsamın dışındadır.",
    sectors: "Kurumsal, Seçkin Yaşam",
    scope: "İnce toz temizliği, yüzey hazırlığı, kullanıma hazırlık",
    keywords: ["inşaat sonrası temizlik", "tadilat sonrası temizlik"],
    relatedSectorSlugs: ["villa-rezidans", "kurumsal-ofisler"],
    relatedArticleSlugs: ["insaat-sonrasi-temizlik-asamalari"],
  },
  {
    slug: "kalite-kontrol-teslim-sureci",
    num: "14",
    title: "Kalite Kontrol ve Teslim Süreci",
    summary:
      "Tamamlanan hizmeti belirlenen kontrol adımlarıyla değerlendiren, teslim sürecini takip edilebilir şekilde yöneten operasyon yaklaşımı.",
    description:
      "Kalite kontrol ve teslim süreci; hizmet tamamlandıktan sonra belirlenen kontrol adımlarıyla değerlendirme ve teslim aşamalarını kapsar. Süreç, işletmenin beklentilerine göre şeffaf ve izlenebilir şekilde yürütülür.",
    sectors: "Tüm sektörler",
    scope: "Kontrol listesi, teslim değerlendirmesi, süreç takibi",
    keywords: ["kalite kontrol", "temizlik teslim süreci"],
    relatedSectorSlugs: ["kurumsal-ofisler", "otel-konaklama", "villa-rezidans"],
    relatedArticleSlugs: ["profesyonel-temizlikte-kalite-kontrol-teslim-sureci"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return SERVICES.map((service) => service.slug);
}
