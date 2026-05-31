import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: '市話', value: '077022331', href: 'tel:077022331' },
  { icon: Phone, label: '手機', value: '0908695800', href: 'tel:0908695800' },
  { icon: Mail, label: 'Email', value: 'Cherry320612@gmail.com', href: 'mailto:Cherry320612@gmail.com' },
  { icon: MapPin, label: '地址', value: '高雄市鳳山區博愛路100號', href: '#' },
  { icon: Clock, label: '營業時間', value: '週一至五 10:00–17:00', href: '#' },
];

const inquiryOptions = [
  '爬梯機上下樓服務諮詢',
  '座椅爬梯機購買諮詢',
  '座椅爬梯機租賃諮詢',
  '貨用爬梯機諮詢',
  '無障礙車接駁服務',
  '政府補助申請諮詢',
  '其他',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiry: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', inquiry: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="bg-cream section-padding">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Contact Info */}
          <ScrollReveal x={-30}>
            <div>
              <span className="label-text text-climb-red block mb-3">
                CONTACT US
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-5">
                聯絡我們
              </h2>
              <div className="w-16 h-[3px] bg-climb-red mb-8" />

              <div className="space-y-5 mb-8">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <item.icon
                      size={20}
                      className="text-navy mt-0.5 shrink-0 group-hover:text-climb-red transition-colors"
                    />
                    <div>
                      <p className="text-steel text-xs mb-0.5">{item.label}</p>
                      <p className="text-navy font-medium group-hover:text-climb-red transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-3">
                <a
                  href="https://line.me/ti/p/7zWI-wvrxZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-navy text-white rounded hover:bg-climb-red transition-colors"
                  aria-label="LINE"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5-3.016c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H9.606v1.125h1.904c.349 0 .63.283.63.63 0 .344-.281.629-.63.629H8.49c-.344 0-.625-.285-.625-.629V8.108c0-.345.281-.63.63-.63h3.02c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H9.606v1.125h1.904zm-4.795 3.61c-.275.424-.853.604-1.352.391l-.896-.364c-.211-.086-.451.016-.539.229-.088.211.015.451.229.539l.896.364c.848.346 1.822.006 2.236-.805l2.084-4.048V8.108c0-.345.282-.63.63-.63.346 0 .626.285.626.63v4.074c0 .215-.109.414-.291.529l-2.633 1.718zM24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.729 3.917 8.68 9.152 9.465.357.076.843.237.965.544.111.281.072.721.035 1.045l-.156 1.355c-.046.405-.324.803-.789.392C4.389 19.654.195 15.319.195 10.314.195 4.076 5.487.195 12 .195s11.805 3.88 11.805 10.12c0 5.005-4.194 9.34-8.812 10.293-.465.411-.743.013-.789-.392l-.156-1.355c-.037-.324-.076-.764.035-1.045.122-.307.608-.468.965-.544C20.083 18.994 24 15.043 24 10.314z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/andy5258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-navy text-white rounded hover:bg-climb-red transition-colors"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center bg-navy text-white rounded hover:bg-climb-red transition-colors"
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal x={30} delay={0.2}>
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">感謝您的來信</h3>
                  <p className="text-steel">我們會盡快與您聯繫</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-steel text-sm mb-1.5">
                      姓名 <span className="text-climb-red">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 border border-gray-300 rounded focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-colors text-navy"
                      placeholder="請輸入您的姓名"
                    />
                  </div>

                  <div>
                    <label className="block text-steel text-sm mb-1.5">
                      電話 <span className="text-climb-red">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-12 px-4 border border-gray-300 rounded focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-colors text-navy"
                      placeholder="請輸入聯絡電話"
                    />
                  </div>

                  <div>
                    <label className="block text-steel text-sm mb-1.5">
                      Email <span className="text-climb-red">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 px-4 border border-gray-300 rounded focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-colors text-navy"
                      placeholder="請輸入電子郵件"
                    />
                  </div>

                  <div>
                    <label className="block text-steel text-sm mb-1.5">
                      詢問內容 <span className="text-climb-red">*</span>
                    </label>
                    <select
                      required
                      value={formData.inquiry}
                      onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                      className="w-full h-12 px-4 border border-gray-300 rounded focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-colors text-navy bg-white"
                    >
                      <option value="">請選擇詢問內容</option>
                      {inquiryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-steel text-sm mb-1.5">留言</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-colors text-navy resize-none"
                      placeholder="請輸入您想說的話（選填）"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-climb-red hover:bg-climb-red-hover text-white font-medium py-3.5 rounded transition-all duration-250 flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    <Send size={16} />
                    送出
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
