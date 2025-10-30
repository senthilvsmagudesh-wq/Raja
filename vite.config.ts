import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "client"), // Set client as root
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Relative to new root
      "@shared": path.resolve(__dirname, "..", "shared"), // Relative to new root
      "@assets": path.resolve(__dirname, "..", "attached_assets"), // Relative to new root
    },
  },
  build: {
    outDir: path.resolve(__dirname, "..", "dist/public"), // Relative to new root
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});