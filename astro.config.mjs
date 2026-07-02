import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { paths } from './src/config';

export default defineConfig({
  site: 'https://spicyseashells.com',
  redirects: { '/': paths.blog },
  integrations: [mdx(), sitemap()],
});
