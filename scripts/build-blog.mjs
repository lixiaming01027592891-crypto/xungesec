// 輔具知識專欄 — 靜態部落格產生器
// 於 `vite build` 之後執行：讀取 src/content/blog/*.md，輸出靜態 HTML 至 dist/blog/，
// 並重新產生含 blog 網址的 dist/sitemap.xml。
// 完全獨立於前端 App，不影響首頁渲染。
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src/content/blog');
const DIST = path.join(ROOT, 'dist');
const BLOG_OUT = path.join(DIST, 'blog');

const SITE = {
  url: 'https://changxingtw.com',
  brand: '暢行科技',
  legalName: '暢行科技國際有限公司',
  alt: '勳哥無障礙車隊',
  sectionName: '輔具知識',
  sectionFull: '輔具知識專欄',
  logo: '/images/logo.png',
  tel: '07-7022331',
  mobile: '0908695800',
  addr: '高雄市鳳山區博愛路100號',
  line: 'https://line.me/ti/p/7zWI-wvrxZ',
  fb: 'https://www.facebook.com/andy5258',
};

marked.setOptions({ mangle: false, headerIds: true, gfm: true, breaks: false });

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const abs = (u = '') => (u.startsWith('http') ? u : SITE.url + (u.startsWith('/') ? u : '/' + u));

function fmtDate(d) {
  const dt = new Date(d);
  if (isNaN(dt)) return String(d);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
}

const CSS = `
:root{--navy:#1B3A5C;--navy-dark:#0F1F33;--red:#C41E24;--red-h:#E03038;--cream:#F5F0E8;--steel:#5A6A7A;--sky:#4A9FD4;--line:#e6e6e6}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;font-family:"Noto Sans TC",system-ui,-apple-system,"PingFang TC","Microsoft JhengHei",sans-serif;color:#20303f;background:#fff;line-height:1.85;font-size:17px}
img{max-width:100%;height:auto;display:block}
a{color:var(--navy);text-decoration:none}
a:hover{color:var(--red)}
.wrap{max-width:760px;margin:0 auto;padding:0 20px}
/* header */
.site-head{background:var(--navy);position:sticky;top:0;z-index:20}
.site-head .wrap{display:flex;align-items:center;justify-content:space-between;height:60px;max-width:1080px}
.brand{display:flex;align-items:center;gap:10px;color:#fff;font-weight:700;font-size:17px}
.brand img{height:30px;width:auto}
.site-head nav a{color:rgba(255,255,255,.85);font-size:14px;margin-left:18px}
.site-head nav a:hover{color:#fff}
/* breadcrumb */
.crumb{font-size:13px;color:var(--steel);padding:18px 0 0}
.crumb a{color:var(--steel)}
.crumb a:hover{color:var(--red)}
/* article */
article{padding:8px 0 48px}
.cat{display:inline-block;background:var(--cream);color:var(--red);font-size:13px;font-weight:700;padding:4px 12px;border-radius:4px;margin:18px 0 10px}
h1.title{font-size:30px;line-height:1.4;font-weight:800;color:var(--navy);margin:6px 0 12px}
.meta{font-size:14px;color:var(--steel);margin-bottom:22px;border-bottom:1px solid var(--line);padding-bottom:18px}
.cover{border-radius:10px;margin:0 0 26px;box-shadow:0 8px 30px rgba(0,0,0,.08)}
.body h2{font-size:23px;font-weight:800;color:var(--navy);margin:38px 0 12px;padding-left:12px;border-left:4px solid var(--red)}
.body h3{font-size:19px;font-weight:700;color:var(--navy);margin:26px 0 8px}
.body p{margin:14px 0}
.body ul,.body ol{padding-left:24px;margin:14px 0}
.body li{margin:7px 0}
.body strong{color:var(--navy-dark)}
.body blockquote{margin:20px 0;padding:14px 18px;background:var(--cream);border-radius:8px;color:#3a4a58;font-size:15.5px}
.body table{width:100%;border-collapse:collapse;margin:20px 0;font-size:15px}
.body th,.body td{border:1px solid var(--line);padding:10px 12px;text-align:left}
.body th{background:var(--navy);color:#fff;font-weight:600}
.body tr:nth-child(even) td{background:#fafafa}
.body a{color:var(--red);text-decoration:underline;text-underline-offset:2px}
/* cta */
.cta{background:var(--navy);border-radius:12px;padding:26px 24px;margin:40px 0 10px;text-align:center;color:#fff}
.cta h3{margin:0 0 6px;font-size:20px;color:#fff}
.cta p{margin:0 0 18px;color:rgba(255,255,255,.75);font-size:15px}
.cta .btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.btn{display:inline-block;padding:12px 26px;border-radius:6px;font-weight:600;font-size:15px}
.btn-red{background:var(--red);color:#fff}
.btn-red:hover{background:var(--red-h);color:#fff}
.btn-line{background:#06C755;color:#fff}
.btn-line:hover{color:#fff;opacity:.9}
/* list */
.hero-list{background:var(--navy);color:#fff;padding:46px 0 40px}
.hero-list h1{font-size:32px;font-weight:800;margin:0 0 10px}
.hero-list p{margin:0;color:rgba(255,255,255,.8);font-size:16px}
.grid{display:grid;grid-template-columns:1fr;gap:22px;padding:34px 0 50px}
@media(min-width:680px){.grid{grid-template-columns:1fr 1fr}}
.card{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff;transition:box-shadow .2s,transform .2s;display:flex;flex-direction:column}
.card:hover{box-shadow:0 12px 34px rgba(0,0,0,.1);transform:translateY(-3px)}
.card img{aspect-ratio:16/9;object-fit:cover;width:100%}
.card .in{padding:18px 18px 20px;display:flex;flex-direction:column;flex:1}
.card .cat2{font-size:12px;color:var(--red);font-weight:700;margin-bottom:6px}
.card h2{font-size:18px;font-weight:700;color:var(--navy);margin:0 0 8px;line-height:1.5}
.card p{font-size:14px;color:var(--steel);margin:0 0 14px;flex:1}
.card .rd{font-size:13px;color:var(--steel)}
/* footer */
.site-foot{background:var(--navy-dark);color:rgba(255,255,255,.7);border-top:3px solid var(--red);font-size:14px}
.site-foot .wrap{max-width:1080px;padding:34px 20px}
.site-foot .fname{color:#fff;font-weight:700;font-size:16px;margin:0 0 4px}
.site-foot .row{margin:4px 0}
.site-foot a{color:var(--sky)}
.back{display:inline-block;margin:30px 0 0;color:var(--navy);font-weight:600}
`;

function head({ title, description, url, image, type = 'article', jsonld = [] }) {
  const ld = jsonld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n    ');
  return `<!doctype html>
<html lang="zh-TW">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#1B3A5C" />
    <link rel="canonical" href="${esc(url)}" />
    <link rel="icon" type="image/png" href="/images/logo.png" />
    <meta property="og:site_name" content="${esc(SITE.legalName)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:image" content="${esc(image)}" />
    <meta property="og:locale" content="zh_TW" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${esc(image)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;800&display=swap" rel="stylesheet" />
    <style>${CSS}</style>
    ${ld}
  </head>
  <body>`;
}

const siteHeader = `
    <header class="site-head">
      <div class="wrap">
        <a class="brand" href="/"><img src="${SITE.logo}" alt="${esc(SITE.brand)}｜${esc(SITE.alt)} Logo" /><span>${SITE.brand}</span></a>
        <nav>
          <a href="/">回首頁</a>
          <a href="/blog/">${SITE.sectionName}</a>
          <a href="/#contact">聯絡我們</a>
        </nav>
      </div>
    </header>`;

const siteFooter = `
    <footer class="site-foot">
      <div class="wrap">
        <p class="fname">${SITE.legalName}</p>
        <div class="row">${SITE.alt}・政府認證合法醫療器材商</div>
        <div class="row">市話 <a href="tel:${SITE.tel}">${SITE.tel}</a>　手機 <a href="tel:${SITE.mobile}">${SITE.mobile}</a></div>
        <div class="row">${SITE.addr}</div>
        <div class="row" style="margin-top:12px;color:rgba(255,255,255,.45)">&copy; ${new Date().getFullYear()} ${SITE.legalName} 版權所有</div>
      </div>
    </footer>
  </body>
</html>`;

const ctaBlock = `
      <div class="cta">
        <h3>需要爬梯機服務或補助諮詢？</h3>
        <p>政府認證合法醫療器材商，免費評估、專人協助申請補助</p>
        <div class="btns">
          <a class="btn btn-red" href="tel:${SITE.mobile}">撥打 ${SITE.mobile}</a>
          <a class="btn btn-line" href="${SITE.line}" target="_blank" rel="noopener">LINE 諮詢</a>
        </div>
      </div>`;

function articleHtml(post, others) {
  const url = `${SITE.url}/blog/${post.slug}/`;
  const img = abs(post.cover || SITE.logo);
  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: img,
      datePublished: fmtDate(post.date),
      dateModified: fmtDate(post.date),
      author: { '@type': 'Organization', name: SITE.legalName },
      publisher: {
        '@type': 'Organization',
        name: SITE.legalName,
        logo: { '@type': 'ImageObject', url: abs(SITE.logo) },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首頁', item: SITE.url + '/' },
        { '@type': 'ListItem', position: 2, name: SITE.sectionFull, item: SITE.url + '/blog/' },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];
  const related = others
    .slice(0, 3)
    .map((o) => `<li><a href="/blog/${o.slug}/">${esc(o.title)}</a></li>`)
    .join('');

  return (
    head({ title: `${post.title}｜${SITE.sectionFull}`, description: post.description, url, image: img, jsonld }) +
    siteHeader +
    `
    <div class="wrap">
      <div class="crumb"><a href="/">首頁</a> ／ <a href="/blog/">${SITE.sectionFull}</a> ／ ${esc(post.title)}</div>
      <article>
        ${post.category ? `<span class="cat">${esc(post.category)}</span>` : ''}
        <h1 class="title">${esc(post.title)}</h1>
        <div class="meta">發布日期：${fmtDate(post.date)}　｜　${SITE.legalName}</div>
        ${post.cover ? `<img class="cover" src="${esc(post.cover)}" alt="${esc(post.title)}" />` : ''}
        <div class="body">${post.html}</div>
        ${ctaBlock}
        ${related ? `<h2 style="font-size:20px;color:var(--navy);margin:40px 0 10px">延伸閱讀</h2><ul>${related}</ul>` : ''}
        <a class="back" href="/blog/">← 回${SITE.sectionFull}</a>
      </article>
    </div>` +
    siteFooter
  );
}

function indexHtml(posts) {
  const url = `${SITE.url}/blog/`;
  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: `${SITE.brand}｜${SITE.sectionFull}`,
      url,
      description: '爬梯機、無障礙車、長照輔具的補助申請、選購與使用知識，由暢行科技（勳哥無障礙車隊）整理。',
      publisher: { '@type': 'Organization', name: SITE.legalName },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首頁', item: SITE.url + '/' },
        { '@type': 'ListItem', position: 2, name: SITE.sectionFull, item: url },
      ],
    },
  ];
  const cards = posts
    .map(
      (p) => `
        <a class="card" href="/blog/${p.slug}/">
          ${p.cover ? `<img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy" />` : ''}
          <div class="in">
            ${p.category ? `<div class="cat2">${esc(p.category)}</div>` : ''}
            <h2>${esc(p.title)}</h2>
            <p>${esc(p.description)}</p>
            <div class="rd">${fmtDate(p.date)}　·　閱讀全文 →</div>
          </div>
        </a>`
    )
    .join('');

  return (
    head({
      title: `${SITE.sectionFull}｜爬梯機補助・租賃・長照輔具知識｜${SITE.brand}`,
      description: '爬梯機補助怎麼申請？租賃還是購買？長照2.0輔具怎麼用？暢行科技（勳哥無障礙車隊）整理高雄爬梯機與無障礙服務的實用知識。',
      url,
      image: abs('/images/hero-real.jpg'),
      type: 'website',
      jsonld,
    }) +
    siteHeader +
    `
    <section class="hero-list">
      <div class="wrap" style="max-width:1080px">
        <h1>${SITE.sectionFull}</h1>
        <p>爬梯機補助、租賃選購、長照輔具與無障礙服務的實用知識</p>
      </div>
    </section>
    <div class="wrap" style="max-width:1080px">
      <div class="grid">${cards}</div>
    </div>` +
    siteFooter
  );
}

function buildSitemap(posts) {
  const today = fmtDate(new Date());
  const urls = [
    { loc: `${SITE.url}/`, changefreq: 'weekly', priority: '1.0', lastmod: today },
    { loc: `${SITE.url}/blog/`, changefreq: 'weekly', priority: '0.8', lastmod: today },
    ...posts.map((p) => ({
      loc: `${SITE.url}/blog/${p.slug}/`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: fmtDate(p.date),
    })),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`;
}

async function main() {
  if (!existsSync(CONTENT_DIR)) {
    console.log('[blog] 無 content 目錄，略過');
    return;
  }
  const files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith('.md'));
  const posts = [];
  for (const f of files) {
    const raw = await readFile(path.join(CONTENT_DIR, f), 'utf8');
    const { data, content } = matter(raw);
    if (data.draft) continue;
    posts.push({
      slug: data.slug || f.replace(/\.md$/, ''),
      title: data.title || '(未命名)',
      description: data.description || '',
      date: data.date || new Date(),
      cover: data.cover || '',
      category: data.category || '',
      html: marked.parse(content),
    });
  }
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  await mkdir(BLOG_OUT, { recursive: true });
  await writeFile(path.join(BLOG_OUT, 'index.html'), indexHtml(posts), 'utf8');

  for (const p of posts) {
    const others = posts.filter((o) => o.slug !== p.slug);
    const dir = path.join(BLOG_OUT, p.slug);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, 'index.html'), articleHtml(p, others), 'utf8');
  }

  await writeFile(path.join(DIST, 'sitemap.xml'), buildSitemap(posts), 'utf8');

  console.log(`[blog] 產生 ${posts.length} 篇文章 + 列表頁，並更新 sitemap.xml`);
  posts.forEach((p) => console.log(`        /blog/${p.slug}/  — ${p.title}`));
}

main().catch((e) => {
  console.error('[blog] 產生失敗：', e);
  process.exit(1);
});
