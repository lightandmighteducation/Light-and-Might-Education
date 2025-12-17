import React, { useState } from 'react';
import { University } from '../types';
import { Search, MapPin, Building2 } from 'lucide-react';

interface UniversityExplorerProps {
  universities: University[];
  countryName: string;
}

const UniversityExplorer: React.FC<UniversityExplorerProps> = ({ universities, countryName }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredUniversities = universities.filter(uni => 
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    uni.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full mt-6 bg-slate-50 rounded-xl p-6 border border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h4 className="font-bold text-indigo-950 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-orange-500" />
          Top Universities in {countryName}
        </h4>
        
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search university..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none text-sm"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((uni, idx) => (
            <div 
              key={idx} 
              className="bg-white p-3 rounded-lg border border-slate-200 hover:border-orange-300 hover:shadow-sm transition-all flex items-start justify-between group"
            >
              <div>
                <div className="font-semibold text-slate-800 text-sm group-hover:text-orange-600 transition-colors">
                  {uni.name}
                </div>
                <div className="text-xs text-slate-500 flex items-center mt-1">
                  <MapPin className="w-3 h-3 mr-1" /> {uni.location}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-4 text-slate-500 text-sm">
            No universities found matching "{searchTerm}"
          </div>
        )}
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default UniversityExplorer;