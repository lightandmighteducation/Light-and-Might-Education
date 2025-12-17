import React from 'react';
import { UserCheck, Globe2, TrendingUp, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Expert Counselors",
    description: "Our team consists of certified professionals with over a decade of experience in international education counseling.",
    icon: <UserCheck className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Global Network",
    description: "We have established direct partnerships with 500+ top-tier universities across 15+ countries.",
    icon: <Globe2 className="w-8 h-8 text-purple-600" />
  },
  {
    title: "Proven Success",
    description: "Boasting a 98% visa success rate and thousands of successful university placements worldwide.",
    icon: <TrendingUp className="w-8 h-8 text-green-600" />
  },
  {
    title: "End-to-End Support",
    description: "We don't just stop at admissions. We help with loans, visas, accommodation, and pre-departure briefings.",
    icon: <HeartHandshake className="w-8 h-8 text-red-500" />
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Light & Might Education?</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Light & Might Education, we go beyond traditional consulting to ensure your study abroad journey is smooth, successful, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;