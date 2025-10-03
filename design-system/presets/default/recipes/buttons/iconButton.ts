import { defineRecipe } from '@pandacss/dev';

export const iconButton = defineRecipe({
  className: 'icon-button',
  description: 'Icon button component',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
    position: 'relative',
    userSelect: 'none',
    color: 'icon.fg',
    '& > svg': {
      strokeWidth: 1.25,
    },
    _hover: {
      color: 'icon.fg.hover',
      bg: 'icon.bg.hover',
    },
    _active: {
      color: 'icon.fg.active',
      bg: 'icon.bg.active',
    },
    _disabled: {
      pointerEvents: 'none',
      color: 'icon.fg.disabled',
      bg: 'icon.bg.disabled',
    },
  },
  variants: {
    size: {
      xs: {
        rounded: '6px',
        boxSize: 6,
        '& > svg': {
          boxSize: 4,
        },
      },
      sm: {
        rounded: '10px',
        boxSize: 8,
        '& > svg': {
          boxSize: 6,
        },
      },
      md: {
        rounded: '10px',
        boxSize: 11,
        '& > svg': {
          boxSize: 6,
        },
      },
      lg: {
        rounded: '10px',
        boxSize: '52px',
        '& > svg': {
          boxSize: 8,
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});
