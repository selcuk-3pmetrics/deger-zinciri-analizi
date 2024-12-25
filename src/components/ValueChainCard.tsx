import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ValueChainCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const getStakeholders = (title: string) => {
  const stakeholderMap: { [key: string]: string[] } = {
    "Hammadde Temini": ["Tedarikçiler", "Lojistik Firmaları", "Kalite Kontrol Ekibi"],
    "Ar-Ge": ["Mühendisler", "Teknik Ekip", "Üniversiteler", "Araştırma Kurumları"],
    "Üretim Süreci": ["Üretim Personeli", "Kalite Kontrol Ekibi", "Teknik Ekip", "İş Güvenliği Uzmanları"],
    "Kalite Kontrol": ["Kalite Kontrol Ekibi", "Laboratuvar Personeli", "Sertifikasyon Kurumları"],
    "Lojistik": ["Nakliye Firmaları", "Depo Personeli", "Gümrük Müşavirleri"],
    "Satış ve Pazarlama": ["Satış Ekibi", "Müşteriler", "Distribütörler", "Pazarlama Ajansları"],
    "Müşteri İlişkileri": ["Müşteri Hizmetleri Ekibi", "Teknik Destek Ekibi", "Müşteriler"],
    "Finans ve Hukuk": ["Finans Ekibi", "Hukuk Danışmanları", "Denetçiler", "Bankalar"]
  };
  return stakeholderMap[title] || [];
};

const getRisks = (title: string) => {
  const riskMap: { [key: string]: string[] } = {
    "Hammadde Temini": ["Tedarik zinciri kesintileri", "Hammadde fiyat dalgalanmaları", "Kalite tutarsızlıkları"],
    "Ar-Ge": ["Teknolojik değişimlere uyum sağlayamama", "Yenilik eksikliği", "Kaynak yetersizliği"],
    "Üretim Süreci": ["Ekipman arızaları", "İş kazaları", "Üretim kesintileri"],
    "Kalite Kontrol": ["Hatalı ürün tespiti", "Standartlara uyumsuzluk", "Test ekipmanı arızaları"],
    "Lojistik": ["Teslimat gecikmeleri", "Nakliye hasarları", "Maliyet artışları"],
    "Satış ve Pazarlama": ["Pazar daralması", "Rekabet artışı", "İtibar riskleri"],
    "Müşteri İlişkileri": ["Müşteri memnuniyetsizliği", "İletişim kopuklukları", "Şikayet yönetimi"],
    "Finans ve Hukuk": ["Finansal dalgalanmalar", "Yasal değişiklikler", "Vergi riskleri"]
  };
  return riskMap[title] || [];
};

const getOpportunities = (title: string) => {
  const opportunityMap: { [key: string]: string[] } = {
    "Hammadde Temini": ["Yeni tedarikçi ilişkileri", "Alternatif malzeme kullanımı", "Stok optimizasyonu"],
    "Ar-Ge": ["Yeni ürün geliştirme", "Verimlilik artışı", "Teknolojik yenilikler"],
    "Üretim Süreci": ["Otomasyon fırsatları", "Enerji verimliliği", "Kapasite artışı"],
    "Kalite Kontrol": ["Yeni test yöntemleri", "Kalite standartları geliştirme", "Sertifikasyon fırsatları"],
    "Lojistik": ["Rota optimizasyonu", "Dijital takip sistemleri", "Depolama iyileştirmeleri"],
    "Satış ve Pazarlama": ["Yeni pazarlar", "Dijital pazarlama", "Müşteri segmentasyonu"],
    "Müşteri İlişkileri": ["CRM sistemleri", "Müşteri geri bildirimleri", "Hizmet çeşitlendirme"],
    "Finans ve Hukuk": ["Yeni finansman kaynakları", "Vergi avantajları", "Stratejik ortaklıklar"]
  };
  return opportunityMap[title] || [];
};

const getMaterialityTopics = (title: string) => {
  const materialityMap: { [key: string]: string[] } = {
    "Hammadde Temini": ["Sürdürülebilir tedarik", "Kaynak verimliliği", "Tedarikçi denetimi"],
    "Ar-Ge": ["İnovasyon yönetimi", "Ürün güvenliği", "Sürdürülebilir tasarım"],
    "Üretim Süreci": ["İş sağlığı ve güvenliği", "Çevresel etki", "Enerji yönetimi"],
    "Kalite Kontrol": ["Ürün kalitesi", "Müşteri sağlığı", "Standartlara uyum"],
    "Lojistik": ["Karbon ayak izi", "Taşıma güvenliği", "Atık yönetimi"],
    "Satış ve Pazarlama": ["Müşteri memnuniyeti", "Marka değeri", "Pazar payı"],
    "Müşteri İlişkileri": ["Müşteri gizliliği", "Hizmet kalitesi", "İletişim şeffaflığı"],
    "Finans ve Hukuk": ["Finansal sürdürülebilirlik", "Yasal uyum", "Risk yönetimi"]
  };
  return materialityMap[title] || [];
};

export function ValueChainCard({ title, description, icon: Icon, index }: ValueChainCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "value-chain-card cursor-pointer",
        isExpanded && "z-10"
      )}
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
    >
      <div className="chip bg-[#ea384c] text-white">{`${index + 1}`}</div>
      <Icon className="value-chain-icon text-[#ea384c]" />
      <h3 className="value-chain-title text-[#000000]">{title}</h3>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="value-chain-description animate-fade-in">
          {description}
        </p>
        
        <div className="mt-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="stakeholders">
              <AccordionTrigger className="text-sm font-medium">İlgili Paydaşlar</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-4 text-sm text-gray-600">
                  {getStakeholders(title).map((stakeholder, idx) => (
                    <li key={idx}>{stakeholder}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="risks">
              <AccordionTrigger className="text-sm font-medium">Riskler</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-4 text-sm text-gray-600">
                  {getRisks(title).map((risk, idx) => (
                    <li key={idx}>{risk}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="opportunities">
              <AccordionTrigger className="text-sm font-medium">Fırsatlar</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-4 text-sm text-gray-600">
                  {getOpportunities(title).map((opportunity, idx) => (
                    <li key={idx}>{opportunity}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="materiality">
              <AccordionTrigger className="text-sm font-medium">Önemlilik Konuları</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-4 text-sm text-gray-600">
                  {getMaterialityTopics(title).map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}