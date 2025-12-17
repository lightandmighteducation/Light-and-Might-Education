import React, { useEffect } from 'react';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      
      {/* Destinations Preview Banner */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-indigo-950 mb-8">Explore The World</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {['USA', 'UK', 'Canada', 'Russia'].map(c => (
                <div key={c} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow font-bold text-slate-700 text-xl border border-slate-100">{c}</div>
              ))}
           </div>
           <Link to="/study-abroad" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 text-lg group">
             View All Destinations <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
      </section>

      <Testimonials />
      
      {/* Call to Action for Contact */}
      <section className="py-24 bg-indigo-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Shape Your Future?</h2>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">Get in touch with our experts today for a personalized roadmap to your dream university.</p>
          <Link to="/contact" className="inline-block bg-orange-600 text-white font-bold px-10 py-5 rounded-full hover:bg-orange-700 transition-all hover:scale-105 shadow-xl shadow-orange-600/30 text-lg">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;