import { defineConfig } from "cypress";
import customViteConfig from "./vite.config";

export default defineConfig({
  video: false,

  component: {
    setupNodeEvents(on, config) {},
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: customViteConfig,
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
