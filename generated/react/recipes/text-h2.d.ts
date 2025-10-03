/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextH2Variant {
  medium: boolean
semimuted: boolean
muted: boolean
compact: boolean
link: boolean
}

type TextH2VariantMap = {
  [key in keyof TextH2Variant]: Array<TextH2Variant[key]>
}



export type TextH2VariantProps = {
  [key in keyof TextH2Variant]?: ConditionalValue<TextH2Variant[key]> | undefined
}

export interface TextH2Recipe {
  
  __type: TextH2VariantProps
  (props?: TextH2VariantProps): string
  raw: (props?: TextH2VariantProps) => TextH2VariantProps
  variantMap: TextH2VariantMap
  variantKeys: Array<keyof TextH2Variant>
  splitVariantProps<Props extends TextH2VariantProps>(props: Props): [TextH2VariantProps, Pretty<DistributiveOmit<Props, keyof TextH2VariantProps>>]
  getVariantProps: (props?: TextH2VariantProps) => TextH2VariantProps
}

/**
 * Text H2 component styles
 */
export declare const textH2: TextH2Recipe