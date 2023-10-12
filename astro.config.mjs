import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://ugdevs.org',
  integrations: [tailwind(), sitemap({
    filter: page => page !== 'https://ugdevs.org/terminos-condiciones/'
  }), react()]
});