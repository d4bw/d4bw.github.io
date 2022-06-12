import { defineConfig } from 'astro/config';

import solid from "@astrojs/solid-js";
// import yaml from "@rollup/plugin-yaml";
import yaml from "@d4bw/rollup-plugin-yaml";

// https://astro.build/config
export default defineConfig({
  site: 'https://d4bw.github.io',
  integrations: [solid()],                                    // allow writing components in Solid.js
  vite: {
    plugins: [yaml()],                                        // allow importing yaml files
    resolve: { alias: [
      { find: '@', replacement: "/src" },                     // allow absolute path imports from `src`
      { find: '~', replacement: (new URL("..", import.meta.url)).pathname },    // allow absolute path imports from the project root
    ] }, 
  },
});