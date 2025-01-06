import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface DepartmentSectionProps {
  valueChainStep: string;
  uploadedData: {
    risks: any[];
    materiality: any[];
    opportunities: any[];
  };
}

interface DataItem {
  department: string;
  risk?: string;
  opportunity?: string;
  materiality?: string;
  probability?: string;
  frequency?: string;
  severity?: string;
  riskScore?: string;
  financialImpact?: string;
  category?: string;
  description?: string;
}

const departments = [
  "Yönetim-Strateji",
  "İç Denetim",
  "Fabrika Yönetimi",
  "Kalite",
  "Satış",
  "Satın Alma",
  "Lojistik",
  "Finans",
  "İnsan Kaynakları",
  "Bilgi Teknolojileri",
  "Kurumsal İletişim",
  "Çevre Yönetimi"
];

export function DepartmentSection({ valueChainStep, uploadedData }: DepartmentSectionProps) {
  const getItemsForDepartment = (department: string, type: 'risks' | 'materiality' | 'opportunities'): DataItem[] => {
    if (!uploadedData[type] || !Array.isArray(uploadedData[type])) return [];
    
    const items = uploadedData[type].filter(row => 
      row.department === department && 
      row.valueChainStep === valueChainStep
    );

    if (type === 'risks') {
      return items.sort((a, b) => {
        const scoreA = parseFloat(a.riskScore) || 0;
        const scoreB = parseFloat(b.riskScore) || 0;
        return scoreB - scoreA;
      });
    }

    return items;
  };

  const renderRiskItem = (item: DataItem, idx: number) => (
    <li key={idx} className="border-l-2 border-[#ea384c] pl-4">
      <p className="text-sm text-gray-800 font-medium mb-2">{item.risk}</p>
      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
        {item.probability && (
          <div>
            <span className="font-medium">Olasılık:</span> {item.probability}
          </div>
        )}
        {item.frequency && (
          <div>
            <span className="font-medium">Sıklık:</span> {item.frequency}
          </div>
        )}
        {item.severity && (
          <div>
            <span className="font-medium">Şiddet:</span> {item.severity}
          </div>
        )}
        {item.riskScore && (
          <div>
            <span className="font-medium">Risk Skoru:</span> {parseFloat(item.riskScore).toFixed(2)}
          </div>
        )}
        {item.financialImpact && (
          <div>
            <span className="font-medium">Finansal Etki:</span> {item.financialImpact}
          </div>
        )}
      </div>
    </li>
  );

  const renderCategoryItem = (item: DataItem, idx: number) => (
    <li key={idx} className="border-l-2 border-[#ea384c] pl-4">
      <div className="mb-2">
        <p className="text-sm text-gray-800 font-medium">{item.category}</p>
        <p className="text-sm text-gray-600 mt-1">{Object.values(item)[2]}</p>
      </div>
    </li>
  );

  return (
    <div className="w-full mt-4">
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="risks">
          <AccordionTrigger className="text-lg font-semibold">
            Riskler
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="w-full">
              {departments.map((department, index) => {
                const risks = getItemsForDepartment(department, 'risks');
                if (risks.length === 0) return null;

                return (
                  <AccordionItem key={index} value={`department-risks-${index}`}>
                    <AccordionTrigger className="text-sm font-medium">
                      {department}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-4">
                        {risks.map((item, idx) => renderRiskItem(item, idx))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="opportunities">
          <AccordionTrigger className="text-lg font-semibold">
            Fırsatlar
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="w-full">
              {departments.map((department, index) => {
                const opportunities = getItemsForDepartment(department, 'opportunities');
                if (opportunities.length === 0) return null;

                return (
                  <AccordionItem key={index} value={`department-opportunities-${index}`}>
                    <AccordionTrigger className="text-sm font-medium">
                      {department}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-4">
                        {opportunities.map((item, idx) => renderCategoryItem(item, idx))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="materiality">
          <AccordionTrigger className="text-lg font-semibold">
            Önemlilik Maddeleri
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="w-full">
              {departments.map((department, index) => {
                const materialityItems = getItemsForDepartment(department, 'materiality');
                if (materialityItems.length === 0) return null;

                return (
                  <AccordionItem key={index} value={`department-materiality-${index}`}>
                    <AccordionTrigger className="text-sm font-medium">
                      {department}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-4">
                        {materialityItems.map((item, idx) => renderCategoryItem(item, idx))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}