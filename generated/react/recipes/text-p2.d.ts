/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextP2Variant {
  medium: boolean
semimuted: boolean
muted: boolean
compact: boolean
link: boolean
}

type TextP2VariantMap = {
  [key in keyof TextP2Variant]: Array<TextP2Variant[key]>
}



export type TextP2VariantProps = {
  [key in keyof TextP2Variant]?: ConditionalValue<TextP2Variant[key]> | undefined
}

export interface TextP2Recipe {
  
  __type: TextP2VariantProps
  (props?: TextP2VariantProps): string
  raw: (props?: TextP2VariantProps) => TextP2VariantProps
  variantMap: TextP2VariantMap
  variantKeys: Array<keyof TextP2Variant>
  splitVariantProps<Props extends TextP2VariantProps>(props: Props): [TextP2VariantProps, Pretty<DistributiveOmit<Props, keyof TextP2VariantProps>>]
  getVariantProps: (props?: TextP2VariantProps) => TextP2VariantProps
}

/**
 * Text P2 component styles
 */
export declare const textP2: TextP2Recipe