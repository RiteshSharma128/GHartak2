// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     port: 5173, // Default frontend port
//     proxy: {
//       // ⚡ The Magic Rule:
//       // Any request starting with "/api" is forwarded to port 4000
//       "/api": {
//         target: "http://localhost:5000",
//         // target: "https://ghartak-hlde.onrender.com"
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://ghartak-hlde.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
