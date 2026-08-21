import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/zoe-personal-portfolio/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
