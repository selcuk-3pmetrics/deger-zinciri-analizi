import React, { useRef } from 'react';
import * as XLSX from 'xlsx';
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ExcelUploaderProps {
  onDataUploaded: (data: any[]) => void;
}

export function ExcelUploader({ onDataUploaded }: ExcelUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const workbook = XLSX.read(event.target?.result, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          
          onDataUploaded(data);
          toast({
            title: "Excel başarıyla yüklendi",
            description: "Veriler başarıyla içe aktarıldı.",
          });
        } catch (error) {
          toast({
            title: "Hata",
            description: "Excel dosyası yüklenirken bir hata oluştu.",
            variant: "destructive",
          });
        }
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className="absolute top-4 right-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept=".xlsx,.xls"
        className="hidden"
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-2"
      >
        <Upload className="w-4 h-4" />
        Excel Yükle
      </Button>
    </div>
  );
}