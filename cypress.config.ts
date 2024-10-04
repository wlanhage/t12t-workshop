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
      on("task", {
        log(message) {
          console.log(message);

          return null;
        },
        table(message) {
          console.table(message);

          return null;
        },
      });
    },
  },
});
