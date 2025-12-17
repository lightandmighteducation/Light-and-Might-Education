import React, { useEffect } from 'react';
import CountrySection from './CountrySection';
import { STUDY_ABROAD_COUNTRIES } from '../constants';

const StudyAbroad: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
       <div className="bg-indigo-950 py-20 text-center text-white">
         <h1 className="text-5xl font-bold mb-4">Study Abroad Destinations</h1>
         <p className="text-xl text-indigo-200 max-w-2xl mx-auto">Explore top-tier universities in the world's most developed nations. Your global career starts here.</p>
       </div>
       <CountrySection 
         title="Popular Destinations" 
         description="We provide complete assistance for admissions, visas, and accommodation for these countries." 
         countries={STUDY_ABROAD_COUNTRIES} 
       />
    </div>
  );
};

export default StudyAbroad;