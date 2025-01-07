import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://quran-json-docs.vercel.app'
  const routes = [
    '',
    '/installation',
    '/complete-quran',
    '/chapters',
    '/verses',
    '/translations',
    '/generate',
    '/sources',
    '/license',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}

