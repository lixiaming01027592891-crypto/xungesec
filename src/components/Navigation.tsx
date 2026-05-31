import { useEffect, useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Phone } from 'lucide-react';

export default function Navigation() {
  const { toggleMenu, isMenuOpen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="content-max-width flex items-center justify-between h-16 md:h-20 px-5 md:px-8">
        {/* Hamburger - Left */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-11 h-11 gap-[6px] group"
          aria-label="開啟選單"
        >
          <span
            className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>

        {/* Logo - Center */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <img
            src="/images/logo.png"
            alt="暢行科技 Logo"
            className="h-8 md:h-12 w-auto object-contain"
          />
          <span className="md:hidden text-white text-[11px] font-bold tracking-wider mt-0.5 whitespace-nowrap">
            暢行科技
          </span>
        </div>

        {/* Right - Phone & Lang */}
        <div className="flex items-center gap-4">
          <a
            href="tel:077022331"
            className="hidden md:flex items-center gap-2 text-white hover:text-sky-blue transition-colors text-sm"
          >
            <Phone size={16} />
            <span>077022331</span>
          </a>
          <a
            href="tel:077022331"
            className="md:hidden text-white hover:text-sky-blue transition-colors"
            aria-label="撥打電話"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
