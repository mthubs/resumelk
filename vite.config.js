import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ViteRequireContext from '@originjs/vite-plugin-require-context'

export default defineConfig({
    css: {
        devSourcemap: true,
    },
    plugins: [
        vue(),
        laravel([
            'resource/scss/app.scss',
            'resources/js/app.js',
        ]),
        ViteRequireContext(),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '@': '/resources/js',
        }
    },
});
