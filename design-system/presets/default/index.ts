import { definePreset } from '@pandacss/dev';
import recipes from './recipes';
import slotRecipes from './slotRecipes';

export default definePreset({
  name: 'rolder-preset-default',
  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },
  staticCss: {
    recipes: {
      // tabs: ['*'],
    },
  },
});
