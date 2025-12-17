import React from 'react';
import { Country } from '../types';
import UniversityExplorer from './UniversityExplorer';
import { motion } from 'framer-motion';

interface CountrySectionProps {
  title: string;
  description: string;
  countries: Country[];
}

const countryCodeMap: Record<string, string> = {
  'usa': 'us',
  'uk': 'gb',
  'united kingdom': 'gb',
  'canada': 'ca',
  'australia': 'au',
  'germany': 'de',
  'france': 'fr',
  'europe': 'eu',
  'uzbekistan': 'uz',
  'russia': 'ru',
  'kazakhstan': 'kz',
  'kyrgyzstan': 'kg',
  'georgia': 'ge',
  'serbia': 'rs',
  'bosnia': 'ba'
};

const CountrySection: React.FC<CountrySectionProps> = ({ title, description, countries }) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl font-bold text-indigo-950 mb-4">{title}</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">{description}</p>
      </div>

      <div className="space-y-20 container mx-auto px-6">
        {countries.map((country, index) => {
          const flagCode = countryCodeMap[country.id.toLowerCase()];
          
          return (
            <motion.div 
              key={country.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden relative group">
                  <img 
                    src={country.image} 
                    alt={country.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                  
                  {/* Mobile Heading with Flag */}
                  <div className="absolute bottom-4 left-4 lg:hidden flex items-center gap-3">
                    {flagCode && (
                       <img 
                         src={`https://flagcdn.com/w40/${flagCode}.png`}
                         alt={`${country.name} flag`}
                         className="h-6 w-auto rounded shadow-sm opacity-90"
                       />
                    )}
                    <h3 className="text-3xl font-bold text-white">{country.name}</h3>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
                  
                  {/* Desktop Heading with Flag */}
                  <div className="hidden lg:flex items-center gap-4 mb-4">
                    {flagCode && (
                       <img 
                         src={`https://flagcdn.com/w80/${flagCode}.png`}
                         alt={`${country.name} flag`}
                         className="h-8 w-auto rounded shadow-sm border border-slate-200"
                       />
                    )}
                    <h3 className="text-3xl font-bold text-indigo-950">{country.name}</h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">{country.description}</p>
                  
                  {/* Searchable University List */}
                  <UniversityExplorer universities={country.universities} countryName={country.name} />
                  
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CountrySection;