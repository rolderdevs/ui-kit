import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const textP5Fn = /* @__PURE__ */ createRecipe('text-p5', {}, [])

const textP5VariantMap = {
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

const textP5VariantKeys = Object.keys(textP5VariantMap)

export const textP5 = /* @__PURE__ */ Object.assign(memo(textP5Fn.recipeFn), {
  __recipe__: true,
  __name__: 'textP5',
  __getCompoundVariantCss__: textP5Fn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textP5VariantKeys,
  variantMap: textP5VariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textP5VariantKeys)
  },
  getVariantProps: textP5Fn.getVariantProps,
})