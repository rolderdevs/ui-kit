import { defineRecipe } from '@pandacss/dev';

const base = { color: 'text' };
const variants = {
  medium: { true: { fontWeight: '500' } },
  semimuted: { true: { color: 'text.semimuted' } },
  muted: { true: { color: 'text.muted' } },
  compact: { true: { lineHeight: 1 } },
  link: {
    true: {
      overflowWrap: 'anywhere',
      fontWeight: '500',
      color: 'text.accent',
      textDecoration: 'underline',
    },
  },
};

export const textH1 = defineRecipe({
  className: 'text-h1',
  description: 'Text H1 component styles',
  jsx: ['Text.H1'],
  base: { ...base, textStyle: 'h1' },
  variants,
});

export const textH2 = defineRecipe({
  className: 'text-h2',
  description: 'Text H2 component styles',
  jsx: ['Text.H2'],
  base: { ...base, textStyle: 'h2' },
  variants,
});

export const textH3 = defineRecipe({
  className: 'text-h3',
  description: 'Text H3 component styles',
  jsx: ['Text.H3'],
  base: { ...base, textStyle: 'h3' },
  variants,
});

export const textP2 = defineRecipe({
  className: 'text-p2',
  description: 'Text P2 component styles',
  jsx: ['Text.P2'],
  base: { ...base, textStyle: 'p2' },
  variants,
});

export const textP3 = defineRecipe({
  className: 'text-p3',
  description:
    'Text P3 component styles. Default styles for the Text component',
  jsx: ['Text', 'Text.P3'],
  base: { ...base, textStyle: 'p3' },
  variants,
});

export const textP4 = defineRecipe({
  className: 'text-p4',
  description: 'Text P4 component styles',
  jsx: ['Text.P4'],
  base: { ...base, textStyle: 'p4' },
  variants,
});

export const textP5 = defineRecipe({
  className: 'text-p5',
  description: 'Text P5 component styles',
  jsx: ['Text.P5'],
  base: { ...base, textStyle: 'p5' },
  variants,
});
