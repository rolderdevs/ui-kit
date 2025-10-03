import { defineConfig } from '@pandacss/dev';
import preset from '@rolder/preset-default';
import theme from '@rolder/theme-default';

export default defineConfig({
  preflight: true,
  include: [
    '../../design-system/elements/react/src/**/*.tsx',
    '../../streamdown/packages/streamdown/lib/**/*.tsx',
    '../../streamdown/packages/streamdown/index.tsx',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: ['@pandacss/dev/presets', preset, theme],
  importMap: '@rolder/ss-react',
  jsxFramework: 'react',
  outdir: 'styled-system',
});
