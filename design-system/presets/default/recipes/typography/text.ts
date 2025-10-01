import { defineRecipe } from '@pandacss/dev';

export const text = defineRecipe({
  className: 'text',
  description: 'Text component styles',
  base: { color: 'text' },
  variants: {
    level: {
      h1: { textStyle: 'h1' },
      h2: { textStyle: 'h2' },
      h3: { textStyle: 'h3' },
      p2: { textStyle: 'p2' },
      p3: { textStyle: 'p3' },
      p4: { textStyle: 'p4' },
    },
    medium: { true: { fontWeight: '500' } },
    muted: { true: { color: 'text.muted' } },
    compact: { true: { lineHeight: 1 } },
  },
  defaultVariants: {
    level: 'p3',
  },
});
