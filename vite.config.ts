import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

// @ts-ignore
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      publicDir: 'public',
      appType: 'spa',
      build: {
        outDir: 'dist',
      },
      plugins: [
        react(),
        sitemap({
          hostname: 'https://leaderbets.net',
          dynamicRoutes: [
            '/about', 
            '/bookmakers', 
            '/fairplaypremierleague', 
            '/games', 
            '/guides', 
            '/hakimiballondor', 
            '/', 
            '/inscription1xbet', 
            '/legal', 
            '/mondialu17afrique', 
            '/news', 
            '/predictions', 
            '/promocodes', 
            '/ronaldo1000buts', 
            '/vararticle',
            '/predictions/1',
            '/predictions/2',
            '/predictions/3',
            '/predictions/4',
            '/predictions/5',
            '/predictions/6',
            '/predictions/7',
            '/predictions/8',
            '/predictions/9',
          ],
        })
      ],
      define: {
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
