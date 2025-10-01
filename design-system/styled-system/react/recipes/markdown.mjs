import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const markdownFn = /* @__PURE__ */ createRecipe('markdown', {}, [])

const markdownVariantMap = {}

const markdownVariantKeys = Object.keys(markdownVariantMap)

export const markdown = /* @__PURE__ */ Object.assign(memo(markdownFn.recipeFn), {
  __recipe__: true,
  __name__: 'markdown',
  __getCompoundVariantCss__: markdownFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: markdownVariantKeys,
  variantMap: markdownVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, markdownVariantKeys)
  },
  getVariantProps: markdownFn.getVariantProps,
})