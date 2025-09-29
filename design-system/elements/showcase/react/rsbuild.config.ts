import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: { title: 'Rolder UI Kit Showcase for React' },
  server: { port: 8001 },
});
