import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sentry({
      dsn: "https://0b6a3b3582026ab2055e1bad048540a8@o4507472358604800.ingest.de.sentry.io/4507472382197840",
      sourceMapsUploadOptions: {
        project: "my-portfolio",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
