import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useApp } from '@/context/AppContext';

const lines = ['天暢行國際', '暢行科技', '勛哥無障礙車隊'];

export default function IntroSequence() {
  const { setIsLoading } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const textElements = container.querySelectorAll('.intro-text');
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container, {
          y: '-100%',
          duration: 0.6,
          ease: 'power3.inOut',
          delay: 0.2,
          onComplete: () => {
            setVisible(false);
            setIsLoading(false);
          },
        });
      },
    });

    // Initial state
    gsap.set(textElements, { opacity: 0, y: 20 });

    // Animate each line
    textElements.forEach((el, i) => {
      const baseDelay = i * 0.8;
      tl.to(el, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, baseDelay + 0.2)
        .to(el, { opacity: 0, y: -20, duration: 0.3, ease: 'power2.in' }, baseDelay + 0.7);
    });

    return () => {
      tl.kill();
    };
  }, [setIsLoading]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-navy-dark flex items-center justify-center"
    >
      <div className="text-center space-y-4">
        {lines.map((line, i) => (
          <div
            key={i}
            className="intro-text text-white text-3xl md:text-5xl lg:text-6xl font-bold opacity-0"
            style={{ textShadow: '0 0 40px rgba(74,159,212,0.3)' }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
