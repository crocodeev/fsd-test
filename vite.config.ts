import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'
import { packageDirectorySync } from 'pkg-dir'

const packageRoot = packageDirectorySync()

console.log(path.resolve(packageRoot, './src'));


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'src': path.resolve(packageRoot, './src'),
    },
  },
  base: '/fsd-test/'
})
