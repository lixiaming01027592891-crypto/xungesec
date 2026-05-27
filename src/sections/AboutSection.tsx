import ScrollReveal from '@/components/ScrollReveal';
import { Building2, User, Hash, Clock } from 'lucide-react';

const companyInfo = [
  { icon: Building2, label: '公司名稱', value: '天暢行國際有限公司' },
  { icon: Hash, label: '統編', value: '54316765' },
  { icon: User, label: '負責人', value: '余先生' },
  { icon: Clock, label: '營業時間', value: '10:00–17:30' },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-navy section-padding">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <ScrollReveal x={-40}>
            <div>
              <span className="label-text text-sky-blue block mb-3">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
                關於暢行科技
              </h2>
              <div className="w-16 h-[3px] bg-climb-red mb-6" />

              <div className="space-y-4 text-white/85 leading-relaxed mb-8">
                <p>
                  天暢行國際有限公司（暢行科技）是政府認證的合法醫療器材公司，專營爬梯機銷售與租賃。我們是北中南無障礙司機上下樓接送服務的首選品牌。
                </p>
                <p>
                  產品通過衛服部醫療器材許可，品質有保障。我們更釋放一年內的展示機以市價 6–7 折，回饋給無法申請補助款的需要者。長期復健治療另有專案優惠，一條龍服務快速又方便。
                </p>
              </div>

              {/* Company Info */}
              <div className="grid grid-cols-2 gap-4">
                {companyInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon
                      size={16}
                      className="text-white/50 shrink-0"
                    />
                    <div>
                      <p className="text-white/50 text-xs">{item.label}</p>
                      <p className="text-white/80 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Image */}
          <ScrollReveal x={40} delay={0.2}>
            <div className="relative">
              <img
                src="/images/about-store.jpg"
                alt="暢行科技門市"
                className="rounded-lg shadow-image w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-climb-red rounded-lg -z-10 hidden md:block" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
