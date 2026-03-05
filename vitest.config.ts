import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["spec/**/*.spec.{js,ts}"],
    exclude: ["spec/cluster/**", "node_modules/**"],
    testTimeout: 30000,
  },
});
