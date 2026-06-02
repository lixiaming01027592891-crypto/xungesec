import ScrollReveal from '@/components/ScrollReveal';
import {
  CalendarDays,
  HelpCircle,
} from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-cream section-padding">
      <div className="content-max-width">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="label-text text-climb-red block mb-3">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
              服務項目
            </h2>
            <p className="text-steel text-base md:text-lg max-w-2xl mx-auto">
              政府補助合法醫療器材商，提供專業無障礙服務
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {/* 01 Card — Photo top / Text bottom */}
          <ScrollReveal delay={0} y={30}>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full group hover:border-navy hover:shadow-card hover:-translate-y-1 transition-all duration-300">
              {/* Photo area with 01 overlay */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <span className="absolute top-3 left-4 text-5xl md:text-6xl font-extrabold text-white/30 z-10 drop-shadow-md font-mono">
                  01
                </span>
                <img
                  src="/images/service-01.jpg"
                  alt="爬梯機上下樓服務"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text area */}
              <div className="p-5 md:p-6">
                <h3 className="text-xl font-bold text-navy mb-1">
                  爬梯機上下樓服務
                </h3>
                <span className="text-climb-red text-sm font-medium block mb-3">
                  高雄市長照趟次租賃補助
                </span>
                <p className="text-steel text-sm leading-relaxed">
                  專業操作人員協助行動不便者安全上下樓梯，適用於住宅、醫院、診所等各種場所。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 02 Card — Photo top / Text bottom */}
          <ScrollReveal delay={0.1} y={30}>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full group hover:border-navy hover:shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <span className="absolute top-3 left-4 text-5xl md:text-6xl font-extrabold text-white/30 z-10 drop-shadow-md font-mono">
                  02
                </span>
                <img
                  src="/images/service-02a.jpg"
                  alt="履帶爬梯機販售"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl font-bold text-navy mb-1">
                  履帶爬梯機販售
                </h3>
                <span className="text-climb-red text-sm font-medium block mb-3">
                  可申請政府補助 4–8 萬
                </span>
                <p className="text-steel text-sm leading-relaxed">
                  提供履帶式爬梯機銷售，通過衛服部醫療器材許可，品質有保障。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 03 Card — Original layout */}
          <ScrollReveal delay={0.2} y={30}>
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 h-full group hover:border-navy hover:shadow-card hover:-translate-y-1 transition-all duration-300">
              <span className="text-5xl md:text-6xl font-bold text-gray-200 font-mono block mb-4">
                03
              </span>
              <CalendarDays
                size={32}
                className="text-navy mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-bold text-navy mb-1">
                履帶爬梯機租賃
              </h3>
              <span className="text-climb-red text-sm font-medium block mb-3">
                可申請長照月租補助 2800
              </span>
              <p className="text-steel text-sm leading-relaxed">
                靈活租賃方案，短期長期皆可，讓您以最經濟的方式獲得專業設備。
              </p>
            </div>
          </ScrollReveal>

          {/* 04 Card — Photo top / Text bottom (yellow cargo) */}
          <ScrollReveal delay={0.3} y={30}>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full group hover:border-navy hover:shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <span className="absolute top-3 left-4 text-5xl md:text-6xl font-extrabold text-white/30 z-10 drop-shadow-md font-mono">
                  04
                </span>
                <img
                  src="/images/service-04-new.jpg"
                  alt="貨用爬梯機租賃 / 販售"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl font-bold text-navy mb-1">
                  貨用爬梯機租賃 / 販售
                </h3>
                <span className="text-climb-red text-sm font-medium block mb-3">
                  商用 / 家用皆適用
                </span>
                <p className="text-steel text-sm leading-relaxed">
                  專業載貨爬梯機，輕鬆搬運重物上下樓，適用於物流、搬遷、倉儲等需求。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 05 Card — Photo top / Text bottom */}
          <ScrollReveal delay={0.4} y={30}>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full group hover:border-navy hover:shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <span className="absolute top-3 left-4 text-5xl md:text-6xl font-extrabold text-white/30 z-10 drop-shadow-md font-mono">
                  05
                </span>
                <img
                  src="/images/service-05.jpg"
                  alt="無障礙車接駁服務"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl font-bold text-navy mb-1">
                  無障礙車接駁服務
                </h3>
                <span className="text-climb-red text-sm font-medium block mb-3">
                  醫院
                </span>
                <p className="text-steel text-sm leading-relaxed">
                  專業無障礙車隊提供醫院接送服務。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Card */}
          <ScrollReveal delay={0.5} y={30}>
            <div className="bg-navy rounded-lg p-6 md:p-8 h-full flex flex-col justify-center items-center text-center">
              <HelpCircle
                size={40}
                className="text-sky-blue mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-bold text-white mb-2">
                需要更多資訊？
              </h3>
              <p className="text-white/70 mb-6">歡迎免費諮詢</p>
              <a
                href="#contact"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-navy font-medium px-6 py-2.5 rounded transition-all duration-250 text-sm"
              >
                聯絡我們
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
