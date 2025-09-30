import {
  createTreeCollection,
  type TreeNode,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchIndentGuide,
  TreeViewBranchIndicator,
  TreeViewBranchText,
  TreeViewBranchTrigger,
  TreeViewItem,
  TreeViewItemIndicator,
  TreeViewItemText,
  TreeViewLabel,
  TreeViewNodeCheckbox,
  TreeViewNodeCheckboxIndicator,
  TreeViewNodeProvider,
  type TreeViewNodeProviderProps,
  TreeViewRoot,
  type TreeViewRootProps,
  TreeViewRootProvider,
  TreeViewTree,
  useTreeViewNodeContext,
} from '@ark-ui/react/tree-view';
import { cx } from '@rolder/ss-react/css';
import { styled } from '@rolder/ss-react/jsx';
import { treeView } from '@rolder/ss-react/recipes';
import type { ComponentProps } from '@rolder/ss-react/types';

const StyledRoot = styled(TreeViewRoot);
const Label = styled(TreeViewLabel);
const StyledTree = styled(TreeViewTree);
const Branch = styled(TreeViewBranch);
const StyledBranchControl = styled(TreeViewBranchControl);
const StyledBranchTrigger = styled(TreeViewBranchTrigger);
const StyledBranchIndicator = styled(TreeViewBranchIndicator);
const StyledBranchText = styled(TreeViewBranchText);
const StyledBranchContent = styled(TreeViewBranchContent);
const StyledBranchIndentGuide = styled(TreeViewBranchIndentGuide);
const StyledItem = styled(TreeViewItem);
const ItemIndicator = styled(TreeViewItemIndicator);
const StyledItemText = styled(TreeViewItemText);
const NodeCheckbox = styled(TreeViewNodeCheckbox);
const NodeCheckboxIndicator = styled(TreeViewNodeCheckboxIndicator);

interface TreeProps {
  rootOffset?: string;
  depthOffset?: string;
}

const Root = <T extends TreeNode = TreeNode>({
  className,
  rootOffset = '22px',
  depthOffset = '24px',
  ...props
}: TreeViewRootProps<T> &
  TreeProps &
  Omit<ComponentProps<typeof StyledRoot>, 'collection'>) => {
  return (
    <StyledRoot
      className={cx(treeView().root, className)}
      style={
        {
          '--root-offset': rootOffset,
          '--depth-offset': depthOffset,
          ...props.style,
        } as React.CSSProperties
      }
      {...(props as ComponentProps<typeof StyledRoot>)}
    />
  );
};

const Tree = ({ className, ...props }: ComponentProps<typeof StyledTree>) => {
  return <StyledTree className={cx(treeView().tree, className)} {...props} />;
};

const BranchControl = ({
  className,
  ...props
}: ComponentProps<typeof StyledBranchControl>) => {
  return (
    <StyledBranchControl
      className={cx(treeView().branchControl, className)}
      {...props}
    />
  );
};

const BranchTrigger = ({
  className,
  ...props
}: ComponentProps<typeof StyledBranchTrigger>) => {
  const nodeContext = useTreeViewNodeContext();

  return (
    <StyledBranchTrigger
      className={cx(treeView().branchTrigger, className)}
      // Workaround: Zag.js bug - BranchTrigger doesn't include data-depth unlike BranchControl
      // This manually adds the depth attribute needed for CSS styling
      data-depth={nodeContext.depth}
      {...props}
    />
  );
};

const BranchIndicator = ({
  className,
  ...props
}: ComponentProps<typeof StyledBranchIndicator>) => {
  return (
    <StyledBranchIndicator
      className={cx(treeView().branchIndicator, className)}
      {...props}
    />
  );
};

const BranchText = ({
  className,
  ...props
}: ComponentProps<typeof StyledBranchText>) => {
  return (
    <StyledBranchText
      className={cx(treeView().branchText, className)}
      {...props}
    />
  );
};

const BranchContent = ({
  className,
  ...props
}: ComponentProps<typeof StyledBranchContent>) => {
  return (
    <StyledBranchContent
      className={cx(treeView().branchContent, className)}
      {...props}
    />
  );
};

const BranchIndentGuide = ({
  className,
  ...props
}: ComponentProps<typeof StyledBranchIndentGuide>) => {
  return (
    <StyledBranchIndentGuide
      className={cx(treeView().branchIndentGuide, className)}
      {...props}
    />
  );
};

const Item = ({ className, ...props }: ComponentProps<typeof StyledItem>) => {
  return <StyledItem className={cx(treeView().item, className)} {...props} />;
};

const ItemText = ({
  className,
  ...props
}: ComponentProps<typeof StyledItemText>) => {
  return (
    <StyledItemText className={cx(treeView().itemText, className)} {...props} />
  );
};

const RootComponent = <T extends TreeNode = TreeNode>(
  props: TreeViewRootProps<T> &
    TreeProps &
    Omit<ComponentProps<typeof StyledRoot>, 'collection'>,
) => {
  return Root<T>(props);
};

export const TreeView = Object.assign(RootComponent, {
  Label,
  Tree,
  Branch,
  BranchControl,
  BranchTrigger,
  BranchText,
  BranchIndicator,
  BranchContent,
  BranchIndentGuide,
  Item,
  ItemIndicator,
  ItemText,
  NodeCheckbox,
  NodeCheckboxIndicator,
  Provider: TreeViewRootProvider,
  NodeProvider: TreeViewNodeProvider,
});

export { createTreeCollection };
export type { TreeViewNodeProviderProps as NodeProviderProps };
