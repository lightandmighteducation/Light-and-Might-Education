import React from 'react';
import { COMPANY_INFO } from '../constants';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-950 mb-6">About Light & Might Education</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We are a premier educational consultancy dedicated to mentoring the leaders of tomorrow. With a focus on integrity, transparency, and excellence, we bridge the gap between ambitious students and world-class institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
            alt="Our Team" 
            className="rounded-2xl shadow-2xl"
          />
          <div>
             <h2 className="text-3xl font-bold text-indigo-950 mb-6">Our Mission</h2>
             <p className="text-slate-600 mb-6 leading-relaxed">
               At Light & Might Education, our mission is to empower students by providing them with the most accurate, comprehensive, and personalized educational guidance. We believe that every student has unique potential, and our role is to light the path to their success.
             </p>
             <h2 className="text-3xl font-bold text-indigo-950 mb-6">Our Vision</h2>
             <p className="text-slate-600 leading-relaxed">
               To be the most trusted global education partner, recognized for our ethical practices and high success rates in placing students in top universities across the USA, UK, Europe, and for MBBS programs abroad.
             </p>
          </div>
        </div>

        <div className="bg-indigo-950 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Visit Us</h2>
          <p className="text-xl mb-2">{COMPANY_INFO.address}</p>
          <p className="text-xl text-orange-400">Call: +91 {COMPANY_INFO.phone.join(', +91 ')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;