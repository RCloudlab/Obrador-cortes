import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/mayoreo', changefreq: 'monthly', priority: 0.7 },
  { url: '/carnitas', changefreq: 'weekly', priority: 0.8 },
  { url: '/contacto', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: 'https://carnitascortes.com' });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);
streamToPromise(
  links.reduce((acc, item) => acc.write(item), sitemap)
)
  .then(() => {
    sitemap.end();
    console.log('Sitemap generado en /public/sitemap.xml');
  })
  .catch(console.error);
