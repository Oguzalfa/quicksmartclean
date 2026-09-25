export type ServicePageSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ServicePageFaq = {
  question: string;
  answer: string;
};

export type ServicePageLink = {
  href: string;
  label: string;
  description: string;
};

export type ServicePageContent = {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  serviceName: string;
  intro: string[];
  sections: ServicePageSection[];
  faqs: ServicePageFaq[];
  guides: ServicePageLink[];
  quoteService: string;
  updatedAt: string;
};

const PAYMENT_FAQ: ServicePageFaq = {
  question: "Kredi kartıyla ödeme yapabilir miyim?",
  answer: "Evet, temizlik hizmetlerimiz için kredi kartıyla ödeme yapabilirsiniz.",
};

export const SECTOR_PAGES: Record<string, ServicePageContent> = {
  restoranlar: {
    seoTitle: "İstanbul Restoran ve Mutfak Temizliği",
    metaDescription:
      "İstanbul'da restoran, salon ve endüstriyel mutfaklar için buhar destekli yüzey temizliği, makineli zemin temizliği, tek seferlik ve periyodik hizmet. Keşif ve yazılı kapsamla teklif alın.",
    h1: "İstanbul Restoran ve Endüstriyel Mutfak Temizliği",
    serviceName: "Restoran ve Endüstriyel Mutfak Temizliği",
    intro: [
      "Restoran temizliği, servis akışını durdurmadan mutfağın, salonun ve zeminin aynı standartta tutulmasını gerektirir. Quick Smart Clean; İstanbul'daki restoran, lokanta, otel mutfağı ve merkezi üretim mutfakları için alanın kullanımına, yüzey türlerine ve çalışma saatlerine göre planlanan temizlik hizmeti sunar.",
      "Hizmeti keşif ve yazılı kapsamla başlatırız. Hangi bölümün, hangi yöntemle ve hangi sıklıkla temizleneceği teklif aşamasında netleşir; böylece uygulama sonrasında neyin teslim edildiği açıkça kontrol edilebilir.",
    ],
    sections: [
      {
        heading: "Kimler İçin Uygun?",
        bullets: [
          "Akşam kapanışından sonra mutfağını ve salonunu hazırlatmak isteyen restoranlar",
          "Yoğun üretim yapan endüstriyel ve merkezi mutfaklar",
          "Otel, kafe ve yemek zinciri mutfakları",
          "Açılış, sezon başı veya tadilat sonrası mutfağını kullanıma hazırlayan işletmeler",
          "Birden fazla şubede aynı temizlik standardını uygulamak isteyen markalar",
        ],
      },
      {
        heading: "Hizmet Kapsamı",
        paragraphs: [
          "Kapsam her işletmede keşif sonrası yazılı olarak belirlenir. Tipik bir restoran çalışmasında şu bölümler ele alınır:",
        ],
        bullets: [
          "Mutfak: tezgâh, raf, paslanmaz yüzeyler, ekipman dış yüzeyleri ve ekipman çevresindeki yağ ve kir birikimi",
          "Ekipman çevresi: ocak, fırın ve tezgâh altı gibi erişilebilir arka ve yan bölümler",
          "Zemin ve derz: mutfak ve bulaşıkhane zemininde yağlı kir ile derz aralarında biriken kalıntılar",
          "Salon: masa, sandalye, bar ve servis alanları, cam ve temas yüzeyleri",
          "Islak alanlar: lavabo, tuvalet ve personel alanları",
        ],
      },
      {
        heading: "Uygun Yüzeylerde Buhar Destekli Temizlik",
        paragraphs: [
          "Yüksek sıcaklıkta buhar; paslanmaz çelik, seramik ve uygun zemin yüzeylerinde yağlı kiri yumuşatarak mekanik temizliği kolaylaştırır. Bu sayede bazı bölümlerde daha az kimyasal ürünle çalışmak mümkün olabilir.",
          "Buhar her yüzeye uygun değildir. Elektrikli ekipman bağlantıları, bazı kaplamalar, ahşap ve ısıya hassas malzemelerde farklı yöntem seçilir. Buharlı temizlik bir dezenfeksiyon uygulaması olarak sunulmaz; dezenfeksiyon ihtiyacı varsa işletmenin kendi gıda güvenliği prosedürüne göre ayrıca planlanır.",
        ],
      },
      {
        heading: "Profesyonel Makinelerle Zemin Temizliği",
        paragraphs: [
          "Mutfak zeminlerinde biriken yağ, yalnızca paspasla silindiğinde yüzeyde kayganlık ve koku bırakabilir. Zemin türüne uygun ürün, yeterli bekleme süresi ve profesyonel zemin makineleriyle fırçalama ve su alma adımları birlikte uygulanır. Derz aralarındaki kararmalar için yüzeye uygun fırça ve yöntem seçilir.",
        ],
      },
      {
        heading: "Tek Seferlik veya Periyodik Hizmet",
        bullets: [
          "Tek seferlik detay temizlik: Açılış öncesi, sezon başlangıcı, denetim hazırlığı veya uzun süre ertelenmiş derin temizlik ihtiyacı için.",
          "Periyodik hizmet: Haftalık, aylık veya işletmenin belirleyeceği aralıklarla; günlük mutfak rutininin ulaşamadığı zemin, derz ve ekipman çevresi gibi bölümler için.",
          "Çalışma saati: Servisi aksatmamak için uygulamalar genellikle kapanış sonrası, gece veya işletmenin kapalı olduğu günlerde planlanır.",
        ],
      },
      {
        heading: "Keşiften Teslime Çalışma Süreci",
        bullets: [
          "Keşif: Mutfak, salon ve zemin incelenir; yüzey türleri ve kirlilik seviyesi belirlenir.",
          "Kapsam: Yapılacak işler, kapsam dışı kalanlar, ekip ve süre yazılı olarak paylaşılır.",
          "Uygulama: Ekip, işletmenin belirlediği saat aralığında ve mutfak sorumlusuyla koordineli çalışır.",
          "Teslim kontrolü: Tamamlanan bölümler kapsam listesi üzerinden birlikte kontrol edilir.",
        ],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        paragraphs: [
          "Restoran ve mutfak temizliği için sabit bir liste fiyatı vermiyoruz; teklif keşif sonrası hazırlanır. Fiyatı etkileyen başlıca unsurlar:",
        ],
        bullets: [
          "Mutfak ve salonun toplam alanı, ekipman yoğunluğu",
          "Yağ ve kir birikiminin seviyesi, son detaylı temizliğin üzerinden geçen süre",
          "Ekipman arkasına ve yüksek noktalara erişim koşulları",
          "Çalışma saati: gece, kapanış sonrası veya hafta sonu uygulaması",
          "Tek seferlik mi, periyodik mi çalışılacağı",
        ],
      },
      {
        heading: "Kapsam Dışı Hizmetler",
        paragraphs: [
          "Davlumbaz kanalı ve baca temizliği, ekipman sökümü ve teknik bakım, haşere kontrolü gibi uzmanlık gerektiren işler bu hizmetin kapsamında değildir. Davlumbazların erişilebilir dış yüzeyleri ve filtre çevresi, keşifte kapsam dahilinde olup olmayacağı ayrıca belirtilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Temizlik sırasında restoranı kapatmamız gerekir mi?",
        answer:
          "Genellikle hayır. Detaylı mutfak ve zemin uygulamaları kapanış sonrası, gece veya işletmenin kapalı olduğu gün planlanır. Kapsam ve süre keşifte netleşir.",
      },
      {
        question: "Buharlı temizlik dezenfeksiyon yerine geçer mi?",
        answer:
          "Hayır. Buhar, uygun yüzeylerde yağlı kiri yumuşatarak temizliği kolaylaştıran bir yöntemdir. Dezenfeksiyon ihtiyacı işletmenin gıda güvenliği prosedürüne göre ayrıca planlanır.",
      },
      {
        question: "Davlumbaz ve baca kanalı temizliği yapıyor musunuz?",
        answer:
          "Kanal ve baca temizliği bu hizmetin kapsamında değildir. Davlumbazın erişilebilir dış yüzeylerinin kapsama alınıp alınmayacağı keşifte yazılı olarak belirtilir.",
      },
      {
        question: "Teklif almak için hangi bilgiler gerekli?",
        answer:
          "İlçe, yaklaşık mutfak ve salon alanı, istenen hizmet sıklığı ve uygun çalışma saatleri ile başlayabiliriz. Kesin teklif keşif sonrası hazırlanır.",
      },
      PAYMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/restoran-endustriyel-mutfak-temizligi",
        label: "Restoran ve endüstriyel mutfak temizliği nasıl planlanır?",
        description:
          "Mutfak bölgelerine göre görev dağılımı, vardiya uyumu ve kayıt tutma üzerine bilgilendirici rehber.",
      },
      {
        href: "/makaleler/istanbul-temizlik-sirketi-fiyatlari",
        label: "İstanbul temizlik şirketi fiyatları nasıl belirlenir?",
        description:
          "Teklifleri karşılaştırırken kapsamı eşitlemek için kontrol listesi.",
      },
    ],
    quoteService: "restoran-mutfak",
    updatedAt: "2026-09-25",
  },
};

export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  "kurumsal-tesis-temizligi": {
    seoTitle: "İstanbul Ofis ve Kurumsal Tesis Temizliği",
    metaDescription:
      "İstanbul'da ofis ve kurumsal tesisler için günlük veya periyodik temizlik, makineli zemin temizliği ve yüzeye uygun uygulama. Keşif, yazılı kapsam ve teslim kontrolüyle teklif alın.",
    h1: "İstanbul Ofis ve Kurumsal Tesis Temizliği",
    serviceName: "Ofis ve Kurumsal Tesis Temizliği",
    intro: [
      "Kurumsal tesis temizliği; ofislerin, genel merkezlerin, mağazaların ve ortak kullanım alanlarının çalışma düzenini bozmadan düzenli tutulmasını kapsar. Quick Smart Clean, her tesisin kullanım yoğunluğunu ve çalışma saatlerini dikkate alarak alan bazlı bir temizlik planı oluşturur.",
      "Plan keşifle başlar; hangi alanın ne sıklıkla ve hangi yöntemle temizleneceği yazılı olarak paylaşılır.",
    ],
    sections: [
      {
        heading: "Ofis ve Tesis Kapsamı",
        bullets: [
          "Çalışma alanları, masa ve temas yüzeyleri",
          "Toplantı odaları, resepsiyon ve bekleme alanları",
          "Mutfak, çay ocağı ve yemekhane bölümleri",
          "Tuvalet, lavabo ve ıslak alanlar",
          "Koridor, merdiven, asansör ve ortak kullanım alanları",
          "İç cam ve cam bölmeler",
        ],
      },
      {
        heading: "Periyodik Çalışma Seçenekleri",
        bullets: [
          "Günlük temizlik: Yoğun kullanılan ofisler ve ziyaretçi alan tesisler için mesai öncesi, sırası veya sonrası.",
          "Haftanın belirli günleri: Kullanım yoğunluğu daha düşük ofisler için.",
          "Periyodik detay çalışmaları: Günlük rutinin dışında kalan zemin bakımı, cam bölmeler ve yüksek yüzeyler için aylık veya dönemsel program.",
          "Çok lokasyonlu yapılar: Farklı şubelerde aynı kontrol listesiyle yürütülen merkezi plan.",
        ],
      },
      {
        heading: "Yüzeye Uygun Uygulama ve Zemin Temizliği",
        paragraphs: [
          "Halı, laminat, vinil, seramik, mermer ve epoksi gibi zeminler aynı ürün ve yöntemle temizlenmez. Zemin türüne göre ürün seçilir; geniş alanlarda profesyonel zemin makineleriyle fırçalama ve su alma yapılır. Uygun seramik ve derz yüzeylerinde buhar destekli temizlik tercih edilebilir; ahşap ve ısıya hassas yüzeylerde farklı yöntem uygulanır.",
        ],
      },
      {
        heading: "Teslim ve Kontrol Süreci",
        bullets: [
          "Alan bazlı kontrol listesi ile yapılan işlerin takibi",
          "Sorumlu kişiyle düzenli iletişim ve geri bildirim",
          "Eksik görülen noktaların kayıt altına alınarak tamamlanması",
        ],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Toplam alan, kat sayısı ve ortak alanların büyüklüğü",
          "Çalışan ve ziyaretçi yoğunluğu",
          "Hizmet sıklığı ve çalışma saatleri",
          "Zemin türleri ve periyodik detay çalışmalarının kapsamı",
        ],
      },
    ],
    faqs: [
      {
        question: "Temizlik mesai saatleri dışında yapılabilir mi?",
        answer:
          "Evet. Mesai öncesi, sonrası veya hafta sonu çalışma, tesisin ihtiyacına göre planlanabilir. Çalışma saatleri teklif aşamasında netleşir.",
      },
      {
        question: "Malzeme ve ekipman kim tarafından sağlanıyor?",
        answer:
          "Bu konu hizmet kapsamına göre belirlenir ve teklifte ayrıca yazılır. Profesyonel zemin makineleri ve ekipmanlar ekibimiz tarafından getirilir.",
      },
      {
        question: "Tek seferlik ofis temizliği de yapıyor musunuz?",
        answer:
          "Evet. Taşınma, açılış veya uzun süre ertelenmiş detaylı temizlik için tek seferlik hizmet planlanabilir.",
      },
      PAYMENT_FAQ,
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
    updatedAt: "2026-09-25",
  },
  "insaat-tadilat-sonrasi-temizlik": {
    seoTitle: "İstanbul İnşaat ve Tadilat Sonrası Temizlik",
    metaDescription:
      "İstanbul'da inşaat ve tadilat sonrası ince toz, boya, harç ve etiket kalıntıları için yüzeye uygun temizlik. Kapsam, kapsam dışı işler ve teklif koşulları.",
    h1: "İstanbul İnşaat ve Tadilat Sonrası Temizlik",
    serviceName: "İnşaat ve Tadilat Sonrası Temizlik",
    intro: [
      "İnşaat ve tadilat sonrası temizlik; yeni tamamlanan veya yenilenen ofis, mağaza, villa ve konutları kullanıma hazırlamak için yapılan detaylı bir uygulamadır. İnce inşaat tozu her yüzeye yerleşir ve standart temizlikle tek seferde alınmaz; bu nedenle iş, yüzeylere göre sıralanmış adımlarla planlanır.",
    ],
    sections: [
      {
        heading: "Kalıntılara Göre Yüzeye Uygun Yöntem",
        bullets: [
          "İnce toz: Yüksek yüzeylerden başlayarak kuru toz alma, ardından nemli silme ve zemin temizliği.",
          "Boya ve harç sıçramaları: Cam, seramik ve metal yüzeylerde yüzeyi çizmeyen aparat ve uygun ürünle.",
          "Etiket ve bant izleri: Cam, doğrama ve vitrifiye üzerinde kalıntı bırakmayan yöntemle.",
          "Zemin ve derz: Zemin türüne uygun ürün ve profesyonel makinelerle; uygun seramik ve derzlerde buhar destekli temizlik.",
        ],
        paragraphs: [
          "Yeni yüzeyler hassastır. Mermer, doğal taş, ahşap ve lake yüzeylerde asitli ürün ve aşındırıcı aparat kullanılmaz; yöntem yüzeye göre seçilir.",
        ],
      },
      {
        heading: "Hizmet Kapsamı",
        bullets: [
          "Cam, doğrama ve pervazların iç ve erişilebilir dış yüzeyleri",
          "Dolap içleri ve dışları, kapılar, prizler ve anahtarlar",
          "Banyo ve mutfak vitrifiyeleri, armatürler ve fayanslar",
          "Zemin ve süpürgelikler",
          "Radyatör, menfez ve aydınlatma armatürlerinin erişilebilir yüzeyleri",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        bullets: [
          "Moloz ve inşaat atığının taşınması veya bertarafı",
          "Tehlikeli atık bertarafı",
          "Boya rötuşu, tamirat ve teknik inşaat işleri",
          "Yüksek erişim gerektiren dış cephe çalışmaları (ayrı keşifle değerlendirilir)",
        ],
      },
      {
        heading: "Teklif Koşulları",
        paragraphs: [
          "Temizliğin kalıcı sonuç vermesi için kaba işlerin tamamlanmış olması gerekir. Teklif öncesinde şu bilgileri netleştiririz:",
        ],
        bullets: [
          "Alanın yaklaşık büyüklüğü ve oda/bölüm sayısı",
          "Kaba işlerin bitip bitmediği, başka ekiplerin çalışmaya devam edip etmediği",
          "Elektrik ve suyun kullanılabilir olup olmadığı",
          "Teslim tarihi ve çalışılabilecek saatler",
        ],
      },
    ],
    faqs: [
      {
        question: "İnşaat sonrası temizlik ne zaman yapılmalı?",
        answer:
          "Kaba işler ve boya tamamlandıktan, diğer ekipler alandan çekildikten sonra. Aktif şantiyede temizlenen yüzeyler kısa sürede yeniden kirlenir.",
      },
      {
        question: "Moloz taşıma hizmete dahil mi?",
        answer:
          "Hayır. Moloz ve inşaat atığının taşınması ile bertarafı kapsam dışıdır; alanın bu atıklardan arındırılmış olması gerekir.",
      },
      {
        question: "Keşif yapmadan fiyat verebilir misiniz?",
        answer:
          "Küçük ve kapsamı net işlerde fotoğraf ve video ile ön değerlendirme yapılabilir. Büyük alanlarda kesin teklif keşif sonrası hazırlanır.",
      },
      PAYMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/insaat-sonrasi-temizlik-asamalari",
        label: "İnşaat sonrası temizlik aşamaları",
        description: "Kaba temizlikten teslim kontrolüne adım adım süreç rehberi.",
      },
      {
        href: "/makaleler/istanbul-temizlik-sirketi-fiyatlari",
        label: "İstanbul temizlik şirketi fiyatları nasıl belirlenir?",
        description: "Teklifte bulunması gereken bilgiler ve karşılaştırma kriterleri.",
      },
    ],
    quoteService: "insaat-sonrasi",
    updatedAt: "2026-09-25",
  },
};
