import { site } from '../../app/data/site'
import { services } from '../../app/data/services'

const paths = ['/', '/contact', ...services.map((s) => `/services/${s.slug}`)]

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  const urls = paths.map((p) => `<url><loc>${site.url}${p === '/' ? '/' : p}</loc></url>`).join('')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
})
