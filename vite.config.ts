import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "vendor-react";
          }

          if (
            id.includes("node_modules/wouter/") ||
            id.includes("node_modules/@tanstack/") ||
            id.includes("node_modules/zod/") ||
            id.includes("node_modules/react-hook-form/") ||
            id.includes("node_modules/@hookform/")
          ) {
            return "vendor-libs";
          }

          if (id.includes("node_modules/lucide-react/")) {
            return "icons";
          }

          if (
            id.includes("node_modules/@radix-ui/") ||
            id.includes("/components/ui/")
          ) {
            return "ui";
          }

          if (
            id.includes("/components/navigation") ||
            id.includes("/components/hero-section") ||
            id.includes("/components/animated-background") ||
            id.includes("/components/gradient-orb") ||
            id.includes("/components/sticky-phone-section") ||
            id.includes("/components/scroll-to-top") ||
            id.includes("/components/theme-provider")
          ) {
            return "hero";
          }

          if (
            id.includes("/components/features-section") ||
            id.includes("/components/services-section") ||
            id.includes("/components/about-section") ||
            id.includes("/components/industries-section") ||
            id.includes("/components/integrations-section") ||
            id.includes("/components/footer") ||
            id.includes("/components/chatbot-button")
          ) {
            return "sections";
          }

          if (
            id.includes("/components/cookie-banner") ||
            id.includes("/components/ui/toaster")
          ) {
            return "async-ui";
          }

          if (
            id.includes("/pages/ki-telefonassistent") ||
            id.includes("/pages/ki-chatbot") ||
            id.includes("/pages/ki-mailbot") ||
            id.includes("/pages/ki-workflow-automation")
          ) {
            return "pages-ki";
          }

          if (
            id.includes("/pages/impressum") ||
            id.includes("/pages/preise") ||
            id.includes("/pages/leistungsbeschreibung") ||
            id.includes("/pages/not-found")
          ) {
            return "pages-info";
          }

          if (
            id.includes("/pages/datenschutz-webapp") ||
            id.includes("/pages/datenschutz") ||
            id.includes("/pages/agb")
          ) {
            return "pages-legal";
          }
        },
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
