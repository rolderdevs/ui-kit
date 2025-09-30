import { css } from '@rolder/ss-react/css';
import {
  createTreeCollection,
  type NodeProviderProps,
  Paper,
  TreeView,
} from '@rolder/ui-kit-react';
import {
  type Icon,
  IconChevronRight,
  IconKeyboard,
  IconNotes,
  IconSquareF2,
} from '@tabler/icons-react';
import { Link, useRouter } from '@tanstack/react-router';

const Navigation = () => {
  const router = useRouter();
  const currentPath = router.state.location.pathname;
  const defaultExpandedValue = currentPath.replace(/\/[^/]*$/, '');

  return (
    <Paper h="screen" rounded={0} minW="180px">
      <TreeView<Node>
        collection={collection}
        defaultSelectedValue={[currentPath]}
        defaultExpandedValue={[defaultExpandedValue]}
      >
        <TreeView.Label my={2} textAlign="center">
          Rolder UI Kit v3
        </TreeView.Label>
        <TreeView.Tree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNode key={node.id} node={node} indexPath={[index]} />
          ))}
        </TreeView.Tree>
      </TreeView>
    </Paper>
  );
};

const TreeNode = (props: NodeProviderProps<Node>) => {
  const { node, indexPath } = props;
  return (
    <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      {node.children ? (
        <TreeView.Branch>
          <TreeView.BranchTrigger rounded={0}>
            <TreeView.BranchText>
              {node.icon && <node.icon strokeWidth={1.25} />}
              {node.name}
            </TreeView.BranchText>
            <TreeView.BranchIndicator>
              <IconChevronRight strokeWidth={1} />
            </TreeView.BranchIndicator>
          </TreeView.BranchTrigger>
          <TreeView.BranchContent>
            <TreeView.BranchIndentGuide />
            {node.children.map((child, index) => (
              <TreeNode
                key={child.id}
                node={child}
                indexPath={[...indexPath, index]}
              />
            ))}
          </TreeView.BranchContent>
        </TreeView.Branch>
      ) : (
        <TreeView.Item rounded={0}>
          <TreeView.ItemText asChild>
            <Link to={node.id} className={css({ w: 'full' })} preload="intent">
              {node.icon && <node.icon strokeWidth={1.25} />}
              {node.name}
            </Link>
          </TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  );
};

interface Node {
  id: string;
  name: string;
  icon?: Icon;
  children?: Node[] | undefined;
}

const collection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: 'ROOT',
    name: '',
    children: [
      {
        id: '/',
        name: 'Changelog',
        icon: IconNotes,
      },
      {
        id: '/buttons',
        name: 'Buttons',
        icon: IconKeyboard,
        children: [
          { id: '/buttons/button', name: 'Button', icon: IconSquareF2 },
        ],
      },
    ],
  },
});

export default Navigation;
