import { definePreset } from '@pandacss/dev';
import recipes from './recipes';

export default definePreset({
  name: 'rolder-preset-default',
  theme: {
    extend: {
      recipes,
    },
  },
  staticCss: {
    recipes: {
      // message: ['*'],
      // iconButton: ['*'],
      // toast: ['*'],
      // streamdown: ['*'],
    },
  },
});
