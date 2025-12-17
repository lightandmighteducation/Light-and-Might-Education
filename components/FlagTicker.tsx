import React from 'react';

const flags = [
  { code: 'us', name: 'USA' },
  { code: 'gb', name: 'UK' },
  { code: 'ca', name: 'Canada' },
  { code: 'au', name: 'Australia' },
  { code: 'de', name: 'Germany' },
  { code: 'fr', name: 'France' },
  { code: 'ru', name: 'Russia' },
  { code: 'uz', name: 'Uzbekistan' },
  { code: 'kz', name: 'Kazakhstan' },
  { code: 'kg', name: 'Kyrgyzstan' },
  { code: 'ge', name: 'Georgia' },
  { code: 'rs', name: 'Serbia' },
  { code: 'ba', name: 'Bosnia' },
];

const FlagTicker: React.FC = () => {
  return (
    <div className="w-full bg-indigo-950 border-t border-indigo-900 py-6 overflow-hidden">
       <div className="container mx-auto px-6 mb-4 text-center">
         <p className="text-orange-400 text-sm font-bold tracking-widest uppercase">Global Presence in 15+ Countries</p>
       </div>
       <div className="flex gap-12 animate-scroll whitespace-nowrap min-w-full">
        {[...flags, ...flags].map((flag, idx) => (
          <div key={`${flag.code}-${idx}`} className="flex flex-col items-center gap-2 group cursor-default">
            <div className="w-16 h-10 rounded shadow-md overflow-hidden relative transform group-hover:scale-110 transition-transform duration-300">
               <img 
                 src={`https://flagcdn.com/w160/${flag.code}.png`} 
                 alt={flag.name}
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <span className="text-indigo-200 text-xs font-medium">{flag.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
            animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default FlagTicker;