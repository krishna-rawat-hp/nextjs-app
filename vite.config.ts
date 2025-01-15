// filepath: /Users/krishnakantrawat/Documents/learning/reactjs/first-vite-react-app/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Ensure this matches the directory specified in the deploy script
  },
  base: "/nextjs-app/", // This should match your repository name
});
