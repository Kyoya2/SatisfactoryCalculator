import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/SatisfactoryCalculator/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./scripts")
    }
  }
});
