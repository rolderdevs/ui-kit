import { defineRecipe } from '@pandacss/dev';

export const paper = defineRecipe({
  className: 'paper',
  description: 'Paper component',
  base: {
    bg: 'paper.bg',
    shadow: 'low',
    backdropBlur: 'sm',
    rounded: 'md',
  },
});
