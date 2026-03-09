import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        // Keep non-entry static pages and CNAME in dist without overwriting built index.html.
        { src: '{video,ip,game,research,subscription}.html', dest: '.' },
        { src: 'CNAME', dest: '.' }
      ]
    })
  ],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
