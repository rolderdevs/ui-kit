import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const textP4Fn = /* @__PURE__ */ createRecipe('text-p4', {}, [])

const textP4VariantMap = {
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

const textP4VariantKeys = Object.keys(textP4VariantMap)

export const textP4 = /* @__PURE__ */ Object.assign(memo(textP4Fn.recipeFn), {
  __recipe__: true,
  __name__: 'textP4',
  __getCompoundVariantCss__: textP4Fn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textP4VariantKeys,
  variantMap: textP4VariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textP4VariantKeys)
  },
  getVariantProps: textP4Fn.getVariantProps,
})