/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface PaperVariant {
  
}

type PaperVariantMap = {
  [key in keyof PaperVariant]: Array<PaperVariant[key]>
}



export type PaperVariantProps = {
  [key in keyof PaperVariant]?: ConditionalValue<PaperVariant[key]> | undefined
}

export interface PaperRecipe {
  
  __type: PaperVariantProps
  (props?: PaperVariantProps): string
  raw: (props?: PaperVariantProps) => PaperVariantProps
  variantMap: PaperVariantMap
  variantKeys: Array<keyof PaperVariant>
  splitVariantProps<Props extends PaperVariantProps>(props: Props): [PaperVariantProps, Pretty<DistributiveOmit<Props, keyof PaperVariantProps>>]
  getVariantProps: (props?: PaperVariantProps) => PaperVariantProps
}

/**
 * Paper component
 */
export declare const paper: PaperRecipe