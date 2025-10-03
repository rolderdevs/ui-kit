import { defineConfig } from '@pandacss/dev';
import preset from '@rolder/preset-default';
import theme from '@rolder/theme-default';

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', preset, theme],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  outdir: '../../../generated/react',
  importMap: '@rolder/ss-react',
  jsxFramework: 'react',
});
