import { defineConfig } from '@pandacss/dev';
import preset from '@rolder/preset-default';

export default defineConfig({
  presets: ['@pandacss/dev/presets', preset],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  outdir: '../../../generated/react',
  importMap: '@rolder/ss-react',
  jsxFramework: 'react',
});
