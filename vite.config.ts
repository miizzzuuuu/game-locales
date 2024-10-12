import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [react()],
        css: {
            postcss: {
                plugins: [autoprefixer({})],
            },
        },
        build: {
            chunkSizeWarningLimit: 1600,
            rollupOptions: {
                output: {
                    manualChunks(id: string) {
                        if (id.indexOf('i18next') >= 0) {
                            return 'i18next';
                        }

                        if (id.indexOf('lottie') >= 0) {
                            return 'lottie';
                        }

                        if (id.indexOf('react') >= 0) {
                            return 'react';
                        }

                        if (id.indexOf('node_modules') >= 0) {
                            return 'vendor';
                        }
                    },
                },
            },
            outDir: mode === 'development' ? './dist-dev' : './dist',
        },
        server: {
            port: 4000,
        },
        base: './',
    };
});
