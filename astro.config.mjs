import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { BASE_URL, paths } from './src/config';

export default defineConfig({
  site: BASE_URL,
  redirects: { '/': paths.blog },
  integrations: [mdx(), sitemap()],
});
