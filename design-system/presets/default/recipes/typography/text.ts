import { defineRecipe } from '@pandacss/dev';

const base = { color: 'text' };
const variants = {
  medium: { true: { fontWeight: '500' } },
  muted: { true: { color: 'text.muted' } },
  compact: { true: { lineHeight: 1 } },
};

export const textP3 = defineRecipe({
  className: 'text-p3',
  description: 'Text P3 component styles',
  base: { ...base, textStyle: 'p3' },
  variants,
});
