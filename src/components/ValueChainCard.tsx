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
            <svg 
              viewBox="0 0 800 400" 
              className="w-full max-w-[800px] rounded-lg shadow-lg bg-white p-4"
            >
              {/* Üretim Süreci Akış Şeması */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#ea384c" />
                </marker>
              </defs>
              
              {/* Adım 1: Hammadde Hazırlama */}
              <rect x="50" y="50" width="120" height="60" rx="8" fill="#fff" stroke="#ea384c" strokeWidth="2"/>
              <text x="110" y="85" textAnchor="middle" fill="#000" fontSize="12">Hammadde Hazırlama</text>
              
              {/* Ok 1 */}
              <line x1="170" y1="80" x2="240" y2="80" stroke="#ea384c" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              
              {/* Adım 2: Şekillendirme */}
              <rect x="240" y="50" width="120" height="60" rx="8" fill="#fff" stroke="#ea384c" strokeWidth="2"/>
              <text x="300" y="85" textAnchor="middle" fill="#000" fontSize="12">Şekillendirme</text>
              
              {/* Ok 2 */}
              <line x1="360" y1="80" x2="430" y2="80" stroke="#ea384c" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              
              {/* Adım 3: Kaynak İşlemi */}
              <rect x="430" y="50" width="120" height="60" rx="8" fill="#fff" stroke="#ea384c" strokeWidth="2"/>
              <text x="490" y="85" textAnchor="middle" fill="#000" fontSize="12">Kaynak İşlemi</text>
              
              {/* Ok 3 */}
              <line x1="550" y1="80" x2="620" y2="80" stroke="#ea384c" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              
              {/* Adım 4: Kalite Kontrol */}
              <rect x="620" y="50" width="120" height="60" rx="8" fill="#fff" stroke="#ea384c" strokeWidth="2"/>
              <text x="680" y="85" textAnchor="middle" fill="#000" fontSize="12">Kalite Kontrol</text>
              
              {/* Ok 4 */}
              <line x1="680" y1="110" x2="680" y2="180" stroke="#ea384c" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              
              {/* Adım 5: Yüzey İşlemi */}
              <rect x="620" y="180" width="120" height="60" rx="8" fill="#fff" stroke="#ea384c" strokeWidth="2"/>
              <text x="680" y="215" textAnchor="middle" fill="#000" fontSize="12">Yüzey İşlemi</text>
              
              {/* Ok 5 */}
              <line x1="620" y1="210" x2="550" y2="210" stroke="#ea384c" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              
              {/* Adım 6: Son Kontrol */}
              <rect x="430" y="180" width="120" height="60" rx="8" fill="#fff" stroke="#ea384c" strokeWidth="2"/>
              <text x="490" y="215" textAnchor="middle" fill="#000" fontSize="12">Son Kontrol</text>
              
              {/* Ok 6 */}
              <line x1="430" y1="210" x2="360" y2="210" stroke="#ea384c" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              
              {/* Adım 7: Paketleme */}
              <rect x="240" y="180" width="120" height="60" rx="8" fill="#fff" stroke="#ea384c" strokeWidth="2"/>
              <text x="300" y="215" textAnchor="middle" fill="#000" fontSize="12">Paketleme</text>
              
              {/* Ok 7 */}
              <line x1="240" y1="210" x2="170" y2="210" stroke="#ea384c" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              
              {/* Adım 8: Sevkiyat */}
              <rect x="50" y="180" width="120" height="60" rx="8" fill="#fff" stroke="#ea384c" strokeWidth="2"/>
              <text x="110" y="215" textAnchor="middle" fill="#000" fontSize="12">Sevkiyat</text>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}