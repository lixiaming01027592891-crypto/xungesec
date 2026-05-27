import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function SidebarContact() {
  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col bg-white border border-r-0 border-gray-200 rounded-l-lg shadow-lg overflow-hidden">
        <a
          href="tel:0989064288"
          className="flex items-center justify-center w-12 h-12 text-navy hover:text-climb-red hover:bg-cream transition-all duration-200"
          aria-label="撥打電話"
          title="撥打電話"
        >
          <Phone size={20} />
        </a>
        <a
          href="https://line.me/ti/p/7zWI-wvrxZ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 text-navy hover:text-climb-red hover:bg-cream transition-all duration-200 border-t border-gray-100"
          aria-label="LINE 聯繫"
          title="LINE 聯繫"
        >
          <MessageCircle size={20} />
        </a>
        <a
          href="mailto:andy5258@gmail.com"
          className="flex items-center justify-center w-12 h-12 text-navy hover:text-climb-red hover:bg-cream transition-all duration-200 border-t border-gray-100"
          aria-label="發送 Email"
          title="發送 Email"
        >
          <Mail size={20} />
        </a>
      </div>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] flex">
        <a
          href="tel:0989064288"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-navy hover:bg-cream transition-colors"
        >
          <Phone size={18} />
          <span className="text-sm font-medium">電話</span>
        </a>
        <a
          href="https://line.me/ti/p/7zWI-wvrxZ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-navy hover:bg-cream transition-colors border-l border-gray-200"
        >
          <MessageCircle size={18} />
          <span className="text-sm font-medium">LINE</span>
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-climb-red text-white hover:bg-climb-red-hover transition-colors"
        >
          <Mail size={18} />
          <span className="text-sm font-medium">諮詢</span>
        </a>
      </div>
    </>
  );
}
