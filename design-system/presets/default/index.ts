import { definePreset } from '@pandacss/dev';
import recipes from './recipes';
import slotRecipes from './slotRecipes';
import { collapsibleKeyframes } from './slotRecipes/layout';

export default definePreset({
  name: 'rolder-preset-default',
  theme: {
    extend: {
      recipes,
      slotRecipes,
      keyframes: collapsibleKeyframes,
    },
  },
  staticCss: {
    recipes: {
      // tabs: ['*'],
    },
  },
});
