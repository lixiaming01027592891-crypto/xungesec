import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const quickLinks = [
  { label: '首頁', href: '#hero' },
  { label: '服務項目', href: '#services' },
  { label: '使用案例', href: '#gallery' },
  { label: '補助資訊', href: '#subsidy' },
  { label: '聯絡我們', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t-[3px] border-climb-red">
      <div className="content-max-width px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/images/logo.png"
              alt="暢行科技"
              className="h-10 w-auto object-contain mb-4 brightness-0 invert"
            />
            <h4 className="text-white font-bold text-lg mb-1">暢行科技國際有限公司</h4>
            <p className="text-sky-blue text-sm mb-2">動哥爬梯機照顧團隊</p>
            <p className="text-white/60 text-sm leading-relaxed">
              政府認證合法醫療器材商，專營爬梯機零售、租賃、保養及上下樓服務。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">快速連結</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-sky-blue transition-colors text-sm flex items-center gap-1.5"
                  >
                    <ExternalLink size={12} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">聯繫我們</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Phone size={14} className="text-sky-blue mt-1 shrink-0" />
                <div className="text-white/60 text-sm">
                  <p>02-2896-8918</p>
                  <p>0989-064-288</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={14} className="text-sky-blue mt-1 shrink-0" />
                <p className="text-white/60 text-sm">andy5258@gmail.com</p>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-sky-blue mt-1 shrink-0" />
                <p className="text-white/60 text-sm">高雄市博愛路100號</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={14} className="text-sky-blue mt-1 shrink-0" />
                <p className="text-white/60 text-sm">週一至五 10:00–17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} 暢行科技國際有限公司 版權所有
          </p>
        </div>
      </div>
    </footer>
  );
}
