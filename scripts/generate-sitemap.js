import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/carnes', changefreq: 'monthly', priority: 0.7 },
  { url: '/carnitas', changefreq: 'weekly', priority: 0.8 },
  { url: '/contacto', changefreq: 'monthly', priority: 0.7 },
];

// Tu dominio
const sitemap = new SitemapStream({ hostname: 'https://www.carnitascortes.com' });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

// Escribimos los links uno por uno
links.forEach(link => sitemap.write(link));

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('Sitemap generado exitosamente en /public/sitemap.xml');
}).catch(console.error);
