// vite.config.js

import { defineConfig } from "vite";
import postcss from "vite-plugin-postcss";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), postcss({ configFilePath: "./my-postcss-config.js" })],
  server: {     
    port: 3000, // Cambia el número de puerto a 3000.
  },
});
