import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**'],
    },
  },
  lib: [
    {
      bundle: true,
      dts: true,
      format: 'esm',
      autoExternal: {
        dependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
        devDependencies: false,
      },
    },
  ],
  output: {
    target: 'web',
    externals: ['react', 'react-dom', '@rolder/ss-react'],
    emitCss: true,
  },
  plugins: [pluginReact()],
});
