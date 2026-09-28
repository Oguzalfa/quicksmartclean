import { INSTALLMENT_FAQ, PAYMENT_FAQ } from "@/lib/payment-faqs";
import type { ServicePageContent } from "@/lib/service-pages";

export const MORE_SERVICE_PAGES: Record<string, ServicePageContent> = {
  "gunluk-periyodik-temizlik": {
    seoTitle: "Günlük ve Periyodik Temizlik İstanbul",
    metaDescription:
      "İstanbul'da ofis, mağaza ve işletmeler için günlük, haftalık veya aylık periyodik temizlik. Çalışma saatlerine uygun plan ve kontrol listesiyle teklif alın.",
    h1: "İstanbul Günlük ve Periyodik Temizlik Hizmeti",
    serviceName: "Günlük ve Periyodik Temizlik",
    intro: [
      "Günlük ve periyodik temizlik; bir işletmenin her gün tekrar eden temizlik ihtiyacı ile belirli aralıklarla yapılması gereken detay işlerini tek bir plan altında toplar. Quick Smart Clean, İstanbul'daki ofis, mağaza, kafe, otel ve ortak kullanım alanları için işletmenin çalışma saatlerine ve kullanım yoğunluğuna göre planlanan temizlik hizmeti sunar.",
      "Plan keşifle başlar. Hangi işin her gün, hangisinin haftalık veya aylık yapılacağı, ekibin hangi saat aralığında çalışacağı ve teslimin nasıl kontrol edileceği yazılı olarak netleşir.",
    ],
    sections: [
      {
        heading: "Günlük Temizlik ile Periyodik Temizlik Arasındaki Fark",
        paragraphs: [
          "Günlük temizlik; masa ve temas yüzeyleri, tuvaletler, mutfak ve çay ocağı, çöplerin toplanması ve zeminlerin düzenli tutulması gibi her gün kirlenen alanlara odaklanır.",
          "Periyodik temizlik ise günlük rutinin ulaşmadığı işleri kapsar: yüksek yüzeylerde toz alma, cam bölmeler, derz araları, zemin bakımı ve dolap dışları gibi bölümler haftalık, aylık veya dönemsel olarak planlanır. İki plan birlikte yürütüldüğünde alanlar hem her gün düzenli kalır hem de kir birikimi uzun süre ertelenmez.",
        ],
      },
      {
        heading: "Kimler İçin Uygun?",
        bullets: [
          "Her gün çalışan ve ziyaretçi kabul eden ofisler",
          "Açılış öncesi veya kapanış sonrası hazırlanması gereken mağaza ve dükkanlar",
          "Müşteri trafiği yüksek kafe, restoran ve hizmet noktaları",
          "Otel ve konaklama tesislerinin ortak alanları",
          "Birden fazla şubede aynı temizlik standardını isteyen işletmeler",
        ],
      },
      {
        heading: "Planda Yer Alan Tipik İşler",
        paragraphs: [
          "Görev listesi her işletmede keşif sonrası hazırlanır. Tipik bir planda yer alan işler:",
        ],
        bullets: [
          "Çalışma alanları, masa, kapı kolu ve anahtar gibi temas yüzeyleri",
          "Tuvalet, lavabo ve ıslak alanlar",
          "Mutfak, çay ocağı ve yemek alanları",
          "Giriş, koridor, merdiven ve asansör gibi ortak alanlar",
          "Zemin türüne uygun yöntemle zemin temizliği",
          "Periyodik olarak iç cam, cam bölme ve yüksek yüzeyler",
        ],
        links: [{ href: "/hizmetler/kurumsal-tesis-temizligi", label: "Ofis ve kurumsal tesis temizliği" }],
      },
      {
        heading: "Sıklık ve Çalışma Saatleri",
        bullets: [
          "Günlük: Mesai öncesi, sırası veya sonrası; işletmenin ritmine göre.",
          "Haftanın belirli günleri: Kullanım yoğunluğu daha düşük alanlar için.",
          "Aylık veya dönemsel: Zemin bakımı, cam bölmeler ve yüksek yüzeyler gibi detay işler için.",
          "Yoğun dönemler: Kampanya, sezon veya etkinlik dönemlerinde sıklık birlikte gözden geçirilebilir.",
        ],
        cta: true,
      },
      {
        heading: "Kontrol Listesi ve Teslim",
        paragraphs: [
          "Düzenli hizmette kalite, aynı işin her seferinde aynı standartta yapılmasına bağlıdır. Bu nedenle alan bazlı kontrol listesi kullanılır; tamamlanan işler ve eksik görülen noktalar işletmenin sorumlusuyla paylaşılır. Değişen ihtiyaçlara göre görev listesi güncellenir.",
        ],
        links: [{ href: "/hizmetler/kalite-kontrol-teslim-sureci", label: "Kalite kontrol ve teslim süreci" }],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Toplam alan, kat sayısı ve ıslak alan sayısı",
          "Çalışan ve ziyaretçi yoğunluğu",
          "Hizmet sıklığı ve günlük çalışma süresi",
          "Çalışma saatleri: mesai içi, gece veya hafta sonu",
          "Periyodik detay işlerin kapsamı",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Teknik bakım, onarım, tesisat işleri, havalandırma kanalı temizliği ve haşere kontrolü bu hizmetin kapsamında değildir. Yüksek erişim gerektiren dış cephe camları ayrı keşifle değerlendirilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Günlük ve periyodik temizlik aynı sözleşmede planlanabilir mi?",
        answer:
          "Evet. Günlük işler ile haftalık, aylık veya dönemsel detay işler tek bir plan içinde tanımlanabilir. Görev listesi ve sıklık teklif aşamasında yazılı olarak netleşir.",
      },
      {
        question: "Temizlik mesai saatleri dışında yapılabilir mi?",
        answer:
          "Evet. Mesai öncesi, sonrası, gece veya hafta sonu çalışma işletmenin ihtiyacına göre planlanabilir.",
      },
      {
        question: "Plan sonradan değiştirilebilir mi?",
        answer:
          "Evet. Kullanım yoğunluğu veya alan değiştiğinde görev listesi ve sıklık birlikte gözden geçirilir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "İlçe, yaklaşık alan, çalışan ve ziyaretçi yoğunluğu, istenen sıklık ve uygun çalışma saatleri ile başlayabiliriz. Gerekli durumlarda keşif sonrası kesin teklif hazırlanır.",
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
        href: "/makaleler/cok-subeli-isletmelerde-temizlik-operasyonu",
        label: "Çok şubeli işletmelerde temizlik operasyonu",
        description: "Farklı lokasyonlarda aynı standardı korumak için planlama önerileri.",
      },
    ],
    quoteService: "ofis-kurumsal",
    updatedAt: "2026-09-28",
  },
  "havacilik-temizligi": {
    seoTitle: "Uçak ve Havacılık Temizliği İstanbul",
    metaDescription:
      "İstanbul'da uçak kabini, özel jet ve havacılık alanları için operatör prosedürlerine uygun kabin içi temizlik. Kapsam, süreç ve teklif bilgilerini inceleyin.",
    h1: "İstanbul Uçak Kabini ve Havacılık Temizliği",
    serviceName: "Uçak ve Havacılık Temizliği",
    intro: [
      "Havacılık temizliği; uçak kabinlerinde, özel jetlerde ve havacılık operasyon alanlarında kısıtlı süre içinde, hassas malzemelere zarar vermeden yapılan bir temizlik uygulamasıdır. Quick Smart Clean, kabin içi alanlar ve operasyon alanları için operatörün prosedürlerine ve zaman planına uygun temizlik hizmeti sunar.",
      "Havacılıkta temizlik yöntemi, kullanılacak ürünler ve çalışma süresi operatörün belirlediği kurallara bağlıdır. Bu nedenle kapsam, operatörle birlikte yazılı olarak netleştirilir.",
    ],
    sections: [
      {
        heading: "Kabin İçi Temizlik Kapsamı",
        paragraphs: ["Kapsam her operasyonda operatörle birlikte belirlenir. Tipik olarak ele alınan bölümler:"],
        bullets: [
          "Koltuk yüzeyleri, kolçaklar, kemer tokaları ve katlanır masalar",
          "Bagaj bölmelerinin dış ve iç yüzeyleri",
          "Kabin zemini ve halı yüzeyleri",
          "Tuvaletler ve galley bölümünün erişilebilir yüzeyleri",
          "Pencere çevreleri, paneller ve temas yüzeyleri",
          "Özel jetlerde deri, ahşap ve özel kaplamalı iç yüzeyler",
        ],
      },
      {
        heading: "Hassas Malzeme ve Ürün Seçimi",
        paragraphs: [
          "Kabin içinde deri, kumaş, kompozit paneller ve özel kaplamalar bir arada bulunur. Aşındırıcı aparatlar ve yüzeye uygun olmayan ürünler kalıcı hasara yol açabilir. Kullanılacak ürün ve yöntem, operatörün kabul ettiği liste ve yüzey türü esas alınarak seçilir.",
          "Elektronik ekipman, kokpit ve teknik bölümler temizlik kapsamında değildir; bu alanlara yalnızca operatörün izin verdiği ölçüde ve yöntemle yaklaşılır.",
        ],
      },
      {
        heading: "Zaman Planı ve Erişim",
        paragraphs: [
          "Havacılık temizliğinde süre sınırlıdır ve iş, uçağın yer planına göre yürütülür. Hangi bölümün hangi sırayla temizleneceği önceden belirlenir.",
          "Havalimanı ve apron alanlarına erişim, havalimanı işletmesinin ve operatörün güvenlik prosedürlerine tabidir. Giriş izinleri ve refakat koşulları planlama aşamasında operatörle birlikte netleşir.",
        ],
      },
      {
        heading: "Hizmet Türleri",
        bullets: [
          "Uçuş arası kısa kabin düzeni: Operatörün verdiği süre içinde temas yüzeyleri ve görünür alanlar.",
          "Detaylı kabin temizliği: Koltuk, zemin, bagaj bölmeleri ve tuvaletlerin derinlemesine temizliği.",
          "Özel jet iç mekân temizliği: Hassas iç yüzeylere odaklanan, sahip veya operatörün beklentisine göre planlanan uygulama.",
          "Operasyon alanları: Havacılık tesislerindeki ofis, bekleme ve ortak kullanım alanları.",
        ],
        cta: true,
      },
      {
        heading: "Kontrol ve Teslim",
        paragraphs: [
          "Tamamlanan bölümler, operatörle kararlaştırılan kontrol listesi üzerinden değerlendirilir. Eksik görülen noktalar teslim öncesinde tamamlanır.",
        ],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Uçak tipi ve kabin büyüklüğü",
          "Temizliğin kısa kabin düzeni mi, detaylı temizlik mi olduğu",
          "Kullanılabilir zaman aralığı ve çalışma saati",
          "Erişim ve güvenlik prosedürleri",
          "Tek seferlik veya düzenli hizmet olması",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Uçak dış yüzey yıkaması, teknik bakım, kokpit ve avionik ekipman temizliği bu hizmetin kapsamında değildir. Bu tür ihtiyaçlar varsa teklif aşamasında belirtin.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hangi ürünlerle temizlik yapılıyor?",
        answer:
          "Kullanılacak ürün ve yöntem, operatörün kabul ettiği liste ve kabin içindeki yüzey türleri esas alınarak belirlenir.",
      },
      {
        question: "Özel jet iç temizliği yapıyor musunuz?",
        answer:
          "Evet. Deri, ahşap ve özel kaplamalı iç yüzeylere odaklanan özel jet iç mekân temizliği planlanabilir. Kapsam sahip veya operatörle birlikte netleşir.",
      },
      {
        question: "Havalimanı erişimi nasıl sağlanıyor?",
        answer:
          "Apron ve havalimanı alanlarına erişim, havalimanı işletmesinin ve operatörün güvenlik prosedürlerine tabidir. Giriş koşulları planlama aşamasında operatörle birlikte belirlenir.",
      },
      {
        question: "Uçak dış yüzey yıkaması yapıyor musunuz?",
        answer:
          "Hayır. Bu hizmet kabin içi alanlara ve havacılık tesislerinin iç alanlarına odaklanır. Dış yüzey yıkaması ve teknik bakım kapsam dışıdır.",
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
  "yat-tekne-temizligi": {
    seoTitle: "Yat ve Tekne Temizliği İstanbul",
    metaDescription:
      "İstanbul'da yat ve tekneler için iç yaşam alanı, güverte ve hassas yüzey temizliği. Tik, paslanmaz ve deri yüzeylere uygun yöntemle keşif ve teklif alın.",
    h1: "İstanbul Yat ve Tekne Temizliği",
    serviceName: "Yat ve Tekne Temizliği",
    intro: [
      "Yat ve tekne temizliği; tuzlu su, nem ve güneşe sürekli maruz kalan yüzeylerde, malzemeye zarar vermeden yapılması gereken özel bir uygulamadır. Quick Smart Clean, İstanbul'daki marinalarda bağlı yat ve tekneler için iç yaşam alanları, güverte ve hassas yüzeylere yönelik temizlik hizmeti sunar.",
      "Her teknenin malzeme yapısı ve kullanım düzeni farklıdır. Kapsam, sahip veya kaptanla birlikte yazılı olarak belirlenir.",
    ],
    sections: [
      {
        heading: "İç Yaşam Alanları",
        bullets: [
          "Salon, kamaralar ve yatak alanlarında yüzey ve zemin temizliği",
          "Mutfak (galley) tezgâhı, dolap dışları ve cihazların dış yüzeyleri",
          "Tuvalet ve duş alanları",
          "Deri, ahşap ve lake iç yüzeylerde yüzeye uygun yöntemle temizlik",
          "İç cam, lomboz ve ayna yüzeyleri",
        ],
      },
      {
        heading: "Güverte ve Dış Yüzeyler",
        bullets: [
          "Güverte yüzeylerinde tuz ve kir kalıntılarının temizlenmesi",
          "Tik (teak) güvertelerde yüzeye uygun, aşındırmayan yöntem",
          "Paslanmaz çelik küpeşte ve donanımların temizliği",
          "Kokpit, oturma alanları ve dış minderler",
        ],
      },
      {
        heading: "Hassas Yüzeylerde Yöntem Seçimi",
        paragraphs: [
          "Tik güverte, gelcoat, paslanmaz çelik, deri ve özel kumaşlar aynı ürünle temizlenmez. Sert fırça, aşındırıcı ürün ve yüksek basınç bazı yüzeylerde kalıcı hasara neden olabilir. Ürün ve yöntem, yüzey türüne göre seçilir; sahibin veya üreticinin önerdiği bakım ürünü varsa o tercih edilir.",
          "Denize karışabilecek atık ve ürün kullanımı konusunda marinanın kuralları esas alınır.",
        ],
      },
      {
        heading: "Sezon Öncesi, Sezon Sonu ve Düzenli Bakım",
        bullets: [
          "Sezon öncesi hazırlık: Uzun süre kapalı kalan teknenin iç ve dış yüzeylerinin kullanıma hazırlanması.",
          "Sezon sonu temizlik: Kışlama öncesinde tuz, nem ve kir kalıntılarının giderilmesi.",
          "Düzenli bakım temizliği: Sezon boyunca belirlenen aralıklarla iç ve dış alanların düzeni.",
          "Misafir öncesi hazırlık: Charter veya misafir ağırlama öncesinde iç yaşam alanlarının hazırlanması.",
        ],
        cta: true,
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Teknenin boyu, kamara ve banyo sayısı",
          "İç, dış veya her ikisinin kapsamda olması",
          "Yüzey türleri ve kir birikiminin seviyesi",
          "Marinadaki erişim koşulları",
          "Tek seferlik veya düzenli hizmet olması",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Pasta-cila ve gelcoat bakımı gibi uygulamalar temizlik kapsamından ayrı değerlendirilir; ihtiyacınızı teklif aşamasında belirtin. Karina temizliği, zehirli boya, motor, elektrik ve teknik bakım işleri bu hizmetin kapsamında değildir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Tik güverte temizliği yapıyor musunuz?",
        answer:
          "Evet. Tik güvertelerde yüzeyi aşındırmayan ürün ve yöntemle temizlik yapılır. Sert fırça ve yüksek basınçtan kaçınılır.",
      },
      {
        question: "Tekne marinadayken temizlik yapılabilir mi?",
        answer:
          "Evet. Çalışma, marinanın kurallarına ve erişim koşullarına uygun olarak tekne bağlıyken planlanır.",
      },
      {
        question: "Sezon öncesi hazırlık temizliği yapıyor musunuz?",
        answer:
          "Evet. Uzun süre kapalı kalan teknenin iç yaşam alanları ve güvertesi sezon öncesinde kullanıma hazırlanabilir.",
      },
      {
        question: "Karina veya motor temizliği yapılıyor mu?",
        answer:
          "Hayır. Karina temizliği, zehirli boya, motor ve teknik bakım işleri bu hizmetin kapsamında değildir.",
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
  "dezenfeksiyon-uygulamalari": {
    seoTitle: "Dezenfeksiyon Uygulamaları İstanbul",
    metaDescription:
      "İstanbul'da ofis, işletme ve ortak alanlarda yoğun temas yüzeyleri için temizlik sonrası dezenfeksiyon uygulaması. Kapsam, yöntem ve teklif bilgilerini inceleyin.",
    h1: "İstanbul Dezenfeksiyon Uygulamaları",
    serviceName: "Dezenfeksiyon Uygulamaları",
    intro: [
      "Dezenfeksiyon uygulaması; kapı kolu, tutamak, masa, tezgâh ve ıslak alanlar gibi yoğun temas edilen yüzeylerde, temizliğin ardından uygun ürünle yapılan bir hijyen adımıdır. Quick Smart Clean, İstanbul'daki ofis, işletme ve ortak kullanım alanları için alanın kullanımına göre planlanan dezenfeksiyon uygulamaları sunar.",
      "Dezenfeksiyon temizliğin yerine geçmez. Kir ve kalıntı bulunan bir yüzeyde ürün etkili çalışmaz; bu nedenle uygulama her zaman temizlikten sonra yapılır.",
    ],
    sections: [
      {
        heading: "Temizlik ve Dezenfeksiyon Arasındaki Fark",
        paragraphs: [
          "Temizlik; yüzeydeki kiri, tozu ve kalıntıları uzaklaştırır. Dezenfeksiyon ise temizlenmiş yüzeye uygun ürünün, ürün etiketinde belirtilen şekilde ve sürede uygulanmasıdır.",
          "Buharlı temizlik de bir dezenfeksiyon uygulaması olarak sunulmaz; buhar, uygun yüzeylerde kiri yumuşatarak temizliği kolaylaştıran bir yöntemdir.",
        ],
        links: [{ href: "/hizmetler/buharli-temizlik", label: "Buharlı temizlik hangi yüzeylerde kullanılır?" }],
      },
      {
        heading: "Uygulama Yapılan Alanlar",
        bullets: [
          "Kapı kolu, tutamak, anahtar ve asansör butonları gibi temas yüzeyleri",
          "Masa, tezgâh, resepsiyon ve bekleme alanları",
          "Tuvalet, lavabo ve ıslak alanlar",
          "Mutfak ve yemek alanlarının erişilebilir yüzeyleri",
          "Spor salonu, soyunma odası ve ortak kullanım alanları",
        ],
      },
      {
        heading: "Uygulama Adımları",
        bullets: [
          "Keşif: Alanın kullanımı, yüzey türleri ve öncelikli temas noktaları belirlenir.",
          "Temizlik: Yüzeylerdeki kir ve kalıntılar uzaklaştırılır.",
          "Uygulama: Yüzeye uygun ürün, etiketindeki kullanım talimatına ve temas süresine uyularak uygulanır.",
          "Kontrol: Uygulanan alanlar kontrol listesi üzerinden işletme sorumlusuyla paylaşılır.",
        ],
        cta: true,
      },
      {
        heading: "Periyodik veya Tek Seferlik",
        bullets: [
          "Periyodik uygulama: Yoğun temas yüzeyleri için günlük, haftalık veya işletmenin belirleyeceği aralıklarla.",
          "Tek seferlik uygulama: Açılış, etkinlik veya dönemsel ihtiyaçlar için.",
          "Günlük temizlik planıyla birlikte: Dezenfeksiyon adımı mevcut temizlik planına eklenebilir.",
        ],
        links: [{ href: "/hizmetler/gunluk-periyodik-temizlik", label: "Günlük ve periyodik temizlik" }],
      },
      {
        heading: "Sağlık Kuruluşları ve Gıda İşletmeleri",
        paragraphs: [
          "Sağlık kuruluşlarında kurumun kendi enfeksiyon kontrol prosedürü, gıda işletmelerinde ise işletmenin gıda güvenliği prosedürü önceliklidir. Uygulama bu prosedürlere göre ve kurumun belirlediği yetki sınırları içinde planlanır.",
        ],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Uygulama yapılacak alanın büyüklüğü ve temas yüzeyi yoğunluğu",
          "Uygulamanın periyodik mi, tek seferlik mi olduğu",
          "Temizlik adımının kapsama dahil olup olmadığı",
          "Çalışma saatleri",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Haşere ilaçlama, fumigasyon, tıbbi atık toplama ve havalandırma kanalı temizliği bu hizmetin kapsamında değildir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Dezenfeksiyon temizliğin yerine geçer mi?",
        answer:
          "Hayır. Dezenfeksiyon temizlenmiş yüzeye uygulanır. Kir ve kalıntı bulunan yüzeyde ürün etkili çalışmaz; bu nedenle önce temizlik yapılır.",
      },
      {
        question: "Hangi ürünler kullanılıyor?",
        answer:
          "Ürün, yüzey türüne ve alanın kullanımına göre seçilir ve teklif aşamasında belirtilir. Uygulama, ürün etiketindeki kullanım talimatına göre yapılır.",
      },
      {
        question: "Haşere ilaçlama yapıyor musunuz?",
        answer: "Hayır. Haşere ilaçlama ve fumigasyon bu hizmetin kapsamında değildir.",
      },
      {
        question: "Dezenfeksiyon mevcut temizlik planına eklenebilir mi?",
        answer:
          "Evet. Yoğun temas yüzeyleri için dezenfeksiyon adımı günlük veya periyodik temizlik planına eklenebilir.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/ofislerde-gunluk-ve-periyodik-temizlik-farklari",
        label: "Ofislerde günlük ve periyodik temizlik farkları",
        description: "Temas yüzeylerinin günlük plana nasıl yerleştirileceğine dair rehber.",
      },
      {
        href: "/makaleler/restoran-endustriyel-mutfak-temizligi",
        label: "Restoran ve endüstriyel mutfak temizliği nasıl planlanır?",
        description: "Gıda işletmelerinde temizlik adımlarının sıralanması üzerine rehber.",
      },
    ],
    quoteService: "diger",
    updatedAt: "2026-09-28",
  },
  "operasyon-personel-yonetimi": {
    seoTitle: "Temizlik Operasyonu ve Personel Yönetimi",
    metaDescription:
      "Çok lokasyonlu işletmeler için temizlik ekibi planlama, vardiya düzeni, kontrol listesi ve raporlama. İstanbul genelinde tek merkezden koordinasyon için teklif alın.",
    h1: "Temizlik Operasyonu ve Personel Yönetimi",
    serviceName: "Temizlik Operasyonu ve Personel Yönetimi",
    intro: [
      "Temizlik operasyonu ve personel yönetimi; birden fazla lokasyonda çalışan işletmelerde temizlik hizmetinin tek merkezden planlanmasını, ekiplerin vardiya düzenini ve her lokasyonda aynı kontrol standardının uygulanmasını kapsar. Quick Smart Clean, İstanbul genelinde şube, mağaza veya ofis ağına sahip işletmeler için bu koordinasyonu üstlenir.",
      "Amaç, her lokasyonun ayrı ayrı takip edilmesi yerine görev listelerinin, sıklıkların ve teslim kontrollerinin tek bir çerçevede yönetilmesidir.",
    ],
    sections: [
      {
        heading: "Kimler İçin Uygun?",
        bullets: [
          "İstanbul'un farklı ilçelerinde şubesi bulunan mağaza, kafe ve restoran zincirleri",
          "Birden fazla ofisi veya binası olan şirketler",
          "Otel, rezidans ve tesis yönetimleri",
          "Farklı lokasyonlarda aynı temizlik standardını isteyen markalar",
        ],
      },
      {
        heading: "Operasyon Planı Neleri Kapsar?",
        bullets: [
          "Lokasyon bazlı görev listeleri ve hizmet sıklıkları",
          "Ekiplerin vardiya ve çalışma saati planı",
          "Tüm lokasyonlarda ortak kullanılan kontrol listesi",
          "Eksik ve talep takibi için tek iletişim noktası",
          "Dönemsel detay işlerin takvime bağlanması",
        ],
      },
      {
        heading: "Vardiya ve Ekip Planlaması",
        paragraphs: [
          "Her lokasyonun açılış-kapanış saatleri, müşteri yoğunluğu ve alan büyüklüğü farklıdır. Ekip ve vardiya planı bu bilgilere göre lokasyon bazında hazırlanır; açılış öncesi, gün içi ve kapanış sonrası işler ayrı görev listeleriyle tanımlanır.",
          "Planın sürekliliği için ekip değişiklikleri ve izin dönemleri önceden planlanır; lokasyon sorumlusu bu değişikliklerden haberdar edilir.",
        ],
        cta: true,
      },
      {
        heading: "Kontrol ve Raporlama",
        paragraphs: [
          "Tüm lokasyonlarda aynı kontrol listesinin kullanılması, hizmetin karşılaştırılabilir olmasını sağlar. Tamamlanan işler ve eksik görülen noktalar kayıt altına alınır; işletmenin merkez sorumlusuyla düzenli olarak paylaşılır.",
        ],
        links: [{ href: "/hizmetler/kalite-kontrol-teslim-sureci", label: "Kalite kontrol ve teslim süreci" }],
      },
      {
        heading: "Yeni Lokasyon Açılışları",
        paragraphs: [
          "Yeni açılan şube veya ofislerde açılış öncesi detaylı temizlik ve ardından düzenli plana geçiş aynı operasyon içinde planlanabilir. Tadilat sonrası açılışlarda inşaat sonrası temizlik ayrıca değerlendirilir.",
        ],
        links: [{ href: "/hizmetler/insaat-tadilat-sonrasi-temizlik", label: "İnşaat ve tadilat sonrası temizlik" }],
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Lokasyon sayısı ve her lokasyonun büyüklüğü",
          "Lokasyonların İstanbul içindeki dağılımı",
          "Hizmet sıklığı ve vardiya saatleri",
          "Periyodik detay işlerin kapsamı",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Teknik bakım, onarım, güvenlik ve resepsiyon hizmetleri bu hizmetin kapsamında değildir. Operasyon yönetimi, temizlik hizmetinin planlanması ve takibiyle sınırlıdır.",
        ],
      },
    ],
    faqs: [
      {
        question: "Farklı ilçelerdeki şubelerimiz için tek plan yapılabilir mi?",
        answer:
          "Evet. İstanbul genelindeki lokasyonlar için görev listeleri, sıklıklar ve kontrol adımları tek bir operasyon planında toplanabilir.",
      },
      {
        question: "Her lokasyonda aynı kontrol listesi mi kullanılıyor?",
        answer:
          "Evet. Ortak kontrol listesi kullanılır; lokasyona özgü farklılıklar listeye ayrıca eklenir.",
      },
      {
        question: "Tek iletişim noktası oluyor mu?",
        answer:
          "Evet. Talepler, değişiklikler ve eksik bildirimleri tek bir iletişim noktası üzerinden takip edilir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "Lokasyon sayısı ve ilçeleri, her lokasyonun yaklaşık alanı, çalışma saatleri ve istenen hizmet sıklığı ile başlayabiliriz.",
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
        href: "/makaleler/profesyonel-temizlikte-kalite-kontrol-teslim-sureci",
        label: "Profesyonel temizlikte kalite kontrol ve teslim süreci",
        description: "Kontrol listesi, saha değerlendirmesi ve geri bildirim adımları.",
      },
    ],
    quoteService: "ofis-kurumsal",
    updatedAt: "2026-09-28",
  },
  "spor-salonu-temizligi": {
    seoTitle: "Spor Salonu Temizliği İstanbul",
    metaDescription:
      "İstanbul'da spor salonu ve fitness merkezleri için ekipman, zemin, soyunma odası ve duş alanı temizliği. Çalışma saatlerine uygun planla keşif ve teklif alın.",
    h1: "İstanbul Spor Salonu ve Fitness Merkezi Temizliği",
    serviceName: "Spor Salonu Temizliği",
    intro: [
      "Spor salonu temizliği; ter, nem ve sürekli temasın bir arada olduğu ekipman, zemin, soyunma odası ve duş alanlarında düzenli ve planlı uygulama gerektirir. Quick Smart Clean, İstanbul'daki spor salonları, fitness ve yaşam merkezleri için işletmenin çalışma saatlerine göre planlanan temizlik hizmeti sunar.",
      "Plan, üyelerin yoğun olduğu saatleri aksatmayacak şekilde hazırlanır. Hangi alanın ne zaman ve hangi sıklıkla temizleneceği yazılı olarak netleşir.",
    ],
    sections: [
      {
        heading: "Temizlik Kapsamı",
        bullets: [
          "Kardiyo ve ağırlık ekipmanlarının tutamak ve temas yüzeyleri",
          "Mat, sehpa ve serbest ağırlık alanları",
          "Kauçuk, vinil, parke ve seramik zeminler",
          "Soyunma odaları, dolap dışları ve banklar",
          "Duş, tuvalet ve lavabo alanları",
          "Resepsiyon, bekleme ve ortak kullanım alanları",
          "Ayna ve iç cam yüzeyleri",
        ],
      },
      {
        heading: "Zemine Uygun Yöntem",
        paragraphs: [
          "Spor salonlarında kauçuk, vinil, parke ve seramik zeminler bir arada bulunabilir. Her zemin aynı ürünle temizlenmez; kauçuk zeminde yüzeyi kurutan ürünlerden, parkede fazla sudan kaçınılır. Geniş alanlarda profesyonel zemin makinesi, uygun seramik ve derz yüzeylerinde buhar destekli temizlik tercih edilebilir.",
        ],
        links: [{ href: "/hizmetler/buharli-temizlik", label: "Buharlı temizlik" }],
      },
      {
        heading: "Soyunma Odası ve Duş Alanları",
        paragraphs: [
          "Soyunma odaları ve duşlar, nem ve kireç birikimi nedeniyle ayrı bir görev listesiyle ele alınır. Fayans, derz, armatür ve gider çevreleri düzenli olarak temizlenir; kuruma süresi yoğun saatlere göre planlanır.",
        ],
        links: [{ href: "/hizmetler/banyo-islak-alan-temizligi", label: "Banyo ve ıslak alan temizliği" }],
      },
      {
        heading: "Çalışma Saatine Göre Plan",
        bullets: [
          "Açılış öncesi: Zemin, soyunma odası ve duşların güne hazırlanması.",
          "Gün içi: Yoğun saatler arasında temas yüzeyleri ve ıslak alanların kontrolü.",
          "Kapanış sonrası: Zemin ve ekipman çevresinde detaylı uygulama.",
          "Periyodik: Derz, yüksek yüzeyler ve zemin bakımı gibi detay işler.",
        ],
        cta: true,
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Salonun toplam alanı ve ekipman yoğunluğu",
          "Soyunma odası ve duş sayısı",
          "Zemin türleri",
          "Hizmet sıklığı ve çalışma saatleri",
        ],
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
        question: "Salon açıkken temizlik yapılabilir mi?",
        answer:
          "Evet. Gün içi kontroller üyeleri aksatmayacak şekilde yapılır; detaylı zemin ve ekipman uygulamaları genellikle açılış öncesi veya kapanış sonrasında planlanır.",
      },
      {
        question: "Kauçuk zeminler nasıl temizleniyor?",
        answer:
          "Kauçuk zeminlerde yüzeyi kurutmayan, zemine uygun ürünler kullanılır. Geniş alanlarda profesyonel zemin makinesiyle çalışılabilir.",
      },
      {
        question: "Soyunma odası ve duşlar da kapsamda mı?",
        answer: "Evet. Soyunma odaları, duş, tuvalet ve lavabo alanları ayrı bir görev listesiyle ele alınır.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "İlçe, salonun yaklaşık alanı, soyunma odası ve duş sayısı, çalışma saatleri ve istenen sıklık ile başlayabiliriz.",
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
  "havuz-cevre-alan-temizligi": {
    seoTitle: "Havuz Çevresi ve Teras Temizliği İstanbul",
    metaDescription:
      "İstanbul'da villa, otel ve siteler için havuz kenarı, teras, şezlong ve açık yaşam alanı temizliği. Kaygan yüzeylere uygun yöntemle keşif ve teklif alın.",
    h1: "İstanbul Havuz Çevresi ve Açık Alan Temizliği",
    serviceName: "Havuz Çevresi ve Açık Alan Temizliği",
    intro: [
      "Havuz çevresi ve açık alan temizliği; havuz kenarı, teras, şezlong alanları ve açık yaşam bölgelerinin dış mekân koşullarına ve yüzey türüne uygun yöntemle temizlenmesini kapsar. Quick Smart Clean, İstanbul'daki villa, otel ve siteler için sezon öncesi, sezon içi veya tek seferlik havuz çevresi temizliği sunar.",
      "Bu hizmet havuzun çevresine ve açık alanlara odaklanır; havuz suyunun kimyasal dengesi ve teknik bakım ayrı uzmanlık alanlarıdır ve kapsamda değildir.",
    ],
    sections: [
      {
        heading: "Temizlik Kapsamı",
        bullets: [
          "Havuz kenarı taşları ve çevresindeki zemin",
          "Teras, veranda ve açık oturma alanları",
          "Şezlong, masa ve dış mekân mobilyaları",
          "Duş, soyunma kabini ve havuz tuvaleti",
          "Çevre duvarı, korkuluk ve erişilebilir cam yüzeyler",
          "Giriş ve geçiş yolları",
        ],
      },
      {
        heading: "Yüzeye Uygun Yöntem",
        paragraphs: [
          "Havuz çevresinde doğal taş, traverten, kompozit deck, ahşap ve seramik gibi farklı yüzeyler bulunur. Doğal taş ve travertende asitli ürün kullanılmaz; ahşap ve kompozit yüzeylerde yüksek basınç dikkatli uygulanır. Yosun ve kaygan tabaka oluşan bölümler yüzey türüne uygun ürün ve fırçayla temizlenir.",
          "Temizlik sırasında ürünlerin havuz suyuna karışmaması için havuz kenarında dikkatli çalışılır.",
        ],
      },
      {
        heading: "Güvenlik ve Çalışma Düzeni",
        paragraphs: [
          "Islak ve kaygan yüzeylerde çalışma yapılan bölümler geçici olarak kullanıma kapatılır. Otel ve sitelerde uygulama saatleri misafir ve sakin yoğunluğuna göre belirlenir.",
        ],
      },
      {
        heading: "Sezon Öncesi, Sezon İçi ve Sezon Sonu",
        bullets: [
          "Sezon öncesi: Kış boyunca biriken kir, yaprak ve yosunun temizlenerek alanın kullanıma hazırlanması.",
          "Sezon içi: Belirlenen aralıklarla havuz çevresi ve açık alanların düzenli temizliği.",
          "Sezon sonu: Mobilya ve açık alanların kış öncesinde temizlenmesi.",
          "Etkinlik öncesi: Davet veya organizasyon öncesinde tek seferlik hazırlık.",
        ],
        cta: true,
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Havuz çevresi ve açık alanın büyüklüğü",
          "Yüzey türleri ve yosun/kir birikiminin seviyesi",
          "Mobilya ve ek alanların kapsama dahil olması",
          "Tek seferlik veya sezonluk hizmet olması",
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
        question: "Havuz suyu bakımı yapıyor musunuz?",
        answer:
          "Hayır. Havuz suyu kimyasal dengesi, havuz içi temizlik ve filtre-pompa bakımı kapsam dışıdır. Hizmet havuz çevresine ve açık alanlara odaklanır.",
      },
      {
        question: "Traverten ve doğal taş zeminler nasıl temizleniyor?",
        answer:
          "Doğal taş ve travertende asitli ürün kullanılmaz; yüzeye uygun ürün ve aşındırmayan yöntem seçilir.",
      },
      {
        question: "Sezon öncesi hazırlık temizliği yapılıyor mu?",
        answer:
          "Evet. Kış boyunca biriken kir, yaprak ve yosun temizlenerek havuz çevresi ve açık alanlar kullanıma hazırlanabilir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "İlçe, havuz çevresi ve açık alanın yaklaşık büyüklüğü, yüzey türleri ve istenen sıklık ile başlayabiliriz.",
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
      {
        href: "/makaleler/villa-rezidans-temizligi-kapsami",
        label: "Villa ve rezidans temizliğinin kapsamı",
        description: "Özel yaşam alanlarında temizlik planı ve ek hizmetler.",
      },
    ],
    quoteService: "villa-rezidans",
    updatedAt: "2026-09-28",
  },
  "dis-cephe-cam-temizligi": {
    seoTitle: "Dış Cephe ve Cam Temizliği İstanbul",
    metaDescription:
      "İstanbul'da kurumsal binalar, mağazalar ve ofisler için cam ve dış cephe temizliği. Bina yapısı ve erişim koşullarına göre saha keşfi ile teklif alın.",
    h1: "İstanbul Dış Cephe ve Cam Temizliği",
    serviceName: "Dış Cephe ve Cam Temizliği",
    intro: [
      "Dış cephe ve cam temizliği; binanın yüksekliğine, cephe malzemesine ve erişim koşullarına göre her projede ayrıca planlanan bir uygulamadır. Quick Smart Clean, İstanbul'daki kurumsal binalar, ofisler, mağazalar ve showroomlar için cam ve dış yüzey temizliği sunar.",
      "Her bina farklı olduğu için sabit bir yöntem uygulanmaz. Saha keşfi yapılır; uygulanabilirlik, yöntem ve güvenlik koşulları keşif sonrasında yazılı olarak netleşir.",
    ],
    sections: [
      {
        heading: "Temizlik Kapsamı",
        bullets: [
          "Zeminden erişilebilen vitrin ve giriş camları",
          "Ofis ve binalarda iç ve dış cam yüzeyleri",
          "Cam bölmeler, korkuluklar ve kapılar",
          "Doğramalar, pencere pervazları ve cam çerçeveleri",
          "Erişim koşulları uygun dış cephe yüzeyleri",
        ],
      },
      {
        heading: "Saha Keşfi ve Erişim Planı",
        paragraphs: [
          "Keşifte bina yüksekliği, cam tipi, cephe malzemesi, erişim noktaları ve çevre koşulları değerlendirilir. Erişim yöntemi; zeminden uzatmalı ekipman, platform veya binanın mevcut cephe erişim sistemi gibi seçenekler arasından binanın koşullarına göre belirlenir.",
          "Yükseklikte çalışma gerektiren işlerin uygulanabilirliği keşifte değerlendirilir ve iş güvenliği koşulları sağlanmadan uygulamaya geçilmez.",
        ],
      },
      {
        heading: "Cam ve Cephe Yüzeyine Uygun Yöntem",
        paragraphs: [
          "Temperli cam, reflekte cam, kompozit panel, alüminyum doğrama ve doğal taş cephe farklı yaklaşımlar gerektirir. Aşındırıcı aparat ve yüzeye uygun olmayan ürünler cam kaplamalarında iz bırakabilir. Ürün ve yöntem, yüzey türüne göre seçilir.",
        ],
      },
      {
        heading: "Çalışma Takvimi",
        bullets: [
          "Hava koşulları: Yağış ve kuvvetli rüzgârda dış cephe uygulaması yapılmaz; takvim buna göre esnek tutulur.",
          "Bina kullanımı: Giriş ve yaya trafiğinin yoğun olduğu saatler dikkate alınır.",
          "Periyodik plan: Cam temizliği aylık, üç aylık veya dönemsel olarak planlanabilir.",
        ],
        cta: true,
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Cam ve cephe yüzeyinin toplam alanı",
          "Bina yüksekliği ve erişim yöntemi",
          "Cephe malzemesi ve kir birikiminin seviyesi",
          "Tek seferlik veya periyodik hizmet olması",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Cephe onarımı, silikon ve conta yenileme, boya ve teknik bakım işleri bu hizmetin kapsamında değildir. Erişim koşulları güvenli çalışmaya uygun olmayan yüzeyler keşif sonrasında kapsam dışı bırakılabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Her bina için dış cephe temizliği yapılabiliyor mu?",
        answer:
          "Uygulanabilirlik bina yüksekliğine, cephe yapısına ve erişim koşullarına bağlıdır. Saha keşfi sonrasında hangi yüzeylerin hangi yöntemle temizlenebileceği yazılı olarak belirtilir.",
      },
      {
        question: "Yağmurlu havada cam temizliği yapılır mı?",
        answer:
          "Yağış ve kuvvetli rüzgârda dış cephe uygulaması yapılmaz; çalışma uygun bir tarihe kaydırılır.",
      },
      {
        question: "Mağaza vitrin camları da temizleniyor mu?",
        answer: "Evet. Zeminden erişilebilen vitrin ve giriş camları tek seferlik veya periyodik olarak temizlenebilir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "Binanın adresi veya ilçesi, kat sayısı, yaklaşık cam alanı ve istenen sıklık ile başlayabiliriz. Kesin teklif saha keşfi sonrasında hazırlanır.",
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
    ],
    quoteService: "ofis-kurumsal",
    updatedAt: "2026-09-28",
  },
  "banyo-islak-alan-temizligi": {
    seoTitle: "Banyo ve Islak Alan Temizliği İstanbul",
    metaDescription:
      "İstanbul'da ev, villa, otel ve işletmeler için banyo, duş, fayans, derz ve armatür temizliği. Kireç ve nem birikimine yüzeye uygun yöntemle teklif alın.",
    h1: "İstanbul Banyo ve Islak Alan Temizliği",
    serviceName: "Banyo ve Islak Alan Temizliği",
    intro: [
      "Banyo ve ıslak alan temizliği; fayans, derz, duş, lavabo, klozet ve armatürlerde kireç, sabun kalıntısı ve nem kaynaklı kararmaların yüzeye uygun yöntemle giderilmesini kapsar. Quick Smart Clean, İstanbul'daki ev, villa, otel ve işletmeler için banyo ve ıslak alan temizliği sunar.",
      "Mermer, seramik, krom ve cam gibi yüzeyler aynı ürünle temizlenmez. Yöntem, yüzey türüne göre seçilir.",
    ],
    sections: [
      {
        heading: "Temizlik Kapsamı",
        bullets: [
          "Duvar ve zemin fayansları",
          "Derz aralarındaki kararma ve kalıntılar",
          "Duş teknesi, küvet ve duşakabin camları",
          "Lavabo, klozet ve vitrifiye",
          "Batarya, duş başlığı ve armatürler",
          "Ayna, dolap dışları ve aksesuarlar",
        ],
      },
      {
        heading: "Yüzeye Uygun Yöntem",
        paragraphs: [
          "Mermer ve doğal taş yüzeylerde asitli kireç çözücüler kullanılmaz; bu ürünler yüzeyde matlaşmaya yol açabilir. Krom ve paslanmaz armatürlerde aşındırıcı aparatlardan kaçınılır. Seramik fayans ve derz gibi buhara dayanıklı yüzeylerde buhar destekli temizlik tercih edilebilir.",
        ],
        links: [{ href: "/hizmetler/buharli-temizlik", label: "Buharlı temizlik" }],
      },
      {
        heading: "Derz ve Kireç Temizliği",
        paragraphs: [
          "Derz araları nem ve sabun kalıntısını tutar; zamanla kararır. Yüzeye uygun ürün, yeterli bekleme süresi ve uygun fırçayla mekanik temizlik yapılır. Derzin kendisinin yıprandığı veya döküldüğü durumlarda temizlik tek başına yeterli olmayabilir; derz yenileme kapsam dışıdır.",
        ],
      },
      {
        heading: "Ev, Otel ve İşletmelerde",
        bullets: [
          "Evler: Detaylı ev temizliğinin parçası olarak veya yalnızca banyo için.",
          "Villa ve rezidanslar: Çok sayıda banyonun aynı standartta temizlenmesi.",
          "Oteller: Oda banyolarının dönemsel detay temizliği.",
          "İşletmeler: Ofis, spor salonu ve restoran tuvaletlerinin düzenli temizliği.",
        ],
        links: [
          { href: "/hizmetler/ev-temizligi", label: "Ev temizliği" },
          { href: "/hizmetler/villa-rezidans-temizligi", label: "Villa ve rezidans temizliği" },
        ],
        cta: true,
      },
      {
        heading: "Fiyatı Neler Etkiler?",
        bullets: [
          "Banyo ve ıslak alan sayısı ile büyüklüğü",
          "Kireç ve derz kararmasının seviyesi",
          "Yüzey türleri",
          "Tek seferlik veya periyodik hizmet olması",
        ],
      },
      {
        heading: "Kapsam Dışı İşler",
        paragraphs: [
          "Tesisat onarımı, tıkanıklık açma, derz ve silikon yenileme, fayans değişimi ve küf kaynaklı yapısal nem sorunlarının giderilmesi bu hizmetin kapsamında değildir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Mermer banyolarda kireç çözücü kullanılıyor mu?",
        answer:
          "Hayır. Mermer ve doğal taşta asitli kireç çözücüler matlaşmaya yol açabileceği için kullanılmaz; yüzeye uygun ürün seçilir.",
      },
      {
        question: "Kararmış derzler temizlenebilir mi?",
        answer:
          "Çoğu durumda yüzeye uygun ürün ve mekanik temizlikle derzlerdeki kararma azaltılabilir. Derz yıpranmış veya dökülmüşse yenileme gerekir; derz yenileme kapsam dışıdır.",
      },
      {
        question: "Yalnızca banyo temizliği için hizmet alabilir miyim?",
        answer: "Evet. Banyo ve ıslak alanlar tek başına veya ev temizliğinin parçası olarak planlanabilir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "İlçe, banyo sayısı, yüzey türleri ve kireç-derz durumu hakkında kısa bilgi ile başlayabiliriz. Fotoğraf paylaşmanız kapsamı netleştirmeye yardımcı olur.",
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
    ],
    quoteService: "detayli",
    updatedAt: "2026-09-28",
  },
  "kalite-kontrol-teslim-sureci": {
    seoTitle: "Temizlikte Kalite Kontrol ve Teslim Süreci",
    metaDescription:
      "Quick Smart Clean hizmetlerinde keşif, yazılı kapsam, kontrol listesi ve teslim kontrolü nasıl işler? Temizlik hizmetinin kalite kontrol adımlarını inceleyin.",
    h1: "Temizlik Hizmetinde Kalite Kontrol ve Teslim Süreci",
    serviceName: "Kalite Kontrol ve Teslim Süreci",
    intro: [
      "Kalite kontrol ve teslim süreci, Quick Smart Clean'in tüm hizmetlerinde uyguladığı çalışma yaklaşımıdır: yapılacak işler önceden yazılı olarak belirlenir, uygulama bu kapsama göre yürütülür ve teslim, aynı kapsam üzerinden birlikte kontrol edilir.",
      "Bu yaklaşımın amacı, hizmet sonunda neyin yapıldığının ve neyin kapsam dışında kaldığının iki taraf için de açık olmasıdır.",
    ],
    sections: [
      {
        heading: "Keşif ve Yazılı Kapsam",
        paragraphs: [
          "Gerekli durumlarda alan yerinde incelenir; yüzey türleri, kirlilik seviyesi ve erişim koşulları değerlendirilir. Ardından yapılacak işler, kapsam dışı kalanlar, çalışma tarihi ve süresi yazılı olarak paylaşılır.",
          "Kapsamın önceden yazılması, teslim sırasında beklenti farklarının önüne geçer.",
        ],
      },
      {
        heading: "Kontrol Listesi",
        paragraphs: [
          "Yazılı kapsam, alan bazlı bir kontrol listesine dönüştürülür. Örneğin bir ev temizliğinde oda, mutfak ve banyo; bir ofiste çalışma alanları, ıslak alanlar ve ortak alanlar ayrı başlıklar halinde listelenir.",
        ],
        bullets: [
          "Her alan için yapılacak işler",
          "Yüzeye özel notlar (örneğin mermerde asitli ürün kullanılmaması)",
          "Dokunulmayacak alanlar ve eşyalar",
          "Kapsam dışı işler",
        ],
      },
      {
        heading: "Uygulama Sırasında",
        paragraphs: [
          "Ekip, belirlenen tarih ve saat aralığında kontrol listesine göre çalışır. Uygulama sırasında kapsam dışı bir ihtiyaç ortaya çıkarsa işe başlamadan önce müşteriyle görüşülür.",
        ],
      },
      {
        heading: "Teslim Kontrolü",
        bullets: [
          "Tamamlanan alanlar kontrol listesi üzerinden müşteri veya işletme sorumlusuyla birlikte gözden geçirilir.",
          "Eksik görülen noktalar not edilir ve teslim öncesinde tamamlanır.",
          "Düzenli hizmetlerde geri bildirimler bir sonraki uygulamanın planına eklenir.",
        ],
        cta: true,
      },
      {
        heading: "Düzenli Hizmetlerde Süreklilik",
        paragraphs: [
          "Günlük veya periyodik hizmetlerde aynı kontrol listesi her uygulamada kullanılır. Değişen ihtiyaçlara göre liste güncellenir; çok lokasyonlu işletmelerde tüm lokasyonlarda ortak liste uygulanır.",
        ],
        links: [
          { href: "/hizmetler/gunluk-periyodik-temizlik", label: "Günlük ve periyodik temizlik" },
          { href: "/hizmetler/operasyon-personel-yonetimi", label: "Temizlik operasyonu ve personel yönetimi" },
        ],
      },
    ],
    faqs: [
      {
        question: "Teslimde eksik bir nokta görürsem ne olur?",
        answer:
          "Eksik görülen noktalar kontrol listesine not edilir ve kapsam dahilindeyse teslim öncesinde tamamlanır.",
      },
      {
        question: "Kapsam neden yazılı olarak belirleniyor?",
        answer:
          "Yapılacak ve kapsam dışı kalan işlerin önceden yazılması, teslim sırasında beklenti farklarını önler ve kontrolü kolaylaştırır.",
      },
      {
        question: "Uygulama sırasında ek iş çıkarsa ne yapılıyor?",
        answer: "Kapsam dışı bir ihtiyaç ortaya çıkarsa işe başlamadan önce sizinle görüşülür.",
      },
      PAYMENT_FAQ,
      INSTALLMENT_FAQ,
    ],
    guides: [
      {
        href: "/makaleler/profesyonel-temizlikte-kalite-kontrol-teslim-sureci",
        label: "Profesyonel temizlikte kalite kontrol ve teslim süreci",
        description: "Kontrol listesi, saha değerlendirmesi ve geri bildirim adımları.",
      },
      {
        href: "/makaleler/kurumsal-temizlik-firmasi-secerken",
        label: "Kurumsal temizlik firması seçerken nelere dikkat edilmeli?",
        description: "Sözleşme, ekip yönetimi ve denetim kriterleri.",
      },
    ],
    quoteService: "diger",
    updatedAt: "2026-09-28",
  },
};
