import { useEffect, useRef } from 'react';
import { useApp } from '@/context/AppContext';
import gsap from 'gsap';
import { Phone, Mail, MapPin, Clock, X } from 'lucide-react';

const menuLinks = [
  { label: '首頁', href: '#hero' },
  { label: '服務項目', href: '#services' },
  { label: '使用案例', href: '#gallery' },
  { label: '補助資訊', href: '#subsidy' },
  { label: '聯絡我們', href: '#contact' },
];

export default function FullscreenMenu() {
  const { isMenuOpen, setMenuOpen } = useApp();
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(overlay, {
        x: 0,
        duration: 0.4,
        ease: 'power3.inOut',
      });
      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, delay: 0.2, ease: 'power3.out' }
        );
      }
    } else {
      document.body.style.overflow = '';
      gsap.to(overlay, {
        x: '-100%',
        duration: 0.3,
        ease: 'power3.inOut',
      });
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] bg-navy-dark"
      style={{ transform: 'translateX(-100%)' }}
    >
      <div className="h-full flex flex-col lg:flex-row">
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 md:top-6 md:right-8 w-11 h-11 flex items-center justify-center text-white hover:text-sky-blue transition-colors z-10"
          aria-label="關閉選單"
        >
          <X size={28} />
        </button>

        {/* Navigation Links */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20">
          <div ref={linksRef} className="space-y-4 md:space-y-6">
            {menuLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-2xl md:text-4xl lg:text-5xl font-bold text-white hover:text-sky-blue transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:w-[400px] bg-navy/50 px-8 md:px-12 py-8 lg:py-0 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
          <h3 className="text-lg font-bold text-white mb-6">聯絡資訊</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-sky-blue mt-0.5 shrink-0" />
              <div>
                <p className="text-white/60 text-sm">市話</p>
                <p className="text-white">077022331</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-sky-blue mt-0.5 shrink-0" />
              <div>
                <p className="text-white/60 text-sm">手機</p>
                <p className="text-white">0908695800</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-sky-blue mt-0.5 shrink-0" />
              <div>
                <p className="text-white/60 text-sm">Email</p>
                <p className="text-white">Cherry320612@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-sky-blue mt-0.5 shrink-0" />
              <div>
                <p className="text-white/60 text-sm">地址</p>
                <p className="text-white">高雄市鳳山區博愛路100號</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-sky-blue mt-0.5 shrink-0" />
              <div>
                <p className="text-white/60 text-sm">營業時間</p>
                <p className="text-white">週一至五 10:00–17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
