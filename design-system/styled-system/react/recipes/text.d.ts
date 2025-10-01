/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextVariant {
  /**
 * @default "p3"
 */
level: "h1" | "h2" | "h3" | "p2" | "p3" | "p4"
medium: boolean
muted: boolean
compact: boolean
}

type TextVariantMap = {
  [key in keyof TextVariant]: Array<TextVariant[key]>
}



export type TextVariantProps = {
  [key in keyof TextVariant]?: ConditionalValue<TextVariant[key]> | undefined
}

export interface TextRecipe {
  
  __type: TextVariantProps
  (props?: TextVariantProps): string
  raw: (props?: TextVariantProps) => TextVariantProps
  variantMap: TextVariantMap
  variantKeys: Array<keyof TextVariant>
  splitVariantProps<Props extends TextVariantProps>(props: Props): [TextVariantProps, Pretty<DistributiveOmit<Props, keyof TextVariantProps>>]
  getVariantProps: (props?: TextVariantProps) => TextVariantProps
}

/**
 * Text component styles
 */
export declare const text: TextRecipe