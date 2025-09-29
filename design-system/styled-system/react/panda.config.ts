import { defineConfig } from '@pandacss/dev';
import preset from '@rolder/preset-default';
import theme from '@rolder/theme-default';

export default defineConfig({
  preflight: false,
  jsxFramework: 'react',
  presets: ['@pandacss/dev/presets', preset, theme],
  outdir: '.',
});
