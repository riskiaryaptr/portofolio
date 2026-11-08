import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'
import { site, pages, pageTitle, personJsonLd } from './src/data/site.js'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const pageUrl = (p) => site.url + p.path

/** <head> tags for one page (English, the default language). */
function renderHead(key) {
    const page = pages[key]
    const title = pageTitle(key, 'US')
    const description = page.description.US
    const url = pageUrl(page)
    const image = site.url + site.ogImage

    return [
        `<title>${esc(title)}</title>`,
        `<meta name="description" content="${esc(description)}" />`,
        `<meta name="author" content="${esc(site.name)}" />`,
        `<meta name="keywords" content="${esc(site.keywords.join(', '))}" />`,
        `<meta name="robots" content="index, follow, max-image-preview:large" />`,
        `<link rel="canonical" href="${url}" />`,
        `<meta property="og:type" content="${key === 'home' ? 'profile' : 'website'}" />`,
        `<meta property="og:site_name" content="${esc(site.name)}" />`,
        `<meta property="og:title" content="${esc(title)}" />`,
        `<meta property="og:description" content="${esc(description)}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:image" content="${image}" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta property="og:image:alt" content="${esc(site.name)} — portfolio" />`,
        `<meta property="og:locale" content="en_US" />`,
        `<meta property="og:locale:alternate" content="id_ID" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${esc(title)}" />`,
        `<meta name="twitter:description" content="${esc(description)}" />`,
        `<meta name="twitter:image" content="${image}" />`,
        `<script type="application/ld+json">${JSON.stringify(personJsonLd()).replace(/</g, '\\u003c')}</script>`,
    ].join('\n        ')
}

const SEO_BLOCK = /<!-- seo:start[^>]*-->[\s\S]*?<!-- seo:end -->/
const withSeo = (html, key) => html.replace(SEO_BLOCK, `<!-- seo:start -->\n        ${renderHead(key)}\n        <!-- seo:end -->`)

/**
 * SEO for a client-side rendered SPA:
 *  - injects title / description / Open Graph / JSON-LD into index.html
 *  - writes one HTML file per page (about.html, ...) with that page's tags, so
 *    link previews and crawlers that don't run JavaScript see the right metadata
 *  - writes sitemap.xml and robots.txt
 */
function seoPlugin() {
    let outDir = 'dist'
    return {
        name: 'portfolio-seo',
        configResolved(config) {
            outDir = path.resolve(config.root, config.build.outDir)
        },
        transformIndexHtml(html) {
            return withSeo(html, 'home')
        },
        closeBundle() {
            const indexPath = path.join(outDir, 'index.html')
            if (!fs.existsSync(indexPath)) return
            const html = fs.readFileSync(indexPath, 'utf8')

            for (const [key, page] of Object.entries(pages)) {
                if (page.path === '/') continue
                fs.writeFileSync(path.join(outDir, `${page.path.slice(1)}.html`), withSeo(html, key))
            }

            const today = new Date().toISOString().slice(0, 10)
            const urls = Object.values(pages)
                .map((p) => `  <url>\n    <loc>${pageUrl(p)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`)
                .join('\n')
            fs.writeFileSync(path.join(outDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
            fs.writeFileSync(path.join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`)
        },
    }
}

export default defineConfig({
    plugins: [react(), tailwindcss(), seoPlugin()],
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, './src'),
        },
    },
})
