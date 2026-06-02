import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// All routes to pre-render
const routesToPrerender = [
  '/',
  '/cases',
  '/cases/crm',
  '/cases/moon',
  '/cases/zayavka',
  '/cases/chisto',
  '/cases/spraystore',
  '/cases/porsche',
  '/cases/arhdzagi',
]

async function prerender() {
  console.log('🚀 Starting prerender...')

  // Read the built index.html template
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

  // Import server-side render function from built SSR bundle
  const { render } = await import('./dist/server/entry-server.js')

  for (const url of routesToPrerender) {
    console.log(`  ⚙️  Rendering: ${url}`)

    const helmetContext = {}
    const appHtml = render(url, helmetContext)
    const { helmet } = helmetContext

    // Build head tags from Helmet
    const headTags = helmet
      ? [
          helmet.title?.toString() ?? '',
          helmet.meta?.toString() ?? '',
          helmet.link?.toString() ?? '',
        ].join('\n    ')
      : ''

    // Inject rendered HTML and helmet head tags
    let html = template
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace('<!--helmet-->', headTags)

    // Write to file
    const filePath = url === '/' ? '/index.html' : `${url}/index.html`
    const outDir = toAbsolute(`dist${filePath}`)
    const outDirParent = path.dirname(outDir)

    fs.mkdirSync(outDirParent, { recursive: true })
    fs.writeFileSync(outDir, html)
    console.log(`  ✅  Written: dist${filePath}`)
  }

  // Generate sitemap.xml
  const siteUrl = 'https://nexium.dev'
  const today = new Date().toISOString().split('T')[0]
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routesToPrerender
  .map((route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route === '/cases' ? '0.9' : '0.8'}</priority>
  </url>`)
  .join('\n')}
</urlset>`

  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemap)
  console.log('\n  ✅  Generated: dist/sitemap.xml')
  console.log('\n🎉 Prerender complete!\n')
}

prerender().catch(console.error)
