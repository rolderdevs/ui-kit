/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextP4Variant {
  medium: boolean
semimuted: boolean
muted: boolean
compact: boolean
link: boolean
}

type TextP4VariantMap = {
  [key in keyof TextP4Variant]: Array<TextP4Variant[key]>
}



export type TextP4VariantProps = {
  [key in keyof TextP4Variant]?: ConditionalValue<TextP4Variant[key]> | undefined
}

export interface TextP4Recipe {
  
  __type: TextP4VariantProps
  (props?: TextP4VariantProps): string
  raw: (props?: TextP4VariantProps) => TextP4VariantProps
  variantMap: TextP4VariantMap
  variantKeys: Array<keyof TextP4Variant>
  splitVariantProps<Props extends TextP4VariantProps>(props: Props): [TextP4VariantProps, Pretty<DistributiveOmit<Props, keyof TextP4VariantProps>>]
  getVariantProps: (props?: TextP4VariantProps) => TextP4VariantProps
}

/**
 * Text P4 component styles
 */
export declare const textP4: TextP4Recipe