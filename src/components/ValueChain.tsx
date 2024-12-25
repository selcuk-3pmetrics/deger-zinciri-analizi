import { Box, Factory, Microscope, CheckSquare, Truck, BarChart3, Users, DollarSign } from "lucide-react";
import { ValueChainCard } from "./ValueChainCard";
import { ExcelUploader } from "./ExcelUploader";
import { useState } from "react";

const valueChainSteps = [
  {
    title: "Hammadde Temini",
    description: "Erciyas Çelik Boru, yüksek kaliteli çelik borular üretmek için hammadde temininde tedarikçi ilişkilerine büyük önem verir. Çelik ve diğer metal bileşenler, kalite standartlarına uygun olarak seçilir. Tedarikçilerden gelen malzemelerin sertifikasyon ve uygunluk kontrolü sağlanır.",
    icon: Box,
    policies: ["Tedarikçi Seçim ve Değerlendirme Politikası", "Kalite Kontrol Politikası", "Sürdürülebilir Tedarik Zinciri Politikası"]
  },
  {
    title: "Ar-Ge",
    description: "Yenilikçi çözümler geliştirmek ve müşteri ihtiyaçlarına uygun ürünler sunmak için Ar-Ge çalışmaları yürütülür. Üretimde verimliliği artırmak, dayanıklılığı yüksek ve çevre dostu borular tasarlamak temel hedefler arasındadır. Erciyas Çelik Boru, sektördeki trendleri takip ederek teknolojik yenilikleri süreçlerine entegre eder.",
    icon: Microscope,
    policies: ["Ar-Ge ve İnovasyon Politikası", "Fikri Mülkiyet Hakları Politikası", "Sürdürülebilir Ürün Geliştirme Politikası"]
  },
  {
    title: "Üretim Süreci",
    description: "Hammaddeler, ileri teknoloji üretim tesislerinde şekillendirilerek çelik boru haline getirilir. Üretim süreci, kalite kontrol prosedürlerine uygun olarak sürekli denetlenir. Ürünlerin standartlara uygunluğu, dayanıklılığı ve performansı üretimin her aşamasında titizlikle test edilir.",
    icon: Factory,
    policies: ["Üretim Kalite Politikası", "İş Sağlığı ve Güvenliği Politikası", "Çevre Yönetim Politikası"]
  },
  {
    title: "Kalite Kontrol",
    description: "Üretilen çelik borular, uluslararası kalite standartlarına uygunluğunu doğrulamak için kapsamlı testlerden geçirilir. Mekanik dayanıklılık, yüzey pürüzsüzlüğü, korozyon direnci gibi parametreler dikkatle kontrol edilir. Kalite kontrol ekibi, ürünlerin müşteri beklentilerini karşılayacak şekilde teslim edilmesini sağlar.",
    icon: CheckSquare,
    policies: ["Kalite Güvence Politikası", "Test ve Sertifikasyon Politikası", "Ürün Güvenliği Politikası"]
  },
  {
    title: "Lojistik",
    description: "Ürünlerin müşterilere zamanında ve güvenli bir şekilde ulaşmasını sağlamak için lojistik süreçler optimize edilmiştir. Erciyas Çelik Boru, yurt içi ve yurt dışı dağıtım ağını etkin bir şekilde yönetir ve ürünlerin hasarsız şekilde teslimatını garanti eder.",
    icon: Truck,
    policies: ["Lojistik ve Dağıtım Politikası", "Taşıma Güvenliği Politikası", "Müşteri Teslimat Politikası"]
  },
  {
    title: "Satış ve Pazarlama",
    description: "Erciyas Çelik Boru, müşteri ihtiyaçlarını analiz ederek uygun çözümler sunar. Sektördeki rekabet gücünü artırmak için satış ve pazarlama stratejileri geliştirilir. Şirketin satış ekibi, müşterilere teknik destek sağlarken, pazarlama ekibi sektörel etkinliklerde markayı temsil eder.",
    icon: BarChart3,
    policies: ["Satış ve Pazarlama Politikası", "Müşteri İlişkileri Politikası", "Marka Yönetim Politikası"]
  },
  {
    title: "Müşteri İlişkileri",
    description: "Erciyas Çelik Boru, müşteri memnuniyetini öncelik olarak görür. Satış sonrası hizmetler, teknik destek ve geri bildirim süreçleriyle müşterileriyle güçlü ve uzun vadeli ilişkiler kurmayı hedefler. Talepler doğrultusunda özelleştirilmiş çözümler sunar.",
    icon: Users,
    policies: ["Müşteri Memnuniyeti Politikası", "Satış Sonrası Hizmet Politikası", "Veri Gizliliği Politikası"]
  },
  {
    title: "Finans ve Hukuk",
    description: "Şirketin mali süreçleri, bütçe yönetimi ve finansal risk analizi gibi konularda uzman bir ekip tarafından yönetilir. Hukuk departmanı ise şirketin sözleşmelerini, tedarikçi ilişkilerini ve yasal uygunluğunu titizlikle takip eder. Erciyas Çelik Boru, sürdürülebilir ve etik bir iş modeli benimser.",
    icon: DollarSign,
    policies: ["Finansal Yönetim Politikası", "Risk Yönetim Politikası", "Kurumsal Yönetim Politikası"]
  }
];

export function ValueChain() {
  const [uploadedData, setUploadedData] = useState<any[]>([]);

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <img 
            src="/lovable-uploads/0c251999-a44a-4777-a2d2-3f4611be3d6d.png" 
            alt="Erciyas Logo" 
            className="h-48 mb-6"
          />
          <h1 className="text-4xl font-bold text-[#000000] mb-2">
            Değer Zinciri
          </h1>
          <p className="text-lg text-[#ea384c] max-w-2xl mx-auto">
            Kapsamlı Değer Zinciri Analizi
          </p>
        </div>
        <ExcelUploader onDataUploaded={setUploadedData} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {valueChainSteps.slice(0, 4).map((step, index) => (
            <ValueChainCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
              policies={step.policies}
              uploadedData={uploadedData}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {valueChainSteps.slice(4, 8).map((step, index) => (
            <ValueChainCard
              key={index + 4}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index + 4}
              policies={step.policies}
              uploadedData={uploadedData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}