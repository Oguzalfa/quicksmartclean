import { INSTALLMENT_FAQ, PAYMENT_FAQ } from "@/lib/payment-faqs";
import type { ServicePageContent } from "@/lib/service-pages";

export const MORE_SECTOR_PAGES: Record<string, ServicePageContent> = {
  "kurumsal-ofisler": {
    seoTitle: "Kurumsal Ofisler İçin Temizlik Çözümleri",
    metaDescription:
      "İstanbul'da genel merkez, ofis katı ve çalışma alanları için mesai düzenine uygun günlük, periyodik ve dönemsel temizlik çözümleri. Keşif ve teklif alın.",
    h1: "Kurumsal Ofisler ve Genel Merkezler İçin Temizlik",
    serviceName: "Kurumsal Ofis Temizlik Çözümleri",
    intro: [
      "Kurumsal ofislerde temizlik; çalışanların, ziyaretçilerin ve toplantı trafiğinin gün boyu devam ettiği bir ortamda, işi aksatmadan yürütülmesi gereken bir operasyondur. Quick Smart Clean, İstanbul'daki genel merkezler, ofis katları ve paylaşımlı çalışma alanları için mesai düzenine göre planlanan temizlik çözümleri sunar.",
      "Ofisin ihtiyacı çoğu zaman tek bir hizmetle sınırlı değildir: günlük temizlik, dönemsel detay çalışmaları, cam temizliği ve taşınma ya da tadilat sonrası temizlik aynı plan içinde ele alınabilir.",
    ],
    sections: [
      {
        heading: "Ofislerde Temizliği Zorlaştıran Durumlar",
        bullets: [
          "Mesai saatleri içinde çalışanları rahatsız etmeden çalışma gerekliliği",
          "Toplantı odaları ve ortak alanların gün içinde birden fazla kez kullanılması",
          "Mutfak ve çay ocaklarının yoğun kullanımı",
          "Halı, laminat ve cam bölme gibi farklı yüzeylerin bir arada bulunması",
          "Gizli belge ve ekipman bulunan alanlarda erişim kuralları",
        ],
      },
      {
        heading: "Ofisler İçin Hizmet Seçenekleri",
        bullets: [
          "Günlük ve periyodik temizlik: Çalışma alanları, ıslak alanlar ve ortak alanlar için düzenli plan.",
          "Kurumsal tesis temizliği: Ofis katları, resepsiyon, toplantı odaları ve ortak kullanım alanlarının bütünü.",
          "Cam ve cephe temizliği: İç cam bölmeler ile erişim koşulları uygun dış camlar.",
          "Taşınma ve tadilat sonrası temizlik: Yeni ofise geçiş veya yenileme sonrasında kullanıma hazırlık.",
        ],
        links: [
          { href: "/hizmetler/kurumsal-tesis-temizligi", label: "Ofis ve kurumsal tesis temizliği" },
          { href: "/hizmetler/gunluk-periyodik-temizlik", label: "Günlük ve periyodik temizlik" },
        ],
      },
      {
        heading: "Mesai Düzenine Uygun Çalışma",
        paragraphs: [
          "Temizlik mesai öncesi, sırasında veya sonrasında planlanabilir. Gün içinde yalnızca ıslak alanlar ve mutfak gibi hızla kirlenen bölümler kontrol edilirken zemin ve detaylı işler mesai dışına bırakılabilir.",
          "Gizli belge veya ekipman bulunan odalarda çalışma kuralları, erişim saatleri ve dokunulmayacak alanlar önceden yazılı olarak belirlenir.",
        ],
        cta: true,
      },
      {
        heading: "Çok Katlı ve Çok Lokasyonlu Ofisler",
        paragraphs: [
          "Birden fazla kat veya farklı ilçelerde ofisi bulunan şirketlerde görev listeleri ve kontrol adımları ortak bir çerçevede toplanır. Böylece her ofiste aynı standart uygulanır ve takip tek noktadan yapılır.",
        ],
        links: [{ href: "/hizmetler/operasyon-personel-yonetimi", label: "Temizlik operasyonu ve personel yönetimi" }],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Ofisin toplam alanı ve kat sayısı",
          "Çalışan ve ziyaretçi yoğunluğu",
          "Hizmet sıklığı ve çalışma saatleri",
          "Cam, zemin bakımı gibi dönemsel işlerin kapsamı",
        ],
      },
    ],
    faqs: [
      {
        question: "Ofis temizliği mesai dışında yapılabilir mi?",
        answer:
          "Evet. Mesai öncesi, sonrası veya hafta sonu çalışma planlanabilir. Gün içinde yalnızca hızla kirlenen alanların kontrolü yapılabilir.",
      },
      {
        question: "Gizli belge bulunan odalarda nasıl çalışılıyor?",
        answer:
          "Bu odalar için erişim saatleri, çalışma kuralları ve dokunulmayacak alanlar önceden yazılı olarak belirlenir.",
      },
      {
        question: "Yeni ofise taşınırken temizlik yapıyor musunuz?",
        answer:
          "Evet. Taşınma öncesi veya tadilat sonrası temizlik planlanabilir; ardından düzenli temizlik planına geçilebilir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "İlçe, ofisin yaklaşık alanı, kat sayısı, çalışan sayısı, istenen sıklık ve çalışma saatleri ile başlayabiliriz.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/ofislerde-gunluk-ve-periyodik-temizlik-farklari",
        label: "Ofislerde günlük ve periyodik temizlik farkları",
        description: "Hangi işlerin günlük, hangilerinin periyodik planlanması gerektiğini anlatan rehber.",
      },
      {
        href: "/makaleler/kurumsal-temizlik-firmasi-secerken",
        label: "Kurumsal temizlik firması seçerken nelere dikkat edilmeli?",
        description: "Sözleşme, ekip yönetimi ve denetim kriterleri.",
      },
    ],
    quoteService: "ofis-kurumsal",
    updatedAt: "2026-09-28",
  },
  "hastaneler-saglik": {
    seoTitle: "Sağlık Kuruluşu Temizliği İstanbul",
    metaDescription:
      "İstanbul'da klinik, poliklinik ve sağlık kuruluşları için kurumun enfeksiyon kontrol prosedürüne uygun bekleme, ortak alan ve idari alan temizliği.",
    h1: "İstanbul Sağlık Kuruluşu ve Klinik Temizliği",
    serviceName: "Sağlık Kuruluşu Temizliği",
    intro: [
      "Sağlık kuruluşlarında temizlik; hasta, refakatçi ve personelin sürekli hareket ettiği alanlarda, kurumun kendi enfeksiyon kontrol prosedürüne bağlı kalınarak yürütülmesi gereken bir hizmettir. Quick Smart Clean, İstanbul'daki klinik, poliklinik, muayenehane ve sağlık kuruluşları için bekleme, ortak ve idari alanlara yönelik temizlik hizmeti sunar.",
      "Sağlık kuruluşunda hangi alanda, hangi yöntemle ve hangi ürünle çalışılacağını kurumun prosedürü belirler. Kapsam ve yetki sınırları bu prosedüre göre yazılı olarak netleştirilir.",
    ],
    sections: [
      {
        heading: "Hizmet Verilen Alanlar",
        bullets: [
          "Giriş, danışma ve bekleme alanları",
          "Koridor, merdiven ve asansörler",
          "Hasta ve ziyaretçi tuvaletleri",
          "İdari ofisler, toplantı odaları ve personel alanları",
          "Muayene odalarında kurumun belirlediği kapsamdaki yüzeyler",
        ],
      },
      {
        heading: "Kurum Prosedürü Önceliklidir",
        paragraphs: [
          "Her sağlık kuruluşunun alan sınıflandırması, kullanılacak ürünler ve uygulama sıklığı kendi enfeksiyon kontrol prosedürüyle belirlenir. Çalışma bu prosedüre göre planlanır; kurumun izin vermediği alanlara girilmez.",
          "Ameliyathane, yoğun bakım ve steril alanlar gibi kritik klinik bölümlerde çalışma, kurumun belirlediği prosedür ve yetki sınırlarına göre ayrıca değerlendirilir.",
        ],
      },
      {
        heading: "Temas Yüzeyleri ve Dezenfeksiyon",
        paragraphs: [
          "Kapı kolu, tutamak, danışma bankosu, bekleme koltukları ve asansör butonları gibi yoğun temas yüzeyleri temizlik planında öncelikli olarak ele alınır. Dezenfeksiyon adımı, kurumun prosedürüne göre temizlikten sonra uygulanır.",
        ],
        links: [{ href: "/hizmetler/dezenfeksiyon-uygulamalari", label: "Dezenfeksiyon uygulamaları" }],
      },
      {
        heading: "Çalışma Düzeni",
        bullets: [
          "Hasta akışını aksatmayacak saat aralıkları",
          "Alan bazlı görev listesi ve kontrol kaydı",
          "Kurumun sorumlu birimiyle düzenli iletişim",
          "Periyodik detay işlerin kuruma uygun zamanlarda planlanması",
        ],
        cta: true,
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Tıbbi atık toplama ve taşıma, tıbbi cihazların temizliği ve sterilizasyonu, haşere kontrolü ve havalandırma kanalı temizliği bu hizmetin kapsamında değildir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kurumumuzun enfeksiyon kontrol prosedürüne uyuyor musunuz?",
        answer:
          "Evet. Sağlık kuruluşlarında kurumun kendi prosedürü önceliklidir; alan, yöntem ve ürün seçimi bu prosedüre göre planlanır.",
      },
      {
        question: "Tıbbi atık toplama yapıyor musunuz?",
        answer: "Hayır. Tıbbi atık toplama ve taşıma bu hizmetin kapsamında değildir.",
      },
      {
        question: "Klinik açıkken temizlik yapılabilir mi?",
        answer:
          "Evet. Ortak alanlar ve temas yüzeyleri hasta akışını aksatmayacak şekilde planlanır; detaylı işler kurumun uygun gördüğü saatlere bırakılır.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "İlçe, kurumun yaklaşık alanı, hizmet verilecek bölümler, çalışma saatleri ve istenen sıklık ile başlayabiliriz.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/kurumsal-temizlik-firmasi-secerken",
        label: "Kurumsal temizlik firması seçerken nelere dikkat edilmeli?",
        description: "Sözleşme, ekip yönetimi ve denetim kriterleri.",
      },
      {
        href: "/makaleler/profesyonel-temizlikte-kalite-kontrol-teslim-sureci",
        label: "Profesyonel temizlikte kalite kontrol ve teslim süreci",
        description: "Kontrol listesi, saha değerlendirmesi ve geri bildirim adımları.",
      },
    ],
    quoteService: "saglik",
    updatedAt: "2026-09-28",
  },
  "kafe-kahve-zincirleri": {
    seoTitle: "Kafe ve Kahve Zinciri Temizliği İstanbul",
    metaDescription:
      "İstanbul'da kafe ve kahve zincirleri için salon, bar ve tezgâh çevresi, zemin ve tuvalet temizliği. Açılış öncesi, kapanış sonrası veya periyodik plan.",
    h1: "İstanbul Kafe ve Kahve Zinciri Temizliği",
    serviceName: "Kafe ve Kahve Zinciri Temizliği",
    intro: [
      "Kafelerde temizlik; müşteri trafiğinin gün boyu sürdüğü salon, bar ve tezgâh çevresi, oturma alanları ve tuvaletlerin marka standardında tutulmasını gerektirir. Quick Smart Clean, İstanbul'daki bağımsız kafeler ve kahve zincirleri için açılış öncesi, kapanış sonrası veya periyodik temizlik hizmeti sunar.",
      "Zincir işletmelerde her şubenin aynı görünümde olması beklenir. Görev listesi ve kontrol adımları bu nedenle şubeler arasında ortak tutulur.",
    ],
    sections: [
      {
        heading: "Temizlik Kapsamı",
        bullets: [
          "Salon: masa, sandalye, koltuk ve oturma alanları",
          "Bar ve tezgâh çevresi: erişilebilir yüzeyler, raf ve teşhir alanları",
          "Zemin ve derz aralarında biriken kir ve lekeler",
          "Müşteri ve personel tuvaletleri",
          "Vitrin iç camı, cam kapılar ve temas yüzeyleri",
          "Teras ve dış oturma alanları",
        ],
      },
      {
        heading: "Açılış Öncesi ve Kapanış Sonrası",
        paragraphs: [
          "Kafelerde detaylı temizlik çoğunlukla müşteri olmadığı saatlerde yapılır. Kapanış sonrası zemin, derz ve oturma alanları; açılış öncesi ise salonun ve tuvaletlerin güne hazırlanması planlanabilir.",
        ],
        cta: true,
      },
      {
        heading: "Zincir Şubelerde Ortak Standart",
        paragraphs: [
          "Farklı ilçelerde şubesi bulunan zincirlerde her şube için aynı görev listesi ve kontrol adımları kullanılır. Şubeye özgü farklılıklar listeye eklenir; takip tek iletişim noktası üzerinden yapılır.",
        ],
        links: [{ href: "/hizmetler/operasyon-personel-yonetimi", label: "Temizlik operasyonu ve personel yönetimi" }],
      },
      {
        heading: "Periyodik Detay Temizlik",
        paragraphs: [
          "Günlük rutinin ulaşmadığı zemin derzleri, koltuk altları, yüksek raflar ve tezgâh çevresi gibi bölümler haftalık veya aylık detay temizlikle ele alınır. Uygun seramik ve derz yüzeylerinde buhar destekli temizlik tercih edilebilir.",
        ],
        links: [
          { href: "/hizmetler/detayli-temizlik", label: "Detaylı temizlik" },
          { href: "/hizmetler/gunluk-periyodik-temizlik", label: "Günlük ve periyodik temizlik" },
        ],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Kafenin alanı ve oturma kapasitesi",
          "Şube sayısı",
          "Hizmet sıklığı ve çalışma saatleri",
          "Teras ve dış alanların kapsama dahil olması",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Kahve makinesi ve ekipmanların iç temizliği ile teknik bakımı, davlumbaz kanalı temizliği ve haşere kontrolü bu hizmetin kapsamında değildir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kafe kapanışından sonra temizlik yapılabilir mi?",
        answer: "Evet. Detaylı zemin ve salon temizliği kapanış sonrası veya açılış öncesinde planlanabilir.",
      },
      {
        question: "Birden fazla şubemiz için ortak plan yapılabilir mi?",
        answer:
          "Evet. Şubeler için ortak görev listesi ve kontrol adımları hazırlanır; takip tek iletişim noktası üzerinden yapılır.",
      },
      {
        question: "Kahve makinesi temizliği kapsamda mı?",
        answer: "Hayır. Kahve makinesi ve ekipmanların iç temizliği ve teknik bakımı kapsam dışıdır.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer: "İlçe, şube sayısı, yaklaşık alan, çalışma saatleri ve istenen sıklık ile başlayabiliriz.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/cok-subeli-isletmelerde-temizlik-operasyonu",
        label: "Çok şubeli işletmelerde temizlik operasyonu nasıl yönetilir?",
        description: "Standart görev listeleri, vardiya ve raporlama üzerine rehber.",
      },
      {
        href: "/makaleler/restoran-endustriyel-mutfak-temizligi",
        label: "Restoran ve endüstriyel mutfak temizliği nasıl planlanır?",
        description: "Servis alanları ve mutfak bölümleri için planlama rehberi.",
      },
    ],
    quoteService: "kafe",
    updatedAt: "2026-09-28",
  },
  havacilik: {
    seoTitle: "Havacılık Sektörü İçin Temizlik Hizmetleri",
    metaDescription:
      "Havacılık operatörleri ve tesisleri için kabin içi temizlik ile ofis, bekleme ve ortak alan temizliği. Operatör prosedürlerine uygun planlama ve teklif.",
    h1: "Havacılık Sektörüne Yönelik Temizlik Hizmetleri",
    serviceName: "Havacılık Sektörü Temizlik Hizmetleri",
    intro: [
      "Havacılık sektöründe temizlik yalnızca uçak kabiniyle sınırlı değildir. Operatörlerin ofisleri, yolcu ve ekip bekleme alanları ile havacılık tesislerindeki ortak kullanım alanları da aynı dikkatle yönetilmesi gereken bölümlerdir. Quick Smart Clean, havacılık operatörleri ve tesisleri için kabin içi temizlik ile tesis içi alanlara yönelik hizmetleri birlikte planlar.",
      "Havacılıkta çalışma koşullarını operatörün ve havalimanı işletmesinin prosedürleri belirler. Kapsam, erişim ve zaman planı bu prosedürlere göre yazılı olarak netleşir.",
    ],
    sections: [
      {
        heading: "Sektöre Özgü Gereklilikler",
        bullets: [
          "Kısıtlı ve önceden belirlenmiş zaman aralıklarında çalışma",
          "Havalimanı ve apron erişiminde güvenlik prosedürlerine uyum",
          "Kabin içindeki hassas malzemelere uygun ürün ve yöntem",
          "Operatörün kabul ettiği ürün listesine bağlı kalma",
        ],
      },
      {
        heading: "Hizmet Verilen Alanlar",
        bullets: [
          "Uçak kabini ve özel jet iç mekânları",
          "Operatör ofisleri ve idari alanlar",
          "Yolcu ve ekip bekleme salonları",
          "Havacılık tesislerindeki tuvalet, ıslak alan ve ortak kullanım bölümleri",
        ],
        links: [{ href: "/hizmetler/havacilik-temizligi", label: "Uçak kabini ve havacılık temizliği" }],
      },
      {
        heading: "Tesis İçi Alanlar İçin Düzenli Plan",
        paragraphs: [
          "Ofis, bekleme salonu ve ortak alanlar için günlük veya periyodik temizlik planı hazırlanabilir. Plan, tesisin çalışma saatlerine ve yolcu yoğunluğuna göre düzenlenir.",
        ],
        links: [{ href: "/hizmetler/gunluk-periyodik-temizlik", label: "Günlük ve periyodik temizlik" }],
        cta: true,
      },
      {
        heading: "Kontrol ve Teslim",
        paragraphs: [
          "Kabin ve tesis alanları için operatörle kararlaştırılan kontrol listeleri kullanılır. Tamamlanan bölümler bu liste üzerinden birlikte değerlendirilir.",
        ],
        links: [{ href: "/hizmetler/kalite-kontrol-teslim-sureci", label: "Kalite kontrol ve teslim süreci" }],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Uçak dış yüzey yıkaması, teknik bakım, kokpit ve avionik ekipman temizliği bu hizmetin kapsamında değildir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Yalnızca kabin temizliği mi yapıyorsunuz?",
        answer:
          "Hayır. Kabin içi temizliğin yanında operatör ofisleri, bekleme salonları ve havacılık tesislerindeki ortak alanlar için de temizlik planlanabilir.",
      },
      {
        question: "Havalimanı güvenlik prosedürleri nasıl yönetiliyor?",
        answer:
          "Erişim, havalimanı işletmesinin ve operatörün güvenlik prosedürlerine tabidir. Giriş ve refakat koşulları planlama aşamasında operatörle birlikte belirlenir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "Hizmet verilecek alanlar (kabin, ofis, bekleme salonu), uçak tipi veya tesis büyüklüğü, uygun zaman aralıkları ve istenen sıklık ile başlayabiliriz.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/ucak-kabin-temizligi-planlama",
        label: "Uçak kabin temizliği neden özel planlama gerektirir?",
        description: "Zaman kısıtı, hassas yüzeyler ve kontrol adımları üzerine rehber.",
      },
    ],
    quoteService: "havacilik",
    updatedAt: "2026-09-28",
  },
  "yat-marina": {
    seoTitle: "Yat ve Marina Sektörü İçin Temizlik",
    metaDescription:
      "İstanbul'da yat sahipleri, kaptanlar ve marina işletmeleri için yat iç ve güverte temizliği ile marina ofis, sosyal tesis ve ıslak alan temizliği.",
    h1: "Yat Sahipleri ve Marinalar İçin Temizlik Hizmetleri",
    serviceName: "Yat ve Marina Temizlik Hizmetleri",
    intro: [
      "Denizcilik sektöründe temizlik ihtiyacı iki taraftan gelir: yat sahipleri ve kaptanlar teknenin iç yaşam alanları ile güvertesinin bakımlı kalmasını isterken marina işletmeleri ofis, sosyal tesis ve ortak alanlarının düzenli temizlenmesine ihtiyaç duyar. Quick Smart Clean, İstanbul'daki yat sahipleri ve marina işletmeleri için her iki ihtiyaca yönelik temizlik hizmeti sunar.",
      "Çalışma, marinanın kurallarına ve erişim koşullarına uygun olarak planlanır.",
    ],
    sections: [
      {
        heading: "Yat Sahipleri ve Kaptanlar İçin",
        bullets: [
          "İç yaşam alanları, kamaralar ve banyoların temizliği",
          "Tik güverte, paslanmaz donanım ve kokpit temizliği",
          "Sezon öncesi hazırlık ve sezon sonu temizlik",
          "Misafir veya charter öncesi iç mekân hazırlığı",
        ],
        links: [{ href: "/hizmetler/yat-tekne-temizligi", label: "Yat ve tekne temizliği" }],
      },
      {
        heading: "Marina İşletmeleri İçin",
        bullets: [
          "Marina ofisleri ve karşılama alanları",
          "Duş, tuvalet ve soyunma blokları",
          "Sosyal tesis, kafe ve dinlenme alanları",
          "İç cam ve temas yüzeyleri",
        ],
        links: [{ href: "/hizmetler/gunluk-periyodik-temizlik", label: "Günlük ve periyodik temizlik" }],
      },
      {
        heading: "Sezona Göre Planlama",
        paragraphs: [
          "Denizcilikte temizlik ihtiyacı sezona göre değişir. Sezon başında teknelerin kullanıma hazırlanması ve marinanın yoğunlaşan ortak alanları öne çıkarken sezon sonunda kışlama öncesi temizlik planlanır. Marina ortak alanlarında hizmet sıklığı sezon içinde artırılabilir.",
        ],
        cta: true,
      },
      {
        heading: "Hassas Yüzey ve Çevre Kuralları",
        paragraphs: [
          "Tik, gelcoat, paslanmaz çelik ve deri yüzeylerde aşındırmayan ürün ve yöntem seçilir. Denize karışabilecek ürün ve atık kullanımında marinanın kuralları esas alınır.",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Karina temizliği, zehirli boya, motor, elektrik ve teknik bakım işleri ile iskele ve rıhtım altyapı bakımı bu hizmetin kapsamında değildir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Marina ortak alanlarının temizliğini de yapıyor musunuz?",
        answer:
          "Evet. Marina ofisleri, duş ve tuvalet blokları, sosyal tesis ve dinlenme alanları için düzenli temizlik planlanabilir.",
      },
      {
        question: "Sezon boyunca düzenli yat temizliği yapılabilir mi?",
        answer: "Evet. Sezon boyunca belirlenen aralıklarla iç yaşam alanları ve güverte temizliği planlanabilir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "Yat için teknenin boyu, kamara ve banyo sayısı ile marinanın adı; marina alanları için hizmet verilecek bölümler ve istenen sıklık ile başlayabiliriz.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/yat-tekne-temizliginde-hassas-yuzeyler",
        label: "Yat ve tekne temizliğinde hassas yüzeylerin korunması",
        description: "Tik, paslanmaz ve deri yüzeylerde yöntem seçimi üzerine rehber.",
      },
    ],
    quoteService: "yat-tekne",
    updatedAt: "2026-09-28",
  },
  "avm-magazalar": {
    seoTitle: "AVM ve Perakende Sektörü Temizliği",
    metaDescription:
      "İstanbul'da AVM içi mağazalar, mağaza zincirleri ve showroomlar için vitrin, satış alanı, kabin ve zemin temizliği. AVM çalışma kurallarına uygun planlama.",
    h1: "AVM Mağazaları ve Perakende Zincirleri İçin Temizlik",
    serviceName: "AVM ve Perakende Temizlik Hizmetleri",
    intro: [
      "Perakendede mağazanın temizliği doğrudan müşteri deneyimini etkiler. AVM içindeki mağazalarda ise temizlik, AVM yönetiminin çalışma saatleri ve giriş kurallarıyla uyumlu yürütülmelidir. Quick Smart Clean, İstanbul'daki AVM mağazaları, cadde mağazaları, mağaza zincirleri ve showroomlar için temizlik hizmeti sunar.",
      "Mağaza zincirlerinde her şubenin aynı görünümde olması beklenir; görev listesi ve kontrol adımları bu nedenle mağazalar arasında ortak tutulur.",
    ],
    sections: [
      {
        heading: "AVM İçindeki Mağazalarda Çalışma",
        paragraphs: [
          "AVM'lerde mağaza içi temizlik genellikle açılıştan önce veya kapanıştan sonra yapılır. Personel giriş kuralları, malzeme girişi ve çalışma saatleri AVM yönetiminin belirlediği çerçevede planlanır.",
        ],
      },
      {
        heading: "Temizlik Kapsamı",
        bullets: [
          "Satış alanı zemini ve giriş bölümü",
          "Vitrin iç camı, cam kapılar ve aynalar",
          "Raf, teşhir ve stand yüzeyleri",
          "Deneme kabinleri",
          "Kasa bölümü ve temas yüzeyleri",
          "Depo, personel alanı ve tuvaletler",
        ],
        links: [{ href: "/hizmetler/dukkan-magaza-temizligi", label: "Dükkan ve mağaza temizliği" }],
      },
      {
        heading: "Mağaza Zincirleri İçin Ortak Standart",
        paragraphs: [
          "Farklı AVM ve ilçelerde mağazası bulunan markalar için ortak görev listesi, kontrol adımları ve tek iletişim noktası kullanılır. Yeni mağaza açılışlarında açılış öncesi temizlik aynı plan içinde ele alınabilir.",
        ],
        links: [{ href: "/hizmetler/operasyon-personel-yonetimi", label: "Temizlik operasyonu ve personel yönetimi" }],
        cta: true,
      },
      {
        heading: "Açılış ve Dekorasyon Sonrası",
        paragraphs: [
          "Mağaza dekorasyonu veya yenileme sonrasında ince toz, etiket ve montaj kalıntıları standart temizlikten farklı bir yöntem gerektirir. Bu işler inşaat ve tadilat sonrası temizlik kapsamında planlanır.",
        ],
        links: [{ href: "/hizmetler/insaat-tadilat-sonrasi-temizlik", label: "İnşaat ve tadilat sonrası temizlik" }],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Mağazanın satış alanı ve depo büyüklüğü",
          "Mağaza sayısı ve konumları",
          "AVM çalışma saatlerine bağlı uygulama zamanı",
          "Hizmet sıklığı",
        ],
      },
    ],
    faqs: [
      {
        question: "AVM kapanış saatinden sonra çalışabiliyor musunuz?",
        answer:
          "Evet. Çalışma, AVM yönetiminin belirlediği giriş kuralları ve saatler çerçevesinde açılış öncesi veya kapanış sonrasında planlanabilir.",
      },
      {
        question: "AVM ortak alanlarını da temizliyor musunuz?",
        answer:
          "Bu sayfadaki hizmet mağaza içi alanlara odaklanır. AVM ortak alanları için talebinizi teklif aşamasında belirtebilirsiniz.",
      },
      {
        question: "Yeni mağaza açılışı öncesinde temizlik yapılıyor mu?",
        answer: "Evet. Dekorasyon sonrası ve açılış öncesi temizlik planlanabilir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer: "Mağaza sayısı ve konumları, yaklaşık alan, uygun çalışma saatleri ve istenen sıklık ile başlayabiliriz.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/cok-subeli-isletmelerde-temizlik-operasyonu",
        label: "Çok şubeli işletmelerde temizlik operasyonu nasıl yönetilir?",
        description: "Standart görev listeleri, vardiya ve raporlama üzerine rehber.",
      },
    ],
    quoteService: "dukkan-magaza",
    updatedAt: "2026-09-28",
  },
  "villa-rezidans": {
    seoTitle: "Villa, Site ve Rezidanslar İçin Temizlik",
    metaDescription:
      "İstanbul'da villa sahipleri, site ve rezidans yönetimleri için daire, villa ve ortak alan temizliği. Güvenlik kurallarına uygun planlama ile teklif alın.",
    h1: "Villa, Site ve Rezidanslar İçin Temizlik Çözümleri",
    serviceName: "Villa, Site ve Rezidans Temizlik Çözümleri",
    intro: [
      "Seçkin yaşam alanlarında temizlik ihtiyacı farklı taraflardan gelir: villa ve daire sahipleri kendi yaşam alanlarının detaylı temizliğini isterken site ve rezidans yönetimleri lobi, koridor ve sosyal tesis gibi ortak alanların düzenli bakımına ihtiyaç duyar. Quick Smart Clean, İstanbul'daki villa, site ve rezidanslar için her iki ihtiyaca yönelik temizlik hizmeti sunar.",
      "Sitelerde kartlı geçiş, asansör kullanımı ve güvenlik kuralları standarttır. Çalışma, yönetimin belirlediği kurallara göre planlanır.",
    ],
    sections: [
      {
        heading: "Villa ve Daire Sahipleri İçin",
        bullets: [
          "Detaylı ev temizliği",
          "Taşınma öncesi ve sonrası temizlik",
          "Tadilat sonrası temizlik",
          "Banyo, ıslak alan ve havuz çevresi temizliği",
        ],
        links: [
          { href: "/hizmetler/villa-rezidans-temizligi", label: "Villa ve rezidans temizliği" },
          { href: "/hizmetler/ev-temizligi", label: "Ev temizliği" },
        ],
      },
      {
        heading: "Site ve Rezidans Yönetimleri İçin",
        bullets: [
          "Lobi, giriş ve karşılama alanları",
          "Koridor, merdiven ve asansörler",
          "Sosyal tesis, spor salonu ve toplantı alanları",
          "Havuz çevresi ve açık yaşam alanları",
          "Yönetim ofisi ve ortak tuvaletler",
        ],
        links: [{ href: "/hizmetler/havuz-cevre-alan-temizligi", label: "Havuz çevresi ve açık alan temizliği" }],
      },
      {
        heading: "Mahremiyet ve Erişim Kuralları",
        paragraphs: [
          "Özel yaşam alanlarında dokunulmayacak alanlar ve eşyalar önceden belirlenir. Anahtar veya giriş kartı teslimi ve iadesi, site yönetiminin kurallarına göre planlanır.",
          "Ortak alanlarda çalışma saatleri, sakinlerin yoğun olduğu zamanlar dikkate alınarak yönetimle birlikte belirlenir.",
        ],
        cta: true,
      },
      {
        heading: "Hassas Yüzeyler",
        paragraphs: [
          "Mermer, doğal taş, parke ve lake yüzeylerde asitli ürün ve aşındırıcı aparat kullanılmaz; ürün ve yöntem yüzeye göre seçilir. Uygun seramik ve derz yüzeylerinde buhar destekli temizlik tercih edilebilir.",
        ],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Villa veya dairenin büyüklüğü, oda ve banyo sayısı",
          "Ortak alanların büyüklüğü ve kat sayısı",
          "Hizmet sıklığı",
          "Yüzey türleri ve kirlilik seviyesi",
        ],
      },
    ],
    faqs: [
      {
        question: "Site ortak alanları için düzenli temizlik yapıyor musunuz?",
        answer:
          "Evet. Lobi, koridor, asansör, sosyal tesis ve açık alanlar için yönetimle birlikte belirlenen sıklıkta temizlik planlanabilir.",
      },
      {
        question: "Evde yokken temizlik yapılabilir mi?",
        answer:
          "Evet. Anahtar veya kart teslimi ve iadesi önceden kararlaştırılarak ev sahibi yokken de çalışma planlanabilir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "Villa veya daire için ilçe, büyüklük, oda ve banyo sayısı; site için ortak alanların kapsamı ve istenen sıklık ile başlayabiliriz.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/villa-rezidans-temizligi-kapsami",
        label: "Villa ve rezidans temizliğinin kapsamı",
        description: "Özel yaşam alanlarında temizlik planı ve dikkat edilmesi gerekenler.",
      },
      {
        href: "/makaleler/havuz-cevresi-acik-yasam-alanlari-temizligi",
        label: "Havuz çevresi ve açık yaşam alanları nasıl temizlenir?",
        description: "Kapsam, güvenlik ve periyot planı üzerine rehber.",
      },
    ],
    quoteService: "villa-rezidans",
    updatedAt: "2026-09-28",
  },
  "spor-salonlari-yasam": {
    seoTitle: "Spor ve Yaşam Merkezleri İçin Temizlik",
    metaDescription:
      "İstanbul'da spor salonu zincirleri, pilates ve yoga stüdyoları ile yaşam merkezleri için çalışma saatlerine uygun temizlik planı. Keşif ve teklif alın.",
    h1: "Spor Salonları, Stüdyolar ve Yaşam Merkezleri İçin Temizlik",
    serviceName: "Spor ve Yaşam Merkezleri Temizlik Hizmetleri",
    intro: [
      "Spor ve yaşam merkezlerinde temizlik; üyelerin sabah erken saatlerden gece geç saatlere kadar alanı kullandığı bir düzende, işletmeyi durdurmadan yürütülmelidir. Quick Smart Clean, İstanbul'daki spor salonu zincirleri, pilates ve yoga stüdyoları, yaşam merkezleri ve site spor alanları için temizlik hizmeti sunar.",
      "Her işletmenin üyelik saatleri, alan yapısı ve yoğunluk düzeni farklıdır; plan bu bilgilere göre hazırlanır.",
    ],
    sections: [
      {
        heading: "İşletme Türüne Göre İhtiyaç",
        bullets: [
          "Büyük spor salonları: Geniş ekipman alanları, soyunma odaları ve duşlar için vardiyalı plan.",
          "Pilates ve yoga stüdyoları: Parke veya özel zeminler, mat ve ekipman alanları için hassas yöntem.",
          "Yaşam merkezleri: Spor alanlarının yanında kafe, bekleme ve ortak alanlar.",
          "Site ve rezidans spor alanları: Yönetimin belirlediği sıklıkta düzenli temizlik.",
        ],
        links: [{ href: "/hizmetler/spor-salonu-temizligi", label: "Spor salonu temizliği" }],
      },
      {
        heading: "Zincir İşletmelerde Ortak Standart",
        paragraphs: [
          "Farklı ilçelerde şubesi bulunan spor salonu zincirlerinde her şube için ortak görev listesi ve kontrol adımları kullanılır. Böylece üyeler hangi şubeye giderse gitsin aynı standartla karşılaşır.",
        ],
        links: [{ href: "/hizmetler/operasyon-personel-yonetimi", label: "Temizlik operasyonu ve personel yönetimi" }],
      },
      {
        heading: "Üyelik Saatlerine Uygun Plan",
        paragraphs: [
          "Detaylı zemin ve ekipman uygulamaları açılış öncesi veya kapanış sonrasına; soyunma odası ve ıslak alan kontrolleri gün içindeki yoğun saatlerin arasına yerleştirilir. 24 saat açık işletmelerde çalışma, en düşük yoğunluktaki saatlerde ve alan bölünerek planlanır.",
        ],
        cta: true,
      },
      {
        heading: "Islak Alanlar",
        paragraphs: [
          "Soyunma odası, duş ve tuvaletlerde nem ve kireç birikimi hızlı oluşur. Bu alanlar ayrı görev listesiyle ele alınır; uygun seramik ve derz yüzeylerinde buhar destekli temizlik tercih edilebilir.",
        ],
        links: [{ href: "/hizmetler/banyo-islak-alan-temizligi", label: "Banyo ve ıslak alan temizliği" }],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Ekipman bakım ve onarımı, havuz suyu bakımı, sauna ve buhar odasının teknik bakımı ile havalandırma kanalı temizliği bu hizmetin kapsamında değildir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Pilates ve yoga stüdyolarına hizmet veriyor musunuz?",
        answer:
          "Evet. Stüdyolarda parke ve özel zeminlere uygun yöntemle, ders saatleri dışında temizlik planlanabilir.",
      },
      {
        question: "24 saat açık salonlarda nasıl çalışılıyor?",
        answer:
          "Çalışma, en düşük yoğunluktaki saatlerde ve alan bölümlere ayrılarak planlanır; üyelerin kullanımı tamamen durdurulmaz.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "İşletme türü, şube sayısı ve ilçeleri, yaklaşık alan, soyunma odası ve duş sayısı ile çalışma saatleri yeterlidir.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/spor-salonlarinda-temizlik-plani",
        label: "Spor salonlarında temizlik planı nasıl oluşturulur?",
        description: "Öncelikli alanlar, vardiya düzeni ve kontrol listesi üzerine rehber.",
      },
    ],
    quoteService: "diger",
    updatedAt: "2026-09-28",
  },
  "havuz-acik-yasam": {
    seoTitle: "Havuzlu Tesisler ve Açık Alanlar İçin Temizlik",
    metaDescription:
      "İstanbul'da otel, site ve villalarda havuz çevresi, teras, şezlong ve açık yaşam alanları için sezonluk veya tek seferlik temizlik planı. Teklif alın.",
    h1: "Havuzlu Tesisler ve Açık Yaşam Alanları İçin Temizlik",
    serviceName: "Havuzlu Tesis ve Açık Alan Temizlik Hizmetleri",
    intro: [
      "Havuzlu tesislerde açık alanlar, sezon boyunca yoğun kullanılır ve dış mekân koşullarına sürekli açıktır. Otel, site ve villa gibi farklı tesislerde havuz çevresi, teras ve açık oturma alanlarının düzenli temizlenmesi hem görünüm hem de kullanım güvenliği açısından önemlidir. Quick Smart Clean, İstanbul'daki havuzlu tesisler için sezona göre planlanan açık alan temizliği sunar.",
      "Hizmet havuzun çevresine ve açık alanlara odaklanır. Havuz suyu kimyasal dengesi ve teknik bakım kapsam dışıdır.",
    ],
    sections: [
      {
        heading: "Tesis Türüne Göre İhtiyaç",
        bullets: [
          "Oteller: Misafir yoğunluğuna göre sezon içi düzenli temizlik ve sezon açılış hazırlığı.",
          "Siteler ve rezidanslar: Yönetimin belirlediği sıklıkta ortak havuz çevresi ve sosyal alanlar.",
          "Villalar: Sezon öncesi hazırlık ve davet öncesi tek seferlik temizlik.",
        ],
        links: [{ href: "/hizmetler/havuz-cevre-alan-temizligi", label: "Havuz çevresi ve açık alan temizliği" }],
      },
      {
        heading: "Sezonluk Planlama",
        bullets: [
          "Sezon açılışı: Kış boyunca biriken kir, yaprak ve yosunun temizlenmesi.",
          "Sezon içi: Kullanım yoğunluğuna göre haftalık veya daha sık temizlik.",
          "Sezon kapanışı: Mobilya ve açık alanların kış öncesi temizliği.",
        ],
        cta: true,
      },
      {
        heading: "Kullanım Güvenliği",
        paragraphs: [
          "Islak ve kaygan yüzeylerde çalışma yapılan bölümler geçici olarak kullanıma kapatılır. Otel ve sitelerde uygulama saatleri misafir ve sakinlerin yoğun olmadığı zamanlara göre belirlenir. Ürünlerin havuz suyuna karışmaması için havuz kenarında dikkatli çalışılır.",
        ],
      },
      {
        heading: "Açık Alanın Yanındaki Bölümler",
        paragraphs: [
          "Havuz duşları, soyunma kabinleri ve havuz tuvaletleri açık alan planına dahil edilebilir. Villalarda iç mekân temizliği ile birlikte planlama da mümkündür.",
        ],
        links: [
          { href: "/hizmetler/banyo-islak-alan-temizligi", label: "Banyo ve ıslak alan temizliği" },
          { href: "/hizmetler/villa-rezidans-temizligi", label: "Villa ve rezidans temizliği" },
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Havuz suyu kimyasal analizi ve dengelemesi, havuz içi temizliği, filtre ve pompa bakımı, bahçe bakımı ve peyzaj işleri bu hizmetin kapsamında değildir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Otel havuz çevresi için sezon boyunca hizmet veriyor musunuz?",
        answer:
          "Evet. Sezon içinde misafir yoğunluğuna göre belirlenen sıklıkta havuz çevresi ve açık alan temizliği planlanabilir.",
      },
      {
        question: "Havuz suyu bakımı kapsamda mı?",
        answer: "Hayır. Havuz suyu kimyasal dengesi, havuz içi temizlik ve filtre-pompa bakımı kapsam dışıdır.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "Tesis türü, ilçe, havuz çevresi ve açık alanın yaklaşık büyüklüğü, yüzey türleri ve istenen sıklık ile başlayabiliriz.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/havuz-cevresi-acik-yasam-alanlari-temizligi",
        label: "Havuz çevresi ve açık yaşam alanları nasıl temizlenir?",
        description: "Kapsam, güvenlik ve periyot planı üzerine rehber.",
      },
    ],
    quoteService: "villa-rezidans",
    updatedAt: "2026-09-28",
  },
  "kurumsal-dis-cephe": {
    seoTitle: "Kurumsal Bina ve Plaza Temizliği İstanbul",
    metaDescription:
      "İstanbul'da kurumsal bina ve plaza yönetimleri için lobi, ortak alan, iç cam ve erişim koşulları uygun dış cephe temizliği. Saha keşfi ile teklif alın.",
    h1: "İstanbul Kurumsal Bina ve Plaza Temizliği",
    serviceName: "Kurumsal Bina ve Plaza Temizliği",
    intro: [
      "Kurumsal binalarda ve plazalarda temizlik; kiracı ofislerin dışında kalan lobi, asansör, koridor ve ortak alanların yanında cam ve dış cephe yüzeylerini de kapsayan bir bina yönetimi konusudur. Quick Smart Clean, İstanbul'daki kurumsal bina ve plaza yönetimleri için ortak alan temizliği ile cam ve cephe temizliğini birlikte planlar.",
      "Dış cephe çalışmalarında yöntem binanın yapısına ve erişim koşullarına bağlıdır. Her proje için saha keşfi yapılır.",
    ],
    sections: [
      {
        heading: "Bina Yönetimleri İçin Hizmet Kapsamı",
        bullets: [
          "Lobi, giriş ve resepsiyon alanları",
          "Asansör, koridor ve merdivenler",
          "Ortak tuvaletler ve ıslak alanlar",
          "Ortak toplantı ve sosyal alanlar",
          "İç cam yüzeyleri, cam bölmeler ve korkuluklar",
          "Erişim koşulları uygun dış cam ve cephe yüzeyleri",
        ],
      },
      {
        heading: "Ortak Alanlar İçin Düzenli Plan",
        paragraphs: [
          "Lobi ve ortak alanlar gün boyu kullanıldığı için düzenli bir plan gerektirir. Giriş ve asansör gibi yoğun bölümler gün içinde kontrol edilirken zemin bakımı ve detay işler kiracıların çalışma saatleri dışında planlanır.",
        ],
        links: [
          { href: "/hizmetler/gunluk-periyodik-temizlik", label: "Günlük ve periyodik temizlik" },
          { href: "/hizmetler/kurumsal-tesis-temizligi", label: "Ofis ve kurumsal tesis temizliği" },
        ],
        cta: true,
      },
      {
        heading: "Cam ve Dış Cephe Planı",
        paragraphs: [
          "Cam ve cephe temizliği binanın yüksekliğine, cephe malzemesine ve erişim noktalarına göre saha keşfiyle planlanır. Uygulama takvimi hava koşullarına ve bina kullanımına göre belirlenir; periyodik cam temizliği yıllık plana bağlanabilir.",
          "Yükseklikte çalışma gerektiren işlerin uygulanabilirliği keşifte değerlendirilir ve iş güvenliği koşulları sağlanmadan uygulamaya geçilmez.",
        ],
        links: [{ href: "/hizmetler/dis-cephe-cam-temizligi", label: "Dış cephe ve cam temizliği" }],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Binanın kat sayısı ve ortak alanların büyüklüğü",
          "Cam ve cephe yüzeyinin alanı ve erişim yöntemi",
          "Hizmet sıklığı ve çalışma saatleri",
          "Zemin türleri ve dönemsel işlerin kapsamı",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Cephe onarımı, silikon ve conta yenileme, teknik bakım, güvenlik ve resepsiyon hizmetleri bu hizmetin kapsamında değildir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Plaza ortak alanları için düzenli temizlik yapıyor musunuz?",
        answer:
          "Evet. Lobi, asansör, koridor ve ortak tuvaletler için bina yönetimiyle belirlenen sıklıkta temizlik planlanabilir.",
      },
      {
        question: "Dış cephe temizliği her binada yapılabilir mi?",
        answer:
          "Uygulanabilirlik bina yüksekliğine, cephe yapısına ve erişim koşullarına bağlıdır. Saha keşfi sonrasında yazılı olarak belirtilir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "Binanın ilçesi, kat sayısı, ortak alanların kapsamı, yaklaşık cam alanı ve istenen sıklık ile başlayabiliriz.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/dis-cephe-cam-temizligi-planlama",
        label: "Dış cephe ve cam temizliği planlanırken nelere dikkat edilmeli?",
        description: "Saha keşfi, erişim yöntemi ve takvim üzerine rehber.",
      },
      {
        href: "/makaleler/kurumsal-temizlik-firmasi-secerken",
        label: "Kurumsal temizlik firması seçerken nelere dikkat edilmeli?",
        description: "Sözleşme, ekip yönetimi ve denetim kriterleri.",
      },
    ],
    quoteService: "ofis-kurumsal",
    updatedAt: "2026-09-28",
  },
};
