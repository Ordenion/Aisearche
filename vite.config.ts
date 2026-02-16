import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  envPrefix: ['VITE_', 'FIREBASE_'],
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: true,
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 8080,
  }
});