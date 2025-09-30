import { tabsAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const tabs = defineSlotRecipe({
  className: 'tabs',
  description: 'Tabs component',
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      boxSize: 'full',
      display: 'flex',
      '&[data-orientation="horizontal"]': {
        flexDirection: 'column',
      },
      '&[data-orientation="vertical"]': {
        flexDirection: 'row',
      },
    },
    list: {
      display: 'flex',
      pos: 'relative',
      '&[data-orientation="horizontal"]': {
        flexDirection: 'row',
      },
      '&[data-orientation="vertical"]': {
        flexDirection: 'column',
      },
    },
    trigger: {
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: '500',
      cursor: 'pointer',
      ring: 'none',
      _disabled: {
        color: 'text.muted',
      },
    },
    indicator: {
      rounded: 2,
      bg: 'fg',
      '&[data-orientation="horizontal"]': {
        h: 1,
        w: 'var(--width)',
        bottom: 0,
      },
      '&[data-orientation="vertical"]': {
        h: 'var(--height)',
        w: 1,
        right: 0,
      },
    },
  },
  variants: {
    size: {
      md: {
        list: {
          '&[data-orientation="horizontal"]': { gap: 6 },
        },
        trigger: {
          h: 11,
          textStyle: 'p3',
          '&[data-orientation="vertical"]': { pr: 4 },
        },
      },
      lg: {
        list: {
          '&[data-orientation="horizontal"]': { gap: 8 },
        },
        trigger: {
          h: '52px',
          textStyle: 'p2',
          '&[data-orientation="vertical"]': { pr: 8 },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
