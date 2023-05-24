import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      dts: './src/presets/types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver(), IconsResolver()],
      eslintrc: {
        enabled: false,
        filepath: './src/presets/eslint/eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      dts: './src/presets/types/components.d.ts',
      resolvers: [ElementPlusResolver(), IconsResolver({ prefix: false, enabledCollections: ['ep', 'mdi'] })],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
    }),
    Icons({ autoInstall: true })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'static')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    port: 8086,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://oat.365you.com/:90/',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
