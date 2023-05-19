import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'braash23',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
