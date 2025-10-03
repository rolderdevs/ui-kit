import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const textP3Fn = /* @__PURE__ */ createRecipe('text-p3', {}, [])

const textP3VariantMap = {
  "medium": [
    "true"
  ],
  "muted": [
    "true"
  ],
  "compact": [
    "true"
  ]
}

const textP3VariantKeys = Object.keys(textP3VariantMap)

export const textP3 = /* @__PURE__ */ Object.assign(memo(textP3Fn.recipeFn), {
  __recipe__: true,
  __name__: 'textP3',
  __getCompoundVariantCss__: textP3Fn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textP3VariantKeys,
  variantMap: textP3VariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textP3VariantKeys)
  },
  getVariantProps: textP3Fn.getVariantProps,
})