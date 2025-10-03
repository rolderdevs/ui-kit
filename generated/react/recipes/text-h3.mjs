import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const textH3Fn = /* @__PURE__ */ createRecipe('text-h3', {}, [])

const textH3VariantMap = {
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

const textH3VariantKeys = Object.keys(textH3VariantMap)

export const textH3 = /* @__PURE__ */ Object.assign(memo(textH3Fn.recipeFn), {
  __recipe__: true,
  __name__: 'textH3',
  __getCompoundVariantCss__: textH3Fn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textH3VariantKeys,
  variantMap: textH3VariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textH3VariantKeys)
  },
  getVariantProps: textH3Fn.getVariantProps,
})