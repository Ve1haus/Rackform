import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
plugins: [react()],
esbuild: {
legalComments: 'none'
},
define: {
'process.env': {}
}
});
