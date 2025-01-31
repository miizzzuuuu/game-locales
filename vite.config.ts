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
                        if (id.includes('i18next')) {
                            return 'i18next';
                        }

                        if (id.includes('@lottielab')) {
                            return 'lottie';
                        }

                        if (id.includes('react')) {
                            return 'react';
                        }

                        if (id.includes('node_modules')) {
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
