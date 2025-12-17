import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, GraduationCap, Globe, CheckCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STUDY_ABROAD_COUNTRIES } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize coordinates from -0.5 to 0.5
    const xPos = (clientX / innerWidth) - 0.5;
    const yPos = (clientY / innerHeight) - 0.5;
    
    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  // Parallax Transforms - Elements move at different speeds/directions
  const bgX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);
  
  const studentX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const studentY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  
  const badge1X = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
  const badge1Y = useTransform(smoothY, [-0.5, 0.5], [30, -30]);
  
  const badge2X = useTransform(smoothX, [-0.5, 0.5], [-25, 25]);
  const badge2Y = useTransform(smoothY, [-0.5, 0.5], [-25, 25]);

  // Scroll Parallax
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const imageY = useTransform(scrollY, [0, 500], [0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  // Specific flags for rolling animation: USA, UK, Canada, Australia
  const flags = [
    { code: 'us', name: 'USA' },
    { code: 'gb', name: 'UK' },
    { code: 'ca', name: 'Canada' },
    { code: 'au', name: 'Australia' },
    { code: 'de', name: 'Germany' },
    { code: 'fr', name: 'France' },
    { code: 'ie', name: 'Ireland' },
    { code: 'nz', name: 'New Zealand' },
  ];

  // Get top universities from these specific countries
  const targetCountryIds = ['usa', 'uk', 'canada', 'australia'];
  const universities = STUDY_ABROAD_COUNTRIES
    .filter(country => targetCountryIds.includes(country.id))
    .flatMap(country => country.universities.slice(0, 4)); // Top 4 from each

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-indigo-950 flex flex-col pt-20 overflow-hidden"
    >
      
      {/* Background Gradients - Parallax Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 z-0"></div>
      
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"
      />
      <motion.div 
        style={{ x: useTransform(bgX, v => -v), y: useTransform(bgY, v => -v) }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col lg:flex-row items-center gap-12 py-12">
        
        {/* Left: Text Content */}
        <motion.div style={{ y: textY }} className="lg:w-1/2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-orange-400 uppercase bg-indigo-900/50 border border-orange-500/30 rounded-full backdrop-blur-sm">
                #1 Education Consultancy
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-xl"
            >
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                Global Potential
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl"
            >
              We bridge the gap between your dreams and global reality. Expert guidance for MBBS abroad, Study Abroad in top destinations, and premier Test Prep.
            </motion.p>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30 group hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/study-abroad"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 backdrop-blur-sm transition-colors hover:scale-105"
              >
                Explore Countries
              </Link>
            </motion.div>

            {/* Stats Row */}
             <motion.div 
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-6 w-full max-w-lg border-t border-white/10 pt-6"
            >
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Universities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">99%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Visa Success</div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div style={{ y: imageY }} className="lg:w-1/2 w-full flex justify-center relative">
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
             style={{ x: studentX, y: studentY }}
             className="relative w-full max-w-lg"
           >
              {/* Decorative Circle Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-10"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                alt="Smiling Indian Female Student" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop";
                }}
                className="rounded-3xl shadow-2xl border-4 border-white/10 w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
              />

              {/* Floating Badge 1 - Moves more for depth */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{ x: badge1X, y: badge1Y }}
                transition={{ delay: 1.2 }}
                className="absolute top-10 -left-6 bg-white/95 backdrop-blur shadow-xl p-4 rounded-2xl flex items-center gap-3 hidden sm:flex z-20"
              >
                <div className="bg-orange-100 p-2 rounded-full">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Study in USA/UK</p>
                  <p className="text-xs text-gray-500">Admissions Open</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Moves oppositely for depth */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{ x: badge2X, y: badge2Y }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 -right-6 bg-white/95 backdrop-blur shadow-xl p-4 rounded-2xl flex items-center gap-3 hidden sm:flex z-20"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Visa Approved</p>
                  <p className="text-xs text-gray-500">Trusted Process</p>
                </div>
              </motion.div>

           </motion.div>
        </motion.div>
      </div>

      {/* Tickers Integration */}
      <div className="relative z-10 w-full flex flex-col mt-auto">
        {/* Flags Ticker */}
        <div className="bg-indigo-950/80 backdrop-blur-sm border-t border-white/10 py-4 overflow-hidden">
          <div className="flex gap-20 animate-scroll whitespace-nowrap min-w-full">
            {/* Loop multiple times for seamless scroll */}
            {[...flags, ...flags, ...flags, ...flags].map((flag, idx) => (
              <div key={`${flag.code}-${idx}`} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <img 
                  src={`https://flagcdn.com/w80/${flag.code}.png`} 
                  alt={flag.name}
                  className="h-8 w-auto rounded shadow-sm"
                />
                <span className="text-indigo-100 font-bold text-lg tracking-wider">{flag.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Universities Ticker */}
        <div className="bg-indigo-900/90 backdrop-blur-sm border-t border-indigo-800/50 py-3 overflow-hidden">
           {/* Increased duplication to 4x to ensure smooth loop on ultra-wide screens */}
          <div className="flex gap-16 animate-scroll-reverse whitespace-nowrap min-w-full">
             {[...universities, ...universities, ...universities, ...universities].map((uni, idx) => (
                <div key={`${uni.name}-${idx}`} className="flex items-center gap-3 group opacity-90 hover:opacity-100 transition-opacity">
                   <div className="bg-white/10 p-2 rounded-full border border-white/10">
                     <GraduationCap className="w-5 h-5 text-orange-400" />
                   </div>
                   <div className="flex flex-col">
                     <span className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors tracking-wide">{uni.name}</span>
                     <div className="flex items-center gap-1 text-[11px] text-indigo-200 uppercase tracking-wider">
                       <MapPin className="w-3 h-3" />
                       {uni.location}
                     </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 50s linear infinite;
        }
        .animate-scroll:hover, .animate-scroll-reverse:hover {
            animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Hero;