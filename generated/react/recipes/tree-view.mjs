import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const treeViewDefaultVariants = {}
const treeViewCompoundVariants = []

const treeViewSlotNames = [
  [
    "root",
    "tree-view__root"
  ],
  [
    "label",
    "tree-view__label"
  ],
  [
    "tree",
    "tree-view__tree"
  ],
  [
    "item",
    "tree-view__item"
  ],
  [
    "itemIndicator",
    "tree-view__itemIndicator"
  ],
  [
    "itemText",
    "tree-view__itemText"
  ],
  [
    "branch",
    "tree-view__branch"
  ],
  [
    "branchControl",
    "tree-view__branchControl"
  ],
  [
    "branchTrigger",
    "tree-view__branchTrigger"
  ],
  [
    "branchContent",
    "tree-view__branchContent"
  ],
  [
    "branchText",
    "tree-view__branchText"
  ],
  [
    "branchIndicator",
    "tree-view__branchIndicator"
  ],
  [
    "branchIndentGuide",
    "tree-view__branchIndentGuide"
  ]
]
const treeViewSlotFns = /* @__PURE__ */ treeViewSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, treeViewDefaultVariants, getSlotCompoundVariant(treeViewCompoundVariants, slotName))])

const treeViewFn = memo((props = {}) => {
  return Object.fromEntries(treeViewSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const treeViewVariantKeys = []
const getVariantProps = (variants) => ({ ...treeViewDefaultVariants, ...compact(variants) })

export const treeView = /* @__PURE__ */ Object.assign(treeViewFn, {
  __recipe__: false,
  __name__: 'treeView',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: treeViewVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, treeViewVariantKeys)
  },
  getVariantProps
})