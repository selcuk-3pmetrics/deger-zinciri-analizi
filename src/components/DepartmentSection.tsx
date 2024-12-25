import React, { useState } from 'react';
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
  const getRisksForDepartment = (department: string) => {
    if (!uploadedData) return [];
    return uploadedData
      .filter(row => row.department === department && row.valueChain === valueChainStep)
      .map(row => row.risk);
  };

  const getOpportunitiesForDepartment = (department: string) => {
    // This would be similar to risks but with opportunities column
    // For now returning placeholder data
    return ["Fırsat 1", "Fırsat 2"];
  };

  return (
    <div className="w-full mt-4">
      <h4 className="text-lg font-semibold mb-3">Departmanlar</h4>
      <Accordion type="single" collapsible className="w-full">
        {departments.map((department, index) => (
          <AccordionItem key={index} value={`department-${index}`}>
            <AccordionTrigger className="text-sm font-medium">
              {department}
            </AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="risks">
                  <AccordionTrigger className="text-sm">Riskler</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-4 text-sm text-gray-600">
                      {getRisksForDepartment(department).map((risk, idx) => (
                        <li key={idx} className="mb-2">{risk}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="opportunities">
                  <AccordionTrigger className="text-sm">Fırsatlar</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-4 text-sm text-gray-600">
                      {getOpportunitiesForDepartment(department).map((opportunity, idx) => (
                        <li key={idx} className="mb-2">{opportunity}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}