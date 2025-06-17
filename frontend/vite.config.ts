import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // Accept connections from all interfaces (important for Docker/K8s)
    port: 5173,      // Ensure it listens on this port
    strictPort: true // Fails fast if port 5173 is already in use
  }
});
