import { defineConfig } from '@pandacss/dev';
import preset from '@rolder/preset-default';
import theme from '@rolder/theme-default';

export default defineConfig({
  preflight: true,
  include: ['@rolder/ui-kit-react/src/**/*.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: ['@pandacss/dev/presets', preset, theme],
  importMap: '@rolder/ss-react',
  jsxFramework: 'react',
  outdir: 'styled-system',
});
