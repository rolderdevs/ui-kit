import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
  className: 'button',
  description: 'Button component styles',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
    position: 'relative',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    _active: {
      transform: 'translateY(2px)',
    },
    _disabled: {
      pointerEvents: 'none',
    },
  },
  variants: {
    variant: {
      primary: {
        bg: 'button.primary.bg',
        color: 'button.primary.fg',
        _hover: {
          bg: 'button.primary.bg.hover',
        },
        _disabled: {
          color: 'button.primary.fg.disabled',
          bg: 'button.primary.bg.disabled',
        },
      },
      secondary: {
        bg: 'button.secondary.bg',
        color: 'button.secondary.fg',
        _hover: {
          bg: 'button.secondary.bg.hover',
        },
        _disabled: {
          color: 'button.secondary.fg.disabled',
          bg: 'button.secondary.bg.disabled',
        },
      },
    },
    size: {
      sm: {
        h: 8,
        px: 2,
        py: 1.5,
        gap: 1,
        rounded: 'sm',
        textStyle: 'p4',
        fontWeight: '500',
        '& > svg': {
          boxSize: 5,
        },
      },
      md: {
        h: 11,
        px: 4,
        py: 2.5,
        gap: 1.5,
        rounded: '10px',
        textStyle: 'p3',
        fontWeight: '500',
        '& > svg': {
          boxSize: 6,
        },
      },
      lg: {
        h: '52px',
        px: 5,
        py: 3.5,
        gap: 2,
        rounded: 'md',
        textStyle: 'p3',
        fontWeight: '500',
        '& > svg': {
          boxSize: 6,
        },
      },
      xl: {
        h: '72px',
        p: 5,
        gap: 2,
        rounded: 'lg',
        textStyle: 'p2',
        fontWeight: '500',
        '& > svg': {
          boxSize: 8,
        },
      },
    },
    fullWidth: {
      true: {
        width: 'full',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
