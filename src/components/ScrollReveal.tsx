import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  className?: string;
  start?: string;
  onClick?: () => void;
}

export default function ScrollReveal({
  children,
  y = 40,
  x = 0,
  duration = 0.8,
  delay = 0,
  className = '',
  start = 'top 85%',
  onClick,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y, x });

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
    };
  }, [y, x, duration, delay, start]);

  return (
    <div ref={ref} className={className} onClick={onClick}>
      {children}
    </div>
  );
}
