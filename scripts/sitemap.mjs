import * as fs from 'fs'
import * as globby from 'globby'
import * as prettier from 'prettier'

const getDate = new Date().toISOString()
const DOMAIN = 'https://bukgeuk.dev'

// 
const formatted = sitemap => prettier.format(sitemap, { parser: 'html' });

(async () => {
  const pages = await globby.globby([
    // include
    '../pages/**/*.tsx',
    '../pages/*.tsx',
    // exclude
    '!../pages/_app.tsx',
    '!../pages/_document.tsx',
  ])

const pagesSitemap = `
    ${pages
    .map(page => {
      const path = page
        .replace('../pages/', '')
        .replace('.tsx', '')
        .replace(/\/index/g, '')
      const routePath = path === 'index' ? '' : path
      return `
          <url>
            <loc>${DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `
}).join('')}`

const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
        <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            ${pagesSitemap}
        </urlset>`

    const formattedSitemap = [formatted(generatedSitemap)]

    fs.writeFileSync('../public/sitemap/sitemap.xml', formattedSitemap, 'utf8')
})()