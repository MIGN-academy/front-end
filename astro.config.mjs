import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";
import {nodePolyfills} from "vite-plugin-node-polyfills";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), vue()],
  vite: {
    plugins: [nodePolyfills()]
  }
});