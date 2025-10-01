/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface MarkdownVariant {
  
}

type MarkdownVariantMap = {
  [key in keyof MarkdownVariant]: Array<MarkdownVariant[key]>
}



export type MarkdownVariantProps = {
  [key in keyof MarkdownVariant]?: ConditionalValue<MarkdownVariant[key]> | undefined
}

export interface MarkdownRecipe {
  
  __type: MarkdownVariantProps
  (props?: MarkdownVariantProps): string
  raw: (props?: MarkdownVariantProps) => MarkdownVariantProps
  variantMap: MarkdownVariantMap
  variantKeys: Array<keyof MarkdownVariant>
  splitVariantProps<Props extends MarkdownVariantProps>(props: Props): [MarkdownVariantProps, Pretty<DistributiveOmit<Props, keyof MarkdownVariantProps>>]
  getVariantProps: (props?: MarkdownVariantProps) => MarkdownVariantProps
}

/**
 * Markdown component
 */
export declare const markdown: MarkdownRecipe