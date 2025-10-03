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
      fontWeight: '500',
      ring: 'none',
    },
    branchControl: {
      display: 'flex',
      alignItems: 'center',
      paddingBlock: 1.5,
      gap: 2,
      px: 3,
      py: 2,
      rounded: 'sm',
      userSelect: 'none',
      cursor: 'pointer',
      ring: 'none',
      transition: 'color 0.1s ease-in-out, background-color 0.1s ease-in-out',
      paddingInlineStart: 'calc((var(--depth) - 1) * var(--depth-offset))',
      _selected: {
        bg: 'bg.brand',
      },
      _hover: {
        bg: 'bg.brand.accent',
      },
    },
    branchTrigger: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      rounded: 'sm',
      userSelect: 'none',
      cursor: 'pointer',
      ring: 'none',
      transition: 'background-color 0.1s ease-in-out',
      paddingInlineStart: 'calc((var(--depth) - 1) * var(--depth-offset))',
      _hover: {
        bg: 'bg.brand.accent',
      },
    },
    branchIndicator: {
      mr: 2.5,
      '&[data-state=open]': {
        transition: 'transform 0.2s',
        transform: 'rotate(90deg)',
      },
      '&[data-state=closed]': {
        transition: 'transform 0.2s',
        transform: 'rotate(0deg)',
      },
    },
    branchText: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      px: 2.5,
      py: 1.5,
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
      zIndex: 1,
      left: 'calc(((var(--depth) - 1) * var(--depth-offset)) + var(--root-offset))',
    },
    item: {
      pos: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      rounded: 'sm',
      cursor: 'pointer',
      userSelect: 'none',
      ring: 'none',
      transition: 'color 0.1s ease-in-out, background-color 0.1s ease-in-out',
      paddingInlineStart: 'calc((var(--depth) - 1) * var(--depth-offset))',
      _selected: {
        bg: 'bg.brand',
      },
      _hover: {
        bg: 'bg.brand.accent',
      },
    },
    itemText: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      px: 2.5,
      py: 1.5,
    },
  },
});
