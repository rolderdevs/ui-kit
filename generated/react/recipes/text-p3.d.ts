/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextP3Variant {
  medium: boolean
muted: boolean
compact: boolean
}

type TextP3VariantMap = {
  [key in keyof TextP3Variant]: Array<TextP3Variant[key]>
}



export type TextP3VariantProps = {
  [key in keyof TextP3Variant]?: ConditionalValue<TextP3Variant[key]> | undefined
}

export interface TextP3Recipe {
  
  __type: TextP3VariantProps
  (props?: TextP3VariantProps): string
  raw: (props?: TextP3VariantProps) => TextP3VariantProps
  variantMap: TextP3VariantMap
  variantKeys: Array<keyof TextP3Variant>
  splitVariantProps<Props extends TextP3VariantProps>(props: Props): [TextP3VariantProps, Pretty<DistributiveOmit<Props, keyof TextP3VariantProps>>]
  getVariantProps: (props?: TextP3VariantProps) => TextP3VariantProps
}

/**
 * Text P3 component styles
 */
export declare const textP3: TextP3Recipe