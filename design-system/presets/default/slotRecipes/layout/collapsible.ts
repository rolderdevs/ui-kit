import { collapsibleAnatomy } from '@ark-ui/anatomy';
import { defineKeyframes, defineSlotRecipe } from '@pandacss/dev';

export const collapsible = defineSlotRecipe({
  className: 'collapsible',
  description: 'Collapsible component',
  slots: collapsibleAnatomy.keys(),
  base: {
    root: {},
    trigger: {
      ring: 'none',
      display: 'inline-flex',
      gap: 1,
    },
    content: {
      overflow: 'hidden',
      '&[data-state="open"]': {
        animation: 'collapsibleSlideDown 300ms',
      },
      '&[data-state="closed"]': {
        animation: 'collapsibleSlideUp 300ms',
      },
    },
  },
});

export const collapsibleKeyframes = defineKeyframes({
  collapsibleSlideDown: {
    '0%': { height: '0' },
    '100%': { height: 'var(--height)' },
  },
  collapsibleSlideUp: {
    '0%': { height: 'var(--height)' },
    '100%': { height: '0' },
  },
});
