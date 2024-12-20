import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './',
    build: {
        outDir: 'dist-react',
    },
    server: {
        port: 5123,
        strictPort: true, // If port not available, vite will warn us and only start the server when the port is available
    },
})
