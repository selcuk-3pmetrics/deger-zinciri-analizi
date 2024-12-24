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
      <div className="chip">{`${index + 1}`}</div>
      <Icon className="value-chain-icon" />
      <h3 className="value-chain-title">{title}</h3>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="value-chain-description animate-fade-in">
          {description}
        </p>
      </div>
    </div>
  );
}