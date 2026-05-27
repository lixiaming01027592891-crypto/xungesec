import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '4\u20138', suffix: '萬', label: '身心障礙爬梯機補助', desc: '符合資格者可申請購買補助' },
  { value: '2800', suffix: '', prefix: '$', label: '長照爬梯機月租補助', desc: '每月可申請租賃補助' },
  { value: '6\u20137', suffix: '折', label: '展示機優惠價', desc: '一年內展示機特惠回饋' },
];

function AnimatedStat({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 75%',
      onEnter: () => {
        if (hasAnimated) return;
        setHasAnimated(true);

        const numEl = numRef.current;
        if (!numEl) return;

        // Parse the value
        const cleanVal = stat.value.replace('\u2013', '-');
        if (cleanVal.includes('-')) {
          // Range like "4-8" or "6-7"
          const parts = cleanVal.split('-');
          const start = parseFloat(parts[0]);
          const end = parseFloat(parts[1]);
          const obj = { val: start };
          gsap.to(obj, {
            val: end,
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: () => {
              const v = Math.round(obj.val);
              numEl.textContent = `${stat.prefix || ''}${parts[0]}\u2013${v}`;
            },
          });
        } else {
          // Single number
          const target = parseFloat(cleanVal);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: () => {
              const v = Math.round(obj.val);
              const formatted = v.toLocaleString();
              numEl.textContent = `${stat.prefix || ''}${formatted}`;
            },
          });
        }
      },
    });

    return () => st.kill();
  }, [hasAnimated, stat]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-climb-red font-inter mb-2">
        <span ref={numRef}>{stat.prefix || ''}0</span>
        <span>{stat.suffix}</span>
      </div>
      <h4 className="text-lg md:text-xl font-bold text-white mb-1">
        {stat.label}
      </h4>
      <p className="text-white/60 text-sm">{stat.desc}</p>
    </div>
  );
}

export default function SubsidySection() {
  return (
    <section id="subsidy" className="bg-navy section-padding">
      <div className="content-max-width">
        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} stat={stat} />
            ))}
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-white/20 mb-12 md:mb-16" />

        {/* Subsidy Info */}
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
              政府補助申請說明
            </h3>
            <p className="text-white/85 leading-relaxed mb-8">
              我們是政府認證的合法醫療器材商，協助您申請各項政府補助。身心障礙者購買爬梯機可申請 4–8 萬元補助，長照使用者租賃爬梯機每月可申請 2,800 元補助。
            </p>
            <a
              href="#contact"
              className="inline-block bg-climb-red hover:bg-climb-red-hover text-white font-medium px-8 py-3 rounded transition-all duration-250 hover:-translate-y-0.5 text-sm tracking-wider"
            >
              了解補助詳情
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
