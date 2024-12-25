import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface DepartmentSectionProps {
  valueChainStep: string;
  uploadedData: any[];
}

interface RiskData {
  department: string;
  risk: string;
  probability?: string;
  frequency?: string;
  severity?: string;
  riskScore?: string;
  financialImpact?: string;
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
  const getRisksForDepartment = (department: string): RiskData[] => {
    if (!uploadedData || !Array.isArray(uploadedData)) return [];
    
    const risks = uploadedData.filter(row => 
      row.department === department && 
      row.valueChainStep === valueChainStep
    );

    // Sort risks by riskScore in descending order
    return risks.sort((a, b) => {
      const scoreA = parseFloat(a.riskScore) || 0;
      const scoreB = parseFloat(b.riskScore) || 0;
      return scoreB - scoreA;
    });
  };

  return (
    <div className="w-full mt-4">
      <h4 className="text-lg font-semibold mb-3">Riskler</h4>
      <Accordion type="single" collapsible className="w-full">
        {departments.map((department, index) => {
          const risks = getRisksForDepartment(department);
          if (risks.length === 0) return null;

          return (
            <AccordionItem key={index} value={`department-${index}`}>
              <AccordionTrigger className="text-sm font-medium">
                {department}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-4">
                  {risks.map((riskData, idx) => (
                    <li key={idx} className="border-l-2 border-[#ea384c] pl-4">
                      <p className="text-sm text-gray-800 font-medium mb-2">{riskData.risk}</p>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                        {riskData.probability && (
                          <div>
                            <span className="font-medium">Olasılık:</span> {riskData.probability}
                          </div>
                        )}
                        {riskData.frequency && (
                          <div>
                            <span className="font-medium">Sıklık:</span> {riskData.frequency}
                          </div>
                        )}
                        {riskData.severity && (
                          <div>
                            <span className="font-medium">Şiddet:</span> {riskData.severity}
                          </div>
                        )}
                        {riskData.riskScore && (
                          <div>
                            <span className="font-medium">Risk Skoru:</span> {riskData.riskScore}
                          </div>
                        )}
                        {riskData.financialImpact && (
                          <div>
                            <span className="font-medium">Finansal Etki:</span> {riskData.financialImpact}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}