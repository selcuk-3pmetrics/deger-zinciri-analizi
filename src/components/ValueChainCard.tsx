import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DepartmentSection } from "./DepartmentSection";

interface ValueChainCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  policies: string[];
  uploadedData: any[];
}

export function ValueChainCard({ title, description, icon: Icon, index, uploadedData }: ValueChainCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTitleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAccordionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className={cn(
        "relative flex flex-col items-center justify-start p-8 rounded-xl backdrop-blur-sm border border-gray-200/50 shadow-lg transition-all duration-300 ease-in-out min-h-[420px]",
        isExpanded ? "bg-[#ea384c]/10 border-[#ea384c]/30" : "bg-white/80"
      )}
    >
      <div 
        className="cursor-pointer w-full flex flex-col items-center"
        onClick={handleTitleClick}
        role="button"
        tabIndex={0}
      >
        <div className="chip bg-[#ea384c] text-white">{`${index + 1}`}</div>
        <div className="p-2 rounded-full border border-[#ea384c]/30 mb-4">
          <Icon className="w-14 h-14 text-[#ea384c]" />
        </div>
        <h3 className="text-xl font-semibold text-[#000000] mb-4 text-center">{title}</h3>
      </div>

      <div
        className={cn(
          "overflow-y-auto transition-all duration-300 w-full",
          isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
        onClick={handleAccordionClick}
      >
        <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed animate-fade-in">
          {description}
        </p>

        <DepartmentSection valueChainStep={title} uploadedData={uploadedData} />
      </div>
    </div>
  );
}