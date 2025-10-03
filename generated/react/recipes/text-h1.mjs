import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const textH1Fn = /* @__PURE__ */ createRecipe('text-h1', {}, [])

const textH1VariantMap = {
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

const textH1VariantKeys = Object.keys(textH1VariantMap)

export const textH1 = /* @__PURE__ */ Object.assign(memo(textH1Fn.recipeFn), {
  __recipe__: true,
  __name__: 'textH1',
  __getCompoundVariantCss__: textH1Fn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textH1VariantKeys,
  variantMap: textH1VariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textH1VariantKeys)
  },
  getVariantProps: textH1Fn.getVariantProps,
})