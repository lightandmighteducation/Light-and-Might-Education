import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send, Youtube } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="mb-6 -ml-2">
               <Logo className="h-16 w-auto" variant="inverted" />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {COMPANY_INFO.tagline}. Empowering students to achieve their global education dreams through expert counseling and comprehensive test preparation.
            </p>
            <div className="flex gap-3">
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
               <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/service/career-counseling" className="hover:text-orange-400 transition-colors">Career Counseling</Link></li>
              <li><Link to="/study-abroad" className="hover:text-orange-400 transition-colors">Study Abroad</Link></li>
              <li><Link to="/mbbs-abroad" className="hover:text-orange-400 transition-colors">MBBS Abroad</Link></li>
              <li><Link to="/service/visa-assistance" className="hover:text-orange-400 transition-colors">Visa Assistance</Link></li>
              <li><Link to="/service/loan-support" className="hover:text-orange-400 transition-colors">Loan Support</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span>{COMPANY_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <div className="flex flex-col">
                    {COMPANY_INFO.phone.map(p => <span key={p}>+91 {p}</span>)}
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </li>
              </ul>
              
              {/* Newsletter Form */}
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <h5 className="text-white font-bold mb-2">Stay Updated</h5>
                <p className="text-sm text-slate-400 mb-4">Get the latest scholarship updates and study abroad news.</p>
                {subscribed ? (
                   <div className="text-green-400 font-bold flex items-center gap-2">
                     <Send className="w-4 h-4" /> Subscribed successfully!
                   </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none transition-colors"
                    />
                    <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg transition-colors">
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;