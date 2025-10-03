/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TreeViewVariant {
  
}

type TreeViewVariantMap = {
  [key in keyof TreeViewVariant]: Array<TreeViewVariant[key]>
}

type TreeViewSlot = "root" | "label" | "tree" | "item" | "itemIndicator" | "itemText" | "branch" | "branchControl" | "branchTrigger" | "branchContent" | "branchText" | "branchIndicator" | "branchIndentGuide"

export type TreeViewVariantProps = {
  [key in keyof TreeViewVariant]?: ConditionalValue<TreeViewVariant[key]> | undefined
}

export interface TreeViewRecipe {
  __slot: TreeViewSlot
  __type: TreeViewVariantProps
  (props?: TreeViewVariantProps): Pretty<Record<TreeViewSlot, string>>
  raw: (props?: TreeViewVariantProps) => TreeViewVariantProps
  variantMap: TreeViewVariantMap
  variantKeys: Array<keyof TreeViewVariant>
  splitVariantProps<Props extends TreeViewVariantProps>(props: Props): [TreeViewVariantProps, Pretty<DistributiveOmit<Props, keyof TreeViewVariantProps>>]
  getVariantProps: (props?: TreeViewVariantProps) => TreeViewVariantProps
}

/**
 * TreeView component
 */
export declare const treeView: TreeViewRecipe