import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const textH2Fn = /* @__PURE__ */ createRecipe('text-h2', {}, [])

const textH2VariantMap = {
  "medium": [
    "true"
  ],
  "semimuted": [
    "true"
  ],
  "muted": [
    "true"
  ],
  "compact": [
    "true"
  ],
  "link": [
    "true"
  ]
}

const textH2VariantKeys = Object.keys(textH2VariantMap)

export const textH2 = /* @__PURE__ */ Object.assign(memo(textH2Fn.recipeFn), {
  __recipe__: true,
  __name__: 'textH2',
  __getCompoundVariantCss__: textH2Fn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textH2VariantKeys,
  variantMap: textH2VariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textH2VariantKeys)
  },
  getVariantProps: textH2Fn.getVariantProps,
})