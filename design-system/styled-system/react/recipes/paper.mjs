import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const paperFn = /* @__PURE__ */ createRecipe('paper', {}, [])

const paperVariantMap = {}

const paperVariantKeys = Object.keys(paperVariantMap)

export const paper = /* @__PURE__ */ Object.assign(memo(paperFn.recipeFn), {
  __recipe__: true,
  __name__: 'paper',
  __getCompoundVariantCss__: paperFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: paperVariantKeys,
  variantMap: paperVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, paperVariantKeys)
  },
  getVariantProps: paperFn.getVariantProps,
})