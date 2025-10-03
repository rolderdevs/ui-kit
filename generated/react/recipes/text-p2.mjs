import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const textP2Fn = /* @__PURE__ */ createRecipe('text-p2', {}, [])

const textP2VariantMap = {
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

const textP2VariantKeys = Object.keys(textP2VariantMap)

export const textP2 = /* @__PURE__ */ Object.assign(memo(textP2Fn.recipeFn), {
  __recipe__: true,
  __name__: 'textP2',
  __getCompoundVariantCss__: textP2Fn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textP2VariantKeys,
  variantMap: textP2VariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textP2VariantKeys)
  },
  getVariantProps: textP2Fn.getVariantProps,
})