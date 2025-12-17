import React, { useEffect } from 'react';
import CountrySection from './CountrySection';
import { MBBS_COUNTRIES } from '../constants';

const MBBSAbroad: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
       <div className="bg-indigo-950 py-20 text-center text-white">
         <h1 className="text-5xl font-bold mb-4">Study MBBS Abroad</h1>
         <p className="text-xl text-indigo-200 max-w-2xl mx-auto">Affordable, high-quality medical education in WHO/NMC recognized universities. No donation, english medium.</p>
       </div>
       <CountrySection 
         title="Top MBBS Destinations" 
         description="Choose from a wide range of countries offering world-class medical infrastructure and clinical exposure." 
         countries={MBBS_COUNTRIES} 
       />
    </div>
  );
};

export default MBBSAbroad;