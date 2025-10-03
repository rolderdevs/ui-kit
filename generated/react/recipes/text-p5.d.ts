/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextP5Variant {
  medium: boolean
semimuted: boolean
muted: boolean
compact: boolean
link: boolean
}

type TextP5VariantMap = {
  [key in keyof TextP5Variant]: Array<TextP5Variant[key]>
}



export type TextP5VariantProps = {
  [key in keyof TextP5Variant]?: ConditionalValue<TextP5Variant[key]> | undefined
}

export interface TextP5Recipe {
  
  __type: TextP5VariantProps
  (props?: TextP5VariantProps): string
  raw: (props?: TextP5VariantProps) => TextP5VariantProps
  variantMap: TextP5VariantMap
  variantKeys: Array<keyof TextP5Variant>
  splitVariantProps<Props extends TextP5VariantProps>(props: Props): [TextP5VariantProps, Pretty<DistributiveOmit<Props, keyof TextP5VariantProps>>]
  getVariantProps: (props?: TextP5VariantProps) => TextP5VariantProps
}

/**
 * Text P5 component styles
 */
export declare const textP5: TextP5Recipe