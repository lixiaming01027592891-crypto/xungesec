import { useState, useEffect, useCallback } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { X, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const galleryImages = [
  { src: '/images/case-1.jpg', alt: '操作員協助長者下樓梯', span: 'col-span-1' },
  { src: '/images/case-2.jpg', alt: '福祉車升降平台服務', span: 'col-span-1' },
  { src: '/images/case-3.jpg', alt: '室內窄樓梯服務實景', span: 'col-span-2 sm:col-span-2' },
  { src: '/images/case-4.jpg', alt: '住宅樓梯環境評估', span: 'col-span-1' },
  { src: '/images/case-5.jpg', alt: '室內大理石樓梯服務', span: 'col-span-1' },
  { src: '/images/case-6.jpg', alt: '窄樓梯協助長者上下樓', span: 'col-span-2 sm:col-span-2' },
];

const testimonials = [
  {
    text: '服務很棒，操作人員很專業，讓我父親可以安全下樓就醫，非常感謝！',
    name: '王先生',
  },
  {
    text: '爬梯機租賃服務非常方便，申請補助的流程也有專人協助，真的很貼心。',
    name: '李小姐',
  },
  {
    text: '長期洗腎接送服務，司機準時親切，車子乾淨舒適，強烈推薦！',
    name: '張先生',
  },
];

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, closeLightbox, prevImage, nextImage]);

  return (
    <section id="gallery" className="bg-navy-dark section-padding">
      <div className="content-max-width">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="label-text text-sky-blue block mb-3">
              GALLERY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              使用案例
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              真實的服務場景，看得見的專業品質
            </p>
          </div>
        </ScrollReveal>

        {/* Real Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-16">
          {galleryImages.map((img, i) => (
            <ScrollReveal
              key={i}
              y={20}
              delay={i * 0.08}
              className={`${img.span} cursor-pointer group relative overflow-hidden rounded`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              客戶見證
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} y={20} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <Quote size={24} className="text-climb-red mb-3" />
                <p className="text-white/85 text-sm leading-relaxed mb-4">
                  {t.text}
                </p>
                <p className="text-white/50 text-sm">— {t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-sky-blue transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-sky-blue transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-sky-blue transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={40} />
          </button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
