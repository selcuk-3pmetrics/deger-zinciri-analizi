import { Box, Factory, Microscope, CheckSquare, Truck, BarChart3, Users, DollarSign } from "lucide-react";
import { ValueChainCard } from "./ValueChainCard";

const valueChainSteps = [
  {
    title: "Hammadde Temini",
    description: "Erciyas Çelik Boru'nun üretim süreçleri için ihtiyaç duyduğu yüksek kaliteli çelik hammaddelerin güvenilir tedarikçilerden temin edilmesi sürecidir.",
    icon: Box
  },
  {
    title: "Ar-Ge",
    description: "Rekabetçi bir avantaj sağlamak için yenilikçi çözümlerin geliştirilmesi, ürünlerin performansını ve dayanıklılığının artırılması ve müşteri taleplerine göre ürünlerin optimize edilmesi sürecidir.",
    icon: Microscope
  },
  {
    title: "Üretim Süreci",
    description: "Yüksek kapasiteli ve modern üretim tesislerinde çeşitli üretim adımlarından geçerek çelik borular üretilmesi sürecidir.",
    icon: Factory
  },
  {
    title: "Kalite Kontrol",
    description: "Üretim sonrası ürünlerin ulusal ve uluslararası standartlara uygunluğunu sağlamak amacıyla kapsamlı testler ve denetimlerin yapması sürecidir.",
    icon: CheckSquare
  },
  {
    title: "Lojistik",
    description: "Ürünlerin müşteri lokasyonlarına farklı taşıma yöntemleri kullanılarak zamanında ve güvenli bir şekilde teslim edilmesi sürecidir.",
    icon: Truck
  },
  {
    title: "Satış ve Pazarlama",
    description: "Ulusal ve uluslararası pazarlardaki konumunu güçlendirmek için aktif satış ve pazarlama stratejisinin yürütüldüğü süreçtir.",
    icon: BarChart3
  },
  {
    title: "Müşteri İlişkileri",
    description: "Satış sonrası destek, özel müşteri taleplerine uygun hizmet sunma ve müşteri memnuniyetini artırmaya yönelik sürekli iletişimin sağlandığı süreçtir.",
    icon: Users
  },
  {
    title: "Finans ve Hukuk",
    description: "Üretim ve satış süreçlerinin finansal olarak sürdürülebilir olması için mali analizler ve finansal planlamaların yapıldığı süreçtir.",
    icon: DollarSign
  }
];

export function ValueChain() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <img 
            src="/lovable-uploads/0c251999-a44a-4777-a2d2-3f4611be3d6d.png" 
            alt="Erciyas Logo" 
            className="h-40 mb-12"
          />
          <h1 className="text-4xl font-bold text-[#000000] mb-2">
            Değer Zinciri
          </h1>
          <p className="text-lg text-[#ea384c] max-w-2xl mx-auto">
            Kapsamlı Değer Zinciri Analizi
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {valueChainSteps.slice(0, 4).map((step, index) => (
            <ValueChainCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {valueChainSteps.slice(4, 8).map((step, index) => (
            <ValueChainCard
              key={index + 4}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index + 4}
            />
          ))}
        </div>
      </div>
    </div>
  );
}