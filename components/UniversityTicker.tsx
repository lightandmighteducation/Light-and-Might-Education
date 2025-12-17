import React from 'react';
import { University } from '../types';
import { MapPin } from 'lucide-react';

interface UniversityTickerProps {
  universities: University[];
}

const UniversityTicker: React.FC<UniversityTickerProps> = ({ universities }) => {
  return (
    <div className="w-full overflow-hidden bg-slate-100 border-t border-b border-slate-200 py-3">
      <div className="flex gap-8 animate-scroll whitespace-nowrap min-w-full hover:pause">
        {/* Duplicate list to create infinite loop effect */}
        {[...universities, ...universities, ...universities].map((uni, idx) => (
          <div key={`${uni.name}-${idx}`} className="flex items-center gap-2 text-slate-700 px-4">
            <span className="font-semibold text-indigo-900">{uni.name}</span>
            <span className="text-sm text-orange-600 flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {uni.location}
            </span>
            <span className="text-slate-300 mx-2">|</span>
          </div>
        ))}
      </div>
      <style>{`
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default UniversityTicker;