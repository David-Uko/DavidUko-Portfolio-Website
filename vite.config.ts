import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // ✅ Works in both dev + production (Vercel / Netlify / GH Pages, etc)
  base: "/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(), // ✅ React only — Lovable completely removed
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));


