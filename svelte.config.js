import path from 'node:path'
import { fileURLToPath } from 'node:url'
import adapter from '@sveltejs/adapter-static'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/twitter-mirroring',
    },
    prerender: {
      default: true,
    },
    vite: {
      resolve: {
        alias: {
          '@': path.resolve(dirname, './src'),
        },
      },
    },
  },
}

export default config
