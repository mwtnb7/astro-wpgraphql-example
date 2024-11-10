import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
// import node from '@astrojs/node';
// import vercel from '@astrojs/vercel/static';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    edgeMiddleware: true
  }),
  // adapter: node({
  //   mode: 'standalone'
  // }),
  // adapter: node(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true
    }),
    react()
  ]
});
