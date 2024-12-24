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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Değer Zinciri
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Erciyas Çelik Boru'nun kapsamlı değer zinciri süreçleri
          </p>
        </div>
        <div className="value-chain-container">
          {valueChainSteps.map((step, index) => (
            <ValueChainCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}