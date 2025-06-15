import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
root: '.',
publicDir: 'public',
plugins: [react()],
build: {
rollupOptions: {
input: resolve(__dirname, 'public/index.html')
}
}
});
