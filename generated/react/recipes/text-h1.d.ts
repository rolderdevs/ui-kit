/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextH1Variant {
  medium: boolean
semimuted: boolean
muted: boolean
compact: boolean
link: boolean
}

type TextH1VariantMap = {
  [key in keyof TextH1Variant]: Array<TextH1Variant[key]>
}



export type TextH1VariantProps = {
  [key in keyof TextH1Variant]?: ConditionalValue<TextH1Variant[key]> | undefined
}

export interface TextH1Recipe {
  
  __type: TextH1VariantProps
  (props?: TextH1VariantProps): string
  raw: (props?: TextH1VariantProps) => TextH1VariantProps
  variantMap: TextH1VariantMap
  variantKeys: Array<keyof TextH1Variant>
  splitVariantProps<Props extends TextH1VariantProps>(props: Props): [TextH1VariantProps, Pretty<DistributiveOmit<Props, keyof TextH1VariantProps>>]
  getVariantProps: (props?: TextH1VariantProps) => TextH1VariantProps
}

/**
 * Text H1 component styles
 */
export declare const textH1: TextH1Recipe