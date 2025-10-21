import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // exposes to network (0.0.0.0)
    allowedHosts: [
      ".ngrok-free.app", // ✅ allow any ngrok subdomain
      "localhost",
    ],
    port: 5173, // optional, same port as your app
  },
});
