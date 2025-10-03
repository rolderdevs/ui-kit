import { defineGlobalStyles } from '@pandacss/dev';

export default defineGlobalStyles({
  'html, body': {
    color: 'text',
    bg: 'bg.body',
    '--global-font-body': 'IBM Plex Sans, sans-serif',
    '--global-color-placeholder': 'bg',
    '--global-color-border': 'border',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0',
  },
  mark: {
    bg: 'text.mark.bg',
    color: 'text.mark.fg',
    px: 0.5,
  },
});
