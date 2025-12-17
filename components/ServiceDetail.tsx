import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-blue-900 text-white py-16 relative overflow-hidden">
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-800 opacity-50 blur-3xl"></div>
         <div className="container mx-auto px-6 relative z-10">
           <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
             <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
           </Link>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             <div className="flex items-center gap-4 mb-4">
               <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                 {service.icon}
               </div>
               <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
             </div>
             <p className="text-xl text-blue-100 max-w-2xl">{service.description}</p>
           </motion.div>
         </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.longDescription}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {step.step}
                      </div>
                      {idx !== service.process.length - 1 && (
                        <div className="w-0.5 h-full bg-blue-100 my-2 group-hover:bg-blue-200 transition-colors"></div>
                      )}
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Start?</h3>
                <p className="text-gray-600 mb-6">
                  Book a free consultation with our experts to discuss your {service.title} needs.
                </p>
                <div className="space-y-3">
                  <a href="#contact" className="block w-full text-center py-3 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                    Book Free Consultation
                  </a>
                  <a href="tel:+18001234567" className="block w-full text-center py-3 px-6 bg-white border border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Call Us Now
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl text-white">
                <h4 className="font-bold text-lg mb-2">Need a Quick Answer?</h4>
                <p className="text-indigo-100 text-sm mb-4">Try our AI Counselor for instant answers to your questions about {service.title}.</p>
                <div className="text-xs bg-white/20 p-2 rounded inline-block">
                  Look for the chat icon →
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;