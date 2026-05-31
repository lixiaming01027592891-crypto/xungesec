import ScrollReveal from '@/components/ScrollReveal';

export default function StoreSection() {
  return (
    <section className="bg-navy section-padding pt-20 md:pt-24">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Store Photo */}
          <ScrollReveal x={-30}>
            <div className="relative">
              <img
                src="/images/storefront.png"
                alt="暢行科技國際有限公司門市"
                className="rounded-lg shadow-image w-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Right - Certifications & Info */}
          <ScrollReveal x={30} delay={0.2}>
            <div>
              <span className="label-text text-sky-blue block mb-3">
                QUALIFICATIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                專業認證 安心服務
              </h2>
              <div className="w-16 h-[3px] bg-climb-red mb-6" />

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-climb-red rounded-full mt-2 shrink-0" />
                  <p className="text-white/85 text-sm">
                    <span className="text-white font-medium">高雄市衛生局長照 3.0</span> 爬梯機輔具租賃特約商
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-climb-red rounded-full mt-2 shrink-0" />
                  <p className="text-white/85 text-sm">
                    <span className="text-white font-medium">高雄市社會局</span>輔具購置代墊特約商
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-climb-red rounded-full mt-2 shrink-0" />
                  <p className="text-white/85 text-sm">
                    <span className="text-white font-medium">台南市社會局</span>輔具購置代墊特約商
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-climb-red rounded-full mt-2 shrink-0" />
                  <p className="text-white/85 text-sm">
                    <span className="text-white font-medium">屏東市社會局</span>輔具購置代墊特約商
                  </p>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed">
                暢行科技國際有限公司 — 動哥爬梯機照顧團隊。我們秉持「專業 · 用心 · 安心」的理念，為每一位需要幫助的客戶提供最優質的爬梯機服務。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
