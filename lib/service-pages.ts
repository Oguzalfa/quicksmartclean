export type ServicePageSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: { href: string; label: string }[];
  cta?: boolean;
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
  areaHeading?: string;
  intro: string[];
  sections: ServicePageSection[];
  faqs: ServicePageFaq[];
  guides: ServicePageLink[];
  quoteService: string;
  updatedAt: string;
};

const PAYMENT_FAQ: ServicePageFaq = {
  question: "Kredi kartıyla ödeme yapabilir miyim?",
  answer: "Evet. Quick Smart Clean hizmetlerinde kredi kartıyla ödeme yapabilirsiniz.",
};

const INSTALLMENT_FAQ: ServicePageFaq = {
  question: "Kredi kartına taksit yapılabiliyor mu?",
  answer:
    "Kredi kartına taksit imkânı bulunmaktadır. Güncel taksit seçenekleri için bizimle iletişime geçebilirsiniz.",
};

export const SECTOR_PAGES: Record<string, ServicePageContent> = {
  restoranlar: {
    seoTitle: "Restoran ve Mutfak Temizliği İstanbul",
    metaDescription:
      "İstanbul’da restoran ve endüstriyel mutfak temizliği. Buhar destekli detaylı temizlik, makineli zemin temizliği ve periyodik hizmet için teklif alın.",
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
      INSTALLMENT_FAQ,
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
  "otel-konaklama": {
    seoTitle: "Otel Temizliği İstanbul",
    metaDescription:
      "İstanbul'da otel ve konaklama tesisleri için oda, banyo, lobi ve ortak alan temizliği. Periyodik veya sezon öncesi detaylı temizlik için keşif ve teklif alın.",
    h1: "İstanbul Otel ve Konaklama Tesisi Temizliği",
    serviceName: "Otel ve Konaklama Temizliği",
    intro: [
      "Otel temizliği; misafir odalarının, banyoların, lobinin ve ortak alanların misafir akışını bozmadan aynı standartta tutulmasını gerektirir. Quick Smart Clean, İstanbul'daki otel ve konaklama tesisleri için tesisin doluluk düzenine, oda sayısına ve çalışma saatlerine göre planlanan temizlik hizmeti sunar.",
      "Çalışma keşifle başlar. Hangi alanların, hangi sıklıkla ve hangi kontrol listesiyle temizleneceği teklif aşamasında yazılı olarak netleşir.",
    ],
    sections: [
      {
        heading: "Kimler İçin Uygun?",
        bullets: [
          "Şehir otelleri, butik oteller ve apart oteller",
          "Sezon öncesi veya sonrası detaylı temizlik planlayan konaklama tesisleri",
          "Tadilat veya yenileme sonrası odalarını kullanıma hazırlayan oteller",
          "Kat hizmetleri ekibine dönemsel detay temizliği desteği isteyen tesisler",
        ],
      },
      {
        heading: "Hizmet Kapsamı",
        paragraphs: [
          "Kapsam her tesiste keşif sonrası yazılı olarak belirlenir. Tipik bir otel çalışmasında ele alınan bölümler:",
        ],
        bullets: [
          "Misafir odaları: yüzeyler, mobilya dışları, cam iç yüzeyleri ve zemin",
          "Banyolar: fayans, derz, vitrifiye, armatür ve duş alanları",
          "Lobi, resepsiyon, koridor ve asansör gibi ortak alanlar",
          "Kahvaltı salonu ve restoran bölümleri",
          "Personel alanları, ofisler ve servis koridorları",
        ],
      },
      {
        heading: "Periyodik veya Dönemsel Detay Temizlik",
        bullets: [
          "Periyodik hizmet: Ortak alanlar ve günlük rutinin ulaşmadığı bölümler için belirlenen aralıklarla.",
          "Dönemsel detay temizlik: Sezon öncesi, sezon sonrası veya düşük doluluk dönemlerinde oda ve banyoların derinlemesine temizliği.",
          "Çalışma düzeni: Uygulamalar misafir akışını aksatmayacak şekilde, boş odalar ve tesisin belirlediği saat aralıklarında planlanır.",
        ],
      },
      {
        heading: "Yüzeye Uygun Yöntem ve Ekipman",
        paragraphs: [
          "Halı, mermer, seramik ve ahşap gibi farklı zeminler aynı ürünle temizlenmez; ürün ve yöntem yüzeye göre seçilir. Geniş ortak alanlarda profesyonel zemin makineleri kullanılır. Uygun seramik ve derz yüzeylerinde buhar destekli temizlik tercih edilebilir.",
        ],
      },
      {
        heading: "Kontrol Listesi ve Teslim",
        bullets: [
          "Oda ve alan bazlı kontrol listesi ile yapılan işlerin takibi",
          "Tesis sorumlusuyla birlikte teslim kontrolü",
          "Eksik görülen noktaların kayıt altına alınarak tamamlanması",
        ],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Oda sayısı ve ortak alanların büyüklüğü",
          "Hizmetin periyodik mi, dönemsel mi olacağı",
          "Zemin türleri ve banyo sayısı",
          "Çalışma saatleri ve tesisin doluluk durumu",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Çamaşır ve tekstil yıkama, teknik bakım, havalandırma kanalı temizliği ve haşere kontrolü bu hizmetin kapsamında değildir. Bu tür ihtiyaçlarınız varsa teklif aşamasında belirtin.",
        ],
      },
    ],
    faqs: [
      {
        question: "Otel doluyken temizlik yapılabilir mi?",
        answer:
          "Evet. Ortak alanlar ve boş odalar, misafir akışını aksatmayacak saatlerde planlanır. Çalışma düzeni keşif sırasında tesisle birlikte belirlenir.",
      },
      {
        question: "Sezon öncesi detaylı temizlik yapıyor musunuz?",
        answer:
          "Evet. Sezon öncesi veya sonrası oda, banyo ve ortak alanların derinlemesine temizliği tek seferlik olarak planlanabilir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "İlçe, oda sayısı, ortak alanların yaklaşık büyüklüğü, istenen hizmet sıklığı ve uygun çalışma saatleri ile başlayabiliriz. Kesin teklif keşif sonrası hazırlanır.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/otel-temizliginde-kalite-standardi",
        label: "Otel temizliğinde kalite standardı nasıl korunur?",
        description: "Oda devri, ortak alanlar ve kontrol adımları üzerine rehber.",
      },
      {
        href: "/makaleler/banyo-islak-alan-temizliginde-dikkat-edilmesi-gerekenler",
        label: "Banyo ve ıslak alan temizliğinde dikkat edilmesi gerekenler",
        description: "Fayans, derz ve armatürlerde yüzeye uygun yöntem seçimi.",
      },
    ],
    quoteService: "otel",
    updatedAt: "2026-09-28",
  },
};

export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  "ev-temizligi": {
    seoTitle: "Ev Temizliği İstanbul",
    metaDescription:
      "İstanbul genelinde profesyonel ev temizliği: detaylı temizlik, taşınma öncesi ve sonrası ile tadilat sonrası seçenekler. Kredi kartı ve taksit imkânı.",
    h1: "İstanbul Profesyonel Ev Temizliği",
    serviceName: "Ev Temizliği",
    areaHeading: "İstanbul Genelinde Ev Temizliği",
    intro: [
      "Quick Smart Clean, İstanbul'un Anadolu ve Avrupa Yakası genelinde profesyonel ev temizliği hizmeti sunar. Daire, müstakil ev, villa ve rezidanslarda; yaşam alanları, mutfak, banyo ve zeminler profesyonel ekibimiz ve ekipmanımızla, yüzey türüne uygun yöntemle temizlenir.",
      "Detaylı ev temizliği, taşınma öncesi ve sonrası temizlik ya da tadilat sonrası temizlik ihtiyacınıza göre kapsam teklif aşamasında sizinle birlikte belirlenir.",
    ],
    sections: [
      {
        heading: "Profesyonel Ev Temizliği",
        paragraphs: [
          "Profesyonel ev temizliği; evin günlük düzeninde atlanan bölümlerini de kapsayan, planlı ve kontrol listesine bağlı bir uygulamadır. Temizlenecek ve dokunulmayacak alanlar önceden netleştirilir; ekip, belirlenen tarih ve saat aralığında çalışır.",
          "Mermer, doğal taş, ahşap ve lake gibi hassas yüzeylerde asitli ürün ve aşındırıcı aparat kullanılmaz; ürün ve yöntem yüzeye göre seçilir. Geniş yaşam alanlarına sahip evler için villa ve rezidans temizliği sayfamızı da inceleyebilirsiniz.",
        ],
        links: [{ href: "/hizmetler/villa-rezidans-temizligi", label: "Villa ve rezidans temizliği" }],
      },
      {
        heading: "Ev Temizliği Neleri Kapsar?",
        paragraphs: [
          "Kapsam her evde teklif aşamasında yazılı olarak belirlenir. Tipik bir ev temizliğinde ele alınan bölümler:",
        ],
        bullets: [
          "Salon, yatak odaları ve çalışma odası gibi yaşam alanları",
          "Mutfak tezgâhı, dolap dışları ve ev aletlerinin dış yüzeyleri",
          "Banyo ve tuvaletlerde fayans, derz, vitrifiye ve armatürler",
          "Kapı, pervaz, süpürgelik, priz ve anahtarlar",
          "Erişilebilir yüzeylerde ve yüksek noktalarda toz alma",
          "İç cam yüzeyleri ve doğramalar",
          "Zemin türüne uygun yöntemle zemin temizliği; uygun zeminlerde profesyonel makine desteği",
          "Uygun seramik ve derz yüzeylerinde buharlı temizlik",
        ],
      },
      {
        heading: "Detaylı Ev Temizliği",
        paragraphs: [
          "Standart ev temizliği görünen yüzeylerin düzenini korur. Detaylı ev temizliği ise yüksek yüzeyler, köşeler, kapı ve pervazlar, derz araları ve dolap dışları gibi günlük temizlikte atlanan bölümleri de kapsar.",
          "Uzun süre ertelenmiş temizliklerde, sezon başlangıcında veya evin uzun süre kullanılmadığı durumlarda tercih edilir.",
        ],
        links: [{ href: "/hizmetler/detayli-temizlik", label: "Detaylı temizlik hizmetini inceleyin" }],
      },
      {
        heading: "Taşınma Öncesi ve Sonrası Ev Temizliği",
        paragraphs: [
          "Boş bir evde zeminlere, köşelere ve erişilebilir yüzeylere engelsiz ulaşılabildiği için taşınma öncesi temizlik yeni ev için kapsamlı bir başlangıç sağlar. Evi boşaltıp teslim etmeden önce de aynı şekilde planlanabilir.",
          "Taşınma sonrası temizlikte eşyalı alanlarda erişilebilir yüzeyler ele alınır; eşya taşıma veya mobilya sökümü gerekip gerekmediği teklif aşamasında netleşir.",
        ],
        cta: true,
      },
      {
        heading: "İnşaat ve Tadilat Sonrası Ev Temizliği",
        paragraphs: [
          "Tadilat sonrası evde kalan ince toz, boya, harç ve etiket kalıntıları standart temizlikten farklı bir yöntem gerektirir. Bu işler inşaat ve tadilat sonrası temizlik hizmetimiz kapsamında planlanır; moloz taşıma ve teknik inşaat işleri kapsam dışıdır.",
        ],
        links: [
          { href: "/hizmetler/insaat-tadilat-sonrasi-temizlik", label: "İnşaat ve tadilat sonrası temizlik" },
        ],
      },
      {
        heading: "Buharlı Ev Temizliği",
        paragraphs: [
          "Evlerde buharlı temizlik; banyo fayansları ve derzler, lavabo ve armatür çevreleri ile seramik mutfak yüzeyleri gibi buhara dayanıklı yüzeylerde uygulanır. Parke, laminat, lake ve ısıya hassas yüzeylerde buhar kullanılmaz; bu bölümlerde farklı yöntem seçilir.",
          "Buharlı temizliği bir dezenfeksiyon uygulaması olarak sunmuyoruz.",
        ],
        links: [{ href: "/hizmetler/buharli-temizlik", label: "Buharlı temizlik hangi yüzeylerde kullanılır?" }],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Evin büyüklüğü, oda ve banyo sayısı",
          "Evin boş ya da eşyalı olması",
          "Kirlilik seviyesi ve son detaylı temizliğin üzerinden geçen süre",
          "Detaylı, taşınma öncesi/sonrası veya tadilat sonrası temizlik olması",
          "Çalışma tarihi ve saat esnekliği",
        ],
      },
      {
        heading: "Ödeme Seçenekleri",
        paragraphs: [
          "Quick Smart Clean ev temizliği hizmetinde kredi kartıyla ödeme yapabilirsiniz. Kredi kartına taksit imkânı bulunmaktadır; taksit seçenekleri için bizimle iletişime geçebilirsiniz.",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Tamirat, boya ve teknik bakım işleri ile moloz taşıma bu hizmetin kapsamında değildir. Halı, koltuk veya perde yıkama gibi ihtiyaçlarınız varsa teklif aşamasında belirtin.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quick Smart Clean ev temizliği yapıyor mu?",
        answer: "Evet. Quick Smart Clean İstanbul genelinde profesyonel ev temizliği hizmeti sunmaktadır.",
      },
      {
        question: "Ev temizliği hizmetiniz İstanbul'un hangi bölgelerinde var?",
        answer:
          "Quick Smart Clean İstanbul'un Anadolu ve Avrupa Yakası genelinde hizmet vermektedir. İlçe listesi Hizmet Bölgeleri sayfasında yer alır.",
      },
      {
        question: "Profesyonel ev temizliği neleri kapsıyor?",
        answer:
          "Yaşam alanları, mutfak, banyo, erişilebilir yüzeyler ve zeminler kapsama girer. Kapsam her evde teklif aşamasında yazılı olarak netleşir.",
      },
      {
        question: "Detaylı ev temizliği ile standart temizlik arasındaki fark nedir?",
        answer:
          "Standart temizlik görünen yüzeylerin düzenini korur. Detaylı temizlik ise yüksek yüzeyler, köşeler, kapı ve pervazlar ile derz araları gibi rutinde atlanan bölümleri de kapsar.",
      },
      {
        question: "Taşınma öncesi veya sonrası ev temizliği yapıyor musunuz?",
        answer:
          "Evet. Boş ya da yeni taşınılan evlerde taşınma öncesi veya sonrası detaylı temizlik planlanabilir.",
      },
      {
        question: "Tadilat sonrası ev temizliği yapıyor musunuz?",
        answer:
          "Evet. İnce toz ve yüzey kalıntıları için inşaat ve tadilat sonrası temizlik planlanır. Moloz taşıma kapsam dışıdır.",
      },
      {
        question: "Buharlı temizlik evlerde kullanılabiliyor mu?",
        answer:
          "Evet, uygun yüzeylerde. Seramik fayans, derz, lavabo ve armatür gibi buhara dayanıklı yüzeylerde kullanılır; parke, laminat ve ısıya hassas yüzeylerde kullanılmaz.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
      {
        question: "Ev temizliği için nasıl teklif alabilirim?",
        answer:
          "Teklif formunu doldurabilir, telefonla arayabilir veya WhatsApp'tan yazabilirsiniz. İlçe, evin yaklaşık büyüklüğü, oda ve banyo sayısı, evin boş ya da eşyalı olması ve uygun tarihi paylaşmanız yeterli.",
      },
    ],
    guides: [
      {
        href: "/makaleler/villa-rezidans-temizligi-kapsami",
        label: "Villa ve rezidans temizliğinin kapsamı",
        description: "Özel yaşam alanlarında temizlik planı ve dikkat edilmesi gerekenler.",
      },
      {
        href: "/makaleler/insaat-sonrasi-temizlik-asamalari",
        label: "İnşaat sonrası temizlik aşamaları",
        description: "Kaba temizlikten teslim kontrolüne adım adım süreç rehberi.",
      },
      {
        href: "/makaleler/banyo-islak-alan-temizliginde-dikkat-edilmesi-gerekenler",
        label: "Banyo ve ıslak alan temizliğinde dikkat edilmesi gerekenler",
        description: "Fayans, derz ve armatürlerde yüzeye uygun yöntem seçimi.",
      },
    ],
    quoteService: "ev",
    updatedAt: "2026-09-28",
  },
  "kurumsal-tesis-temizligi": {
    seoTitle: "Ofis ve Kurumsal Tesis Temizliği İstanbul",
    metaDescription:
      "İstanbul'da ofis ve kurumsal tesisler için günlük veya periyodik temizlik ve makineli zemin temizliği. Keşif, yazılı kapsam ve teslim kontrolüyle teklif alın.",
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
      {
        heading: "Kapsam Dışı İşler",
        bullets: [
          "Teknik bakım, onarım ve tesisat işleri",
          "Havalandırma kanalı temizliği ve haşere kontrolü",
          "Yüksek erişim gerektiren dış cephe camları (ayrı keşifle değerlendirilir)",
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
    updatedAt: "2026-09-25",
  },
  "insaat-tadilat-sonrasi-temizlik": {
    seoTitle: "İnşaat ve Tadilat Sonrası Temizlik İstanbul",
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
        heading: "Tek Seferlik veya Aşamalı Uygulama",
        paragraphs: [
          "İnşaat sonrası temizlik çoğunlukla alan teslim edilmeden önce tek seferlik yapılır. Bölüm bölüm teslim edilen büyük projelerde uygulama aşamalara ayrılarak planlanabilir. Alan kullanıma açıldıktan sonra düzenli temizlik isteyen işletmeler için periyodik ofis ve tesis temizliği ayrıca teklif edilir.",
        ],
      },
      {
        heading: "Teklif Koşulları ve Fiyatı Etkileyenler",
        paragraphs: [
          "Temizliğin kalıcı sonuç vermesi için kaba işlerin tamamlanmış olması gerekir. Teklif öncesinde şu bilgileri netleştiririz:",
        ],
        bullets: [
          "Alanın yaklaşık büyüklüğü ve oda/bölüm sayısı",
          "Boya, harç ve silikon kalıntılarının yoğunluğu; cam ve doğrama miktarı",
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
      INSTALLMENT_FAQ,
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
  "detayli-temizlik": {
    seoTitle: "Detaylı Temizlik İstanbul",
    metaDescription:
      "İstanbul'da ofis, mağaza, restoran, villa ve rezidanslar için detaylı temizlik. Yüzeye uygun yöntem, profesyonel zemin makineleri ve yazılı kapsamla teklif alın.",
    h1: "İstanbul Detaylı Temizlik Hizmeti",
    serviceName: "Detaylı Temizlik",
    intro: [
      "Detaylı temizlik; günlük veya haftalık rutinin ulaşmadığı yüksek yüzeyleri, köşeleri, derz aralarını, ekipman çevrelerini ve zeminleri kapsayan derinlemesine bir uygulamadır. Quick Smart Clean, İstanbul'da ofis, mağaza, restoran, villa ve rezidanslar için alanın kullanımına ve yüzey türlerine göre planlanan detaylı temizlik hizmeti sunar.",
      "Detaylı temizlik tek seferlik yapılabileceği gibi periyodik bir planın parçası olarak da uygulanabilir. Hangi bölümlerin ele alınacağı keşif ya da ön değerlendirme sonrasında yazılı olarak netleşir.",
    ],
    sections: [
      {
        heading: "Ne Zaman Detaylı Temizlik Gerekir?",
        bullets: [
          "Uzun süre ertelenmiş derin temizlik ihtiyacı olduğunda",
          "Taşınma öncesi veya sonrası, yeni bir alan kullanıma açılmadan önce",
          "Açılış, sezon başlangıcı veya denetim hazırlığı döneminde",
          "Tadilat sonrası kaba temizliğin ardından son detaylar için",
          "Günlük temizlik rutinini dönemsel olarak desteklemek için",
        ],
      },
      {
        heading: "Hizmet Kapsamı",
        paragraphs: [
          "Kapsam her alanda keşif sonrası yazılı olarak belirlenir. Tipik bir detaylı temizlikte ele alınan bölümler:",
        ],
        bullets: [
          "Yüksek yüzeyler, köşeler ve tavan birleşimlerinde toz ve örümcek ağı",
          "Kapı, pervaz, süpürgelik, priz ve anahtarlar",
          "Dolap ve mobilyaların erişilebilir dış yüzeyleri",
          "İç cam, cam bölme ve doğramalar",
          "Mutfak yüzeyleri ve ekipmanların dış yüzeyleri",
          "Banyo ve ıslak alanlarda fayans, derz, vitrifiye ve armatürler",
          "Zemin türüne uygun yöntemle zemin ve derz temizliği",
        ],
      },
      {
        heading: "Kullanılan Yöntem ve Ekipman",
        paragraphs: [
          "Geniş zeminlerde profesyonel zemin makineleriyle fırçalama ve su alma yapılır. Uygun seramik, derz ve paslanmaz yüzeylerde buhar destekli temizlik tercih edilebilir. Mermer, doğal taş, ahşap ve lake gibi hassas yüzeylerde asitli ürün ve aşındırıcı aparat kullanılmaz; ürün ve yöntem yüzeye göre seçilir.",
        ],
      },
      {
        heading: "Keşiften Teslime Çalışma Süreci",
        bullets: [
          "Ön değerlendirme veya keşif: Alan, yüzey türleri ve kirlilik seviyesi incelenir.",
          "Kapsam: Yapılacak işler ve kapsam dışı kalanlar yazılı olarak paylaşılır.",
          "Uygulama: Ekip, belirlenen tarih ve saat aralığında çalışır.",
          "Teslim kontrolü: Tamamlanan bölümler kapsam listesi üzerinden birlikte kontrol edilir.",
        ],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Alanın büyüklüğü ve oda/bölüm sayısı",
          "Kirlilik seviyesi ve son detaylı temizliğin üzerinden geçen süre",
          "Alanın boş ya da eşyalı olması",
          "Cam, banyo ve mutfak bölümlerinin miktarı",
          "Çalışma saati ve tarih esnekliği",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Tamirat, boya ve teknik bakım işleri, moloz taşıma ve yüksek erişim gerektiren dış cephe çalışmaları bu hizmetin kapsamında değildir. Halı, koltuk veya perde yıkama gibi ihtiyaçlarınız varsa teklif aşamasında belirtin.",
        ],
      },
    ],
    faqs: [
      {
        question: "Detaylı temizlik ile günlük temizlik arasındaki fark nedir?",
        answer:
          "Günlük temizlik yoğun kullanılan yüzeylerin düzenini korur. Detaylı temizlik ise yüksek yüzeyler, derz araları, ekipman çevreleri ve köşeler gibi rutinin ulaşmadığı bölümleri kapsar.",
      },
      {
        question: "Detaylı temizlik ne kadar sürer?",
        answer:
          "Süre; alanın büyüklüğüne, kirlilik seviyesine ve ekibin büyüklüğüne göre değişir. Tahmini süre keşif veya ön değerlendirme sonrasında teklifte belirtilir.",
      },
      {
        question: "Eşyalı bir alanda detaylı temizlik yapılabilir mi?",
        answer:
          "Evet. Eşyalı alanlarda erişilebilir yüzeyler ele alınır; eşya taşıma veya mobilya sökümü gerekip gerekmediği keşifte netleşir.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
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
        description: "Teklifleri karşılaştırırken kapsamı eşitlemek için kontrol listesi.",
      },
    ],
    quoteService: "detayli",
    updatedAt: "2026-09-28",
  },
  "buharli-temizlik": {
    seoTitle: "Buharlı Temizlik İstanbul",
    metaDescription:
      "İstanbul'da seramik, derz, paslanmaz çelik ve uygun zeminler için buharlı temizlik. Hangi yüzeylere uygun olduğunu öğrenin, keşif ve teklif alın.",
    h1: "İstanbul Buharlı Temizlik",
    serviceName: "Buharlı Temizlik",
    intro: [
      "Buharlı temizlik, yüksek sıcaklıkta buharla uygun yüzeylerdeki yağlı ve yapışkan kirleri yumuşatarak mekanik temizliği kolaylaştıran bir yöntemdir. Quick Smart Clean, İstanbul'da restoran mutfakları, banyo ve ıslak alanlar, derzler ve uygun zeminler için buhar destekli temizliği detaylı temizlik çalışmalarının bir parçası olarak uygular.",
      "Buhar her yüzeye uygun değildir. Hangi bölümde buhar, hangi bölümde farklı bir yöntem kullanılacağı yüzey türüne göre keşifte belirlenir.",
    ],
    sections: [
      {
        heading: "Buharlı Temizlik Hangi Yüzeylerde Kullanılır?",
        bullets: [
          "Seramik fayans ve derz araları",
          "Paslanmaz çelik tezgâh ve mutfak yüzeyleri",
          "Lavabo, vitrifiye ve armatür çevreleri",
          "Mutfak ve bulaşıkhane zeminleri gibi buhara dayanıklı zeminler",
          "Duş ve ıslak alanlarda biriken sabun ve kireç kalıntılarının çözülmesine yardımcı olarak",
        ],
      },
      {
        heading: "Hangi Yüzeylerde Kullanılmaz?",
        paragraphs: [
          "Isıya ve neme hassas yüzeylerde buhar hasara yol açabilir. Bu yüzeylerde farklı ürün ve yöntem seçilir:",
        ],
        bullets: [
          "Ahşap, parke ve laminat zeminler",
          "Lake, cilalı ve ısıya hassas kaplamalar",
          "Elektrikli ekipman bağlantıları ve prizler",
          "Bazı doğal taş ve özel kaplamalı yüzeyler",
        ],
      },
      {
        heading: "Buharlı Temizlik Dezenfeksiyon Değildir",
        paragraphs: [
          "Buhar, uygun yüzeylerde temizliği kolaylaştırır ve bazı bölümlerde daha az kimyasal ürünle çalışmayı mümkün kılabilir. Ancak buharlı temizliği bir dezenfeksiyon uygulaması olarak sunmuyoruz. Dezenfeksiyon ihtiyacınız varsa ayrıca planlanır.",
        ],
      },
      {
        heading: "Hangi Hizmetlerde Uygulanır?",
        bullets: [
          "Restoran ve endüstriyel mutfak temizliğinde yağlı yüzey ve zeminlerde",
          "Banyo ve ıslak alan temizliğinde fayans, derz ve armatürlerde",
          "İnşaat ve tadilat sonrası temizlikte uygun seramik ve derzlerde",
          "Ofis, otel, spor salonu ve villa temizliğinde uygun ıslak alanlarda",
        ],
      },
      {
        heading: "Çalışma Süreci",
        bullets: [
          "Keşif: Yüzey türleri ve kirlilik seviyesi incelenir, buhara uygun bölümler belirlenir.",
          "Kapsam: Buhar ve diğer yöntemlerin uygulanacağı bölümler yazılı olarak paylaşılır.",
          "Uygulama: Buharla yumuşatılan kir, uygun aparat ve bezlerle alınır; zeminlerde su alma yapılır.",
          "Teslim kontrolü: Tamamlanan bölümler birlikte kontrol edilir.",
        ],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Uygulama yapılacak alanın büyüklüğü ve derz miktarı",
          "Yağ, kireç ve kir birikiminin seviyesi",
          "Buharlı temizliğin tek başına mı, detaylı temizlik kapsamında mı yapılacağı",
          "Çalışma saati ve erişim koşulları",
        ],
      },
    ],
    faqs: [
      {
        question: "Buharlı temizlik laminat veya parke zemine uygulanır mı?",
        answer:
          "Genellikle hayır. Ahşap, parke ve laminat zeminler ısı ve neme hassas olduğu için bu yüzeylerde farklı yöntem kullanılır.",
      },
      {
        question: "Buharlı temizlik kimyasal kullanmadan mı yapılır?",
        answer:
          "Buhar bazı bölümlerde daha az kimyasal ürünle çalışmayı mümkün kılabilir. Yağ ve kir seviyesine göre yüzeye uygun ürünlerle birlikte de uygulanabilir.",
      },
      {
        question: "Buharlı temizlik dezenfeksiyon yerine geçer mi?",
        answer:
          "Hayır. Buharlı temizliği bir dezenfeksiyon uygulaması olarak sunmuyoruz. Dezenfeksiyon ihtiyacı ayrıca planlanır.",
      },
      {
        question: "Yalnızca buharlı temizlik için teklif alabilir miyim?",
        answer:
          "Evet. Buharlı temizlik çoğunlukla detaylı temizliğin bir parçası olarak planlanır; ancak yalnızca belirli bölümler için de teklif isteyebilirsiniz.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/banyo-islak-alan-temizliginde-dikkat-edilmesi-gerekenler",
        label: "Banyo ve ıslak alan temizliğinde dikkat edilmesi gerekenler",
        description: "Fayans, derz ve armatürlerde yüzeye uygun yöntem seçimi.",
      },
      {
        href: "/makaleler/restoran-endustriyel-mutfak-temizligi",
        label: "Restoran ve endüstriyel mutfak temizliği nasıl planlanır?",
        description: "Mutfak bölgelerine göre görev dağılımı ve vardiya uyumu.",
      },
    ],
    quoteService: "buharli",
    updatedAt: "2026-09-28",
  },
  "dukkan-magaza-temizligi": {
    seoTitle: "Dükkan ve Mağaza Temizliği İstanbul",
    metaDescription:
      "İstanbul'da dükkan, mağaza ve showroom temizliği. Satış alanı, vitrin, raf ve zemin için açılış öncesi, kapanış sonrası veya periyodik hizmet teklifi alın.",
    h1: "İstanbul Dükkan ve Mağaza Temizliği",
    serviceName: "Dükkan ve Mağaza Temizliği",
    intro: [
      "Dükkan ve mağaza temizliği; müşterinin ilk gördüğü satış alanının, vitrinin ve zeminin gün boyu düzenli görünmesini sağlar. Quick Smart Clean, İstanbul'da sokak mağazaları, AVM içindeki mağazalar ve showroomlar için mağazanın çalışma saatlerine göre planlanan temizlik hizmeti sunar.",
      "Hizmet tek seferlik ya da periyodik olarak planlanabilir. Kapsam, sıklık ve çalışma saatleri teklif aşamasında yazılı olarak netleşir.",
    ],
    sections: [
      {
        heading: "Kimler İçin Uygun?",
        bullets: [
          "Sokak mağazaları, butikler ve dükkanlar",
          "AVM içindeki mağazalar",
          "Showroom ve teşhir alanları",
          "Birden fazla şubede aynı standardı uygulamak isteyen mağaza zincirleri",
          "Açılış veya tadilat sonrası mağazasını kullanıma hazırlayan işletmeler",
        ],
      },
      {
        heading: "Hizmet Kapsamı",
        bullets: [
          "Satış alanı zemini ve giriş bölümü",
          "Vitrin camının iç yüzeyi ve erişilebilir dış yüzeyi",
          "Raf, tezgâh ve teşhir yüzeyleri",
          "Kabinler, aynalar ve kasa bölümündeki temas yüzeyleri",
          "Depo, personel alanı, tuvalet ve lavabolar",
        ],
      },
      {
        heading: "Mağaza Saatlerine Uygun Çalışma",
        bullets: [
          "Açılış öncesi veya kapanış sonrası: Satışı aksatmamak için müşterisiz saatlerde.",
          "Periyodik hizmet: Günlük, haftalık veya mağazanın belirleyeceği aralıklarla.",
          "AVM içindeki mağazalar: AVM yönetiminin çalışma saatleri ve giriş kurallarına göre planlanır.",
        ],
      },
      {
        heading: "Zemin ve Yüzeylere Uygun Yöntem",
        paragraphs: [
          "Mağaza zeminlerinde yoğun ayak trafiği nedeniyle kir hızla birikir. Zemin türüne uygun ürün seçilir; geniş satış alanlarında profesyonel zemin makineleriyle fırçalama ve su alma yapılır. Cam ve ayna yüzeylerinde iz bırakmayan yöntem kullanılır.",
        ],
      },
      {
        heading: "Tek Seferlik Temizlik Gerektiren Durumlar",
        bullets: [
          "Mağaza açılışı öncesi detaylı temizlik",
          "Tadilat veya dekorasyon değişikliği sonrası temizlik",
          "Sezon ve vitrin değişimi öncesi derinlemesine temizlik",
          "Mağaza devri veya taşınma öncesi temizlik",
        ],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Satış alanı ve depo büyüklüğü",
          "Vitrin ve cam yüzey miktarı",
          "Hizmet sıklığı ve çalışma saatleri",
          "Zemin türü ve kirlilik seviyesi",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Yüksek erişim gerektiren dış cephe ve tabela temizliği, teknik bakım ve onarım işleri bu hizmetin kapsamında değildir. Yüksek dış cephe camları ayrı keşifle değerlendirilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Mağaza açıkken temizlik yapılabilir mi?",
        answer:
          "Detaylı çalışmalar genellikle açılış öncesi veya kapanış sonrası yapılır. Gün içinde yapılması gereken işler, müşteri akışını aksatmayacak şekilde planlanabilir.",
      },
      {
        question: "AVM içindeki mağazalara hizmet veriyor musunuz?",
        answer:
          "Evet. Çalışma saatleri ve ekibin giriş işlemleri, AVM yönetiminin kurallarına göre planlanır.",
      },
      {
        question: "Birden fazla şubemiz var, aynı standardı uygulayabilir misiniz?",
        answer:
          "Evet. Şubeler için ortak bir kontrol listesi oluşturulur; kapsam ve sıklık her şubenin büyüklüğüne göre teklifte belirtilir.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/cok-subeli-isletmelerde-temizlik-operasyonu",
        label: "Çok şubeli işletmelerde temizlik operasyonu",
        description: "Farklı lokasyonlarda aynı standardı korumak için planlama.",
      },
      {
        href: "/makaleler/kurumsal-temizlik-firmasi-secerken",
        label: "Kurumsal temizlik firması seçerken nelere dikkat edilmeli?",
        description: "Sözleşme, ekip yönetimi ve denetim kriterleri.",
      },
    ],
    quoteService: "dukkan-magaza",
    updatedAt: "2026-09-28",
  },
  "villa-rezidans-temizligi": {
    seoTitle: "Villa ve Rezidans Temizliği İstanbul",
    metaDescription:
      "İstanbul'da villa ve rezidans temizliği. Yaşam alanları, banyolar, mutfak ve teras için yüzeye uygun, tek seferlik veya periyodik temizlik teklifi alın.",
    h1: "İstanbul Villa ve Rezidans Temizliği",
    serviceName: "Villa ve Rezidans Temizliği",
    intro: [
      "Villa ve rezidans temizliği; geniş yaşam alanlarında, farklı yüzey türlerinde ve özel eşyaların bulunduğu mekânlarda dikkat ve mahremiyet gerektirir. Quick Smart Clean, İstanbul'daki villa ve rezidanslar için ev sahibinin belirlediği düzene göre planlanan tek seferlik veya periyodik temizlik hizmeti sunar.",
      "Hangi alanların temizleneceği, hangi bölümlere dokunulmayacağı ve çalışma saatleri teklif aşamasında birlikte belirlenir.",
    ],
    sections: [
      {
        heading: "Hizmet Kapsamı",
        bullets: [
          "Salon, yatak odaları ve çalışma odaları gibi yaşam alanları",
          "Mutfak yüzeyleri, dolap dışları ve ekipmanların dış yüzeyleri",
          "Banyolar: fayans, derz, vitrifiye ve armatürler",
          "İç cam, cam kapı ve doğramalar",
          "Merdivenler, korkuluklar ve süpürgelikler",
          "Teras, balkon ve erişilebilir dış yaşam alanları",
        ],
      },
      {
        heading: "Hassas Yüzeylere Uygun Yöntem",
        paragraphs: [
          "Villa ve rezidanslarda mermer, doğal taş, ahşap, lake ve parlak kaplamalar sık kullanılır. Bu yüzeylerde asitli ürün ve aşındırıcı aparat kullanılmaz; ürün ve yöntem yüzeye göre seçilir. Uygun seramik ve derz yüzeylerinde buhar destekli temizlik tercih edilebilir.",
        ],
      },
      {
        heading: "Mahremiyet ve Çalışma Düzeni",
        bullets: [
          "Çalışma saatleri ev sahibinin programına göre belirlenir.",
          "Temizlenecek ve dokunulmayacak alanlar önceden netleştirilir.",
          "Ekip, belirlenen kapsam ve kontrol listesiyle çalışır.",
        ],
      },
      {
        heading: "Tek Seferlik veya Periyodik Hizmet",
        bullets: [
          "Tek seferlik detaylı temizlik: Taşınma öncesi veya sonrası, sezon açılışı ya da uzun süre kullanılmamış yaşam alanları için.",
          "Tadilat sonrası: İnce toz ve kalıntılar için inşaat ve tadilat sonrası temizlik planlanır.",
          "Periyodik hizmet: Haftalık, aylık veya belirlenen aralıklarla düzenli temizlik.",
        ],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Toplam alan, kat ve oda sayısı",
          "Banyo sayısı ve cam yüzey miktarı",
          "Teras, balkon ve dış alanların kapsama dahil olup olmadığı",
          "Hizmetin tek seferlik mi, periyodik mi olacağı",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Havuz suyu bakımı ve kimyasal analizi, bahçe ve peyzaj bakımı, teknik bakım ve onarım işleri bu hizmetin kapsamında değildir. Havuz çevresi temizliği ayrı bir hizmet olarak planlanabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Evde bulunmadığımız saatlerde temizlik yapılabilir mi?",
        answer:
          "Çalışma saatleri ve eve giriş düzeni sizinle birlikte belirlenir. Bu konudaki tercihinizi teklif aşamasında paylaşmanız yeterli.",
      },
      {
        question: "Mermer ve ahşap yüzeylere zarar verir mi?",
        answer:
          "Hassas yüzeylerde asitli ürün ve aşındırıcı aparat kullanılmaz; ürün ve yöntem yüzey türüne göre seçilir.",
      },
      {
        question: "Havuz çevresi temizliği de yapıyor musunuz?",
        answer:
          "Evet, havuz çevresi ve teras temizliği ayrı bir hizmet olarak planlanabilir. Havuz suyu bakımı ve kimyasal analizi kapsam dışıdır.",
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
        label: "Havuz çevresi ve açık yaşam alanları temizliği",
        description: "Teras ve havuz kenarı gibi dış alanlar için planlama.",
      },
    ],
    quoteService: "villa-rezidans",
    updatedAt: "2026-09-28",
  },
};
