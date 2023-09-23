import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  // Enable Solid to support Solid JSX components.
  integrations: [solid(), tailwind(), partytown()],
  output: "server",
  adapter: netlify()
});