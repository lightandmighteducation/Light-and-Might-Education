import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    navigate(href);
    window.scrollTo(0,0);
  };

  const headerClass = isScrolled || !isHome 
    ? 'bg-indigo-950/95 backdrop-blur-md shadow-lg py-2' 
    : 'bg-transparent py-4';

  const textColor = isScrolled || !isHome ? 'text-white' : 'text-white';
  const logoVariant = 'inverted';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
           <Logo className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105" variant={logoVariant} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`text-sm font-bold uppercase tracking-wide hover:text-orange-400 transition-colors ${
                 item.isButton 
                 ? 'px-5 py-2.5 rounded-full bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20' 
                 : textColor
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-indigo-950 border-t border-indigo-900 shadow-xl h-screen">
          <div className="flex flex-col p-8 space-y-6 items-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-xl font-bold ${item.isButton ? 'bg-orange-500 text-white px-8 py-3 rounded-full w-full' : 'text-white hover:text-orange-400'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;