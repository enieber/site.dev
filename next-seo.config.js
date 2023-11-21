import { meta } from 'data/Metadata.bs'

const SEO = {
  titleTemplate: '%s Blog Enieber',
  defaultTitle: meta.title,
  description: meta.description,
  canonical: meta.url,
  openGraph: {
    type: 'blog',
    locale: 'pt_BR',
    url: meta.url,
    site_name: meta.title,
    images: [
      {
        url: `${meta.url}/home/main.png`,
        width: 1280,
        height: 720,
        alt: `olha-oque-fiz.vercel.app`,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: meta.twitter,
    handle: meta.twitter,
  },
}

export default SEO
