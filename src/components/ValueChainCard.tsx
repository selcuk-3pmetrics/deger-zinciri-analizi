import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ValueChainCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

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
        
        {title === "Üretim Süreci" && (
          <div className="mt-4 flex justify-center">
            <img 
              src="/lovable-uploads/ce185a19-15dc-4d18-9d4b-3feea29cbcc7.png" 
              alt="Üretim Süreci Şeması" 
              className="w-full max-w-[800px] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}