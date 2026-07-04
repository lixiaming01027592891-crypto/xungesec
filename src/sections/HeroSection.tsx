export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Single background image - no carousel, no animation */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-real.jpg"
          alt="暢行科技電動爬梯機產品展示｜勳哥無障礙車隊高雄爬梯機"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy-dark/80 to-navy-dark/90" />

      {/* Content - direct render, no animation */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-20">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 mb-3 tracking-widest">
          勳哥無障礙車隊
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
        >
          專業爬梯機服務
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 tracking-wide">
          爬梯機銷售 租賃 無障礙接送 政府補助申請
        </p>

        <div>
          <a
            href="#contact"
            className="inline-block bg-climb-red hover:bg-climb-red-hover text-white font-medium px-8 py-3.5 rounded transition-all duration-250 hover:-translate-y-0.5 text-sm tracking-wider uppercase"
          >
            立即諮詢
          </a>
        </div>
      </div>
    </section>
  );
}
