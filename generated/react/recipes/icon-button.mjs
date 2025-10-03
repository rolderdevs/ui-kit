import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const iconButtonFn = /* @__PURE__ */ createRecipe('icon-button', {
  "size": "sm"
}, [])

const iconButtonVariantMap = {
  "size": [
    "xs",
    "sm",
    "md",
    "lg"
  ]
}

const iconButtonVariantKeys = Object.keys(iconButtonVariantMap)

export const iconButton = /* @__PURE__ */ Object.assign(memo(iconButtonFn.recipeFn), {
  __recipe__: true,
  __name__: 'iconButton',
  __getCompoundVariantCss__: iconButtonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: iconButtonVariantKeys,
  variantMap: iconButtonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, iconButtonVariantKeys)
  },
  getVariantProps: iconButtonFn.getVariantProps,
})