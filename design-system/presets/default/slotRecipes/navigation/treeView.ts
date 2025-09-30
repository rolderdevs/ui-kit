import { treeViewAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const treeView = defineSlotRecipe({
  className: 'tree-view',
  description: 'TreeView component',
  slots: [...treeViewAnatomy.keys(), 'branchIndentGuide'],
  base: {
    tree: {
      display: 'flex',
      flexDirection: 'column',
      textStyle: 'p4',
      ring: 'none',
    },
    branchControl: {
      display: 'flex',
      alignItems: 'center',
      paddingBlock: 1.5,
      gap: 2,
      rounded: 'sm',
      userSelect: 'none',
      cursor: 'pointer',
      ring: 'none',
      transition: 'color 0.2s ease-in-out, background-color 0.2s ease-in-out',
      paddingInlineStart:
        'calc((var(--depth) - 1) * var(--tree-indent-size, 24px) + var(--tree-base-offset, 16px))',
      '&[data-depth="1"]': {
        paddingInlineStart: 'var(--tree-base-offset, 16px)',
      },
      _selected: {
        color: 'fg',
      },
      _hover: {
        bg: 'fg.secondary.muted',
      },
    },
    branchTrigger: {
      display: 'flex',
      alignItems: 'center',
      paddingBlock: 1.5,
      gap: 2,
      rounded: 'sm',
      userSelect: 'none',
      cursor: 'pointer',
      ring: 'none',
      transition: 'background-color 0.2s ease-in-out',
      paddingInlineStart:
        'calc((var(--depth) - 1) * var(--tree-indent-size, 24px) + var(--tree-base-offset, 16px))',
      '&[data-depth="1"]': {
        paddingInlineStart: 'var(--tree-base-offset, 16px)',
      },
      _hover: {
        bg: 'fg.secondary.muted',
      },
    },
    branchIndicator: {
      '&[data-state=open]': {
        transition: 'transform 0.2s',
        transformOrigin: 'center',
        transform: 'rotate(90deg)',
      },
      '&[data-state=closed]': {
        transition: 'transform 0.2s',
        transformOrigin: 'center',
        transform: 'rotate(0deg)',
      },
    },
    branchText: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },
    branchContent: {
      pos: 'relative',
      overflow: 'hidden',
      '&[data-state="open"]': {
        animation: 'collapsibleSlideDown 300ms',
      },
      '&[data-state="closed"]': {
        animation: 'collapsibleSlideUp 300ms',
      },
    },
    branchIndentGuide: {
      pos: 'absolute',
      w: '1px',
      h: 'full',
      bg: 'border',
      left: 'calc((var(--depth) - 1) * var(--tree-indent-size, 24px) + var(--tree-guide-offset, 28px))',
      '&[data-depth="1"]': {
        left: 'var(--tree-guide-offset, 28px)',
      },
    },
    item: {
      pos: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingBlock: 1.5,
      gap: 2,
      rounded: 'sm',
      cursor: 'pointer',
      userSelect: 'none',
      ring: 'none',
      transition: 'color 0.2s ease-in-out, background-color 0.2s ease-in-out',
      paddingInlineStart:
        'calc((var(--depth) * var(--tree-indent-size, 24px)) + var(--tree-indent-size, 24px))',
      _selected: {
        color: 'fg',
      },
      _hover: {
        bg: 'fg.secondary.muted',
      },
    },
    itemText: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },
  },
});
