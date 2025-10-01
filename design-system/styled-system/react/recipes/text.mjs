import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const textFn = /* @__PURE__ */ createRecipe('text', {
  "level": "p3"
}, [])

const textVariantMap = {
  "level": [
    "h1",
    "h2",
    "h3",
    "p2",
    "p3",
    "p4"
  ],
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

const textVariantKeys = Object.keys(textVariantMap)

export const text = /* @__PURE__ */ Object.assign(memo(textFn.recipeFn), {
  __recipe__: true,
  __name__: 'text',
  __getCompoundVariantCss__: textFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textVariantKeys,
  variantMap: textVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textVariantKeys)
  },
  getVariantProps: textFn.getVariantProps,
})