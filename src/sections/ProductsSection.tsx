import ScrollReveal from '@/components/ScrollReveal';

const products = [
  {
    name: '電動爬梯椅 ST-G7',
    price: 'NT$111,300',
    image: '/images/product-st-g7.jpg',
    description:
      '電動爬梯椅 ST-G7 是一款專為行動不便者設計的爬樓設備，採用履帶式設計，可平穩跨越階梯。操作簡單，一人即可協助使用者安全上下樓。',
    specs: [
      { label: '展開尺寸', value: '1080×521×1030 mm' },
      { label: '收折尺寸', value: '1080×521×430 mm' },
      { label: '機身淨重', value: '33 kg' },
      { label: '最大載重', value: '150 kg' },
      { label: '爬升速度', value: '每階 3–5 秒' },
      { label: '電池續航', value: '約 300–500 階' },
      { label: '適用樓梯角度', value: '30°–45°' },
    ],
  },
  {
    name: '電動載貨爬樓梯 ST-G3',
    price: 'NT$39,800',
    image: '/images/product-st-g3.jpg',
    description:
      '電動爬樓機 ST-G3 結構精巧，由鋰電池供電，由電機驅動，可以輕鬆搬運重物上下樓梯。適用於物流、搬遷、倉儲等場合。',
    specs: [
      { label: '展開尺寸', value: '1200×580×1100 mm' },
      { label: '機身淨重', value: '42 kg' },
      { label: '最大載重', value: '200 kg' },
      { label: '爬升速度', value: '每階 4–6 秒' },
      { label: '電池續航', value: '約 500–800 階' },
      { label: '適用樓梯角度', value: '25°–40°' },
    ],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-cream section-padding">
      <div className="content-max-width">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="label-text text-climb-red block mb-3">
              PRODUCTS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
              產品介紹
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-24">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <ScrollReveal y={30} className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </ScrollReveal>

              {/* Info */}
              <ScrollReveal
                y={30}
                delay={0.2}
                className={i % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                    {product.name}
                  </h3>
                  <p className="text-climb-red text-xl font-bold mb-5">
                    售價: {product.price}
                  </p>

                  {/* Specs Table */}
                  <div className="overflow-hidden rounded-lg border border-gray-200 mb-5">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-navy text-white">
                          <th className="text-left px-4 py-2.5 font-medium w-2/5">
                            性能指標
                          </th>
                          <th className="text-left px-4 py-2.5 font-medium">
                            參數
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.specs.map((spec, j) => (
                          <tr
                            key={spec.label}
                            className={
                              j % 2 === 0 ? 'bg-white' : 'bg-[#F0EBE1]'
                            }
                          >
                            <td className="px-4 py-2.5 text-steel">
                              {spec.label}
                            </td>
                            <td className="px-4 py-2.5 text-navy font-medium">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-steel text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-block border-2 border-navy text-navy hover:bg-navy hover:text-white font-medium px-6 py-2.5 rounded transition-all duration-250 text-sm"
                  >
                    了解更多
                  </a>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
