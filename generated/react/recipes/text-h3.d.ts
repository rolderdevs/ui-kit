/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextH3Variant {
  medium: boolean
semimuted: boolean
muted: boolean
compact: boolean
link: boolean
}

type TextH3VariantMap = {
  [key in keyof TextH3Variant]: Array<TextH3Variant[key]>
}



export type TextH3VariantProps = {
  [key in keyof TextH3Variant]?: ConditionalValue<TextH3Variant[key]> | undefined
}

export interface TextH3Recipe {
  
  __type: TextH3VariantProps
  (props?: TextH3VariantProps): string
  raw: (props?: TextH3VariantProps) => TextH3VariantProps
  variantMap: TextH3VariantMap
  variantKeys: Array<keyof TextH3Variant>
  splitVariantProps<Props extends TextH3VariantProps>(props: Props): [TextH3VariantProps, Pretty<DistributiveOmit<Props, keyof TextH3VariantProps>>]
  getVariantProps: (props?: TextH3VariantProps) => TextH3VariantProps
}

/**
 * Text H3 component styles
 */
export declare const textH3: TextH3Recipe