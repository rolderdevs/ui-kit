import {
  createTreeCollection,
  type NodeProviderProps,
  TreeView,
} from '@rolder/ui-kit-react';
import './App.css';
import { IconChevronRight, IconFile, IconFolder } from '@tabler/icons-react';

const App = () => {
  return (
    <TreeView<Node> collection={collection} m={4}>
      <TreeView.Label>Tree</TreeView.Label>
      <TreeView.Tree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNode key={node.id} node={node} indexPath={[index]} />
        ))}
      </TreeView.Tree>
    </TreeView>
  );
};

const TreeNode = (props: NodeProviderProps<Node>) => {
  const { node, indexPath } = props;
  return (
    <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      {node.children ? (
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchIndicator>
              <IconChevronRight />
            </TreeView.BranchIndicator>
            <TreeView.BranchText>
              <IconFolder /> {node.name}
            </TreeView.BranchText>
          </TreeView.BranchControl>
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
        <TreeView.Item>
          <TreeView.ItemText>
            <IconFile />
            {node.name}
          </TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  );
};

interface Node {
  id: string;
  name: string;
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
        id: 'node_modules',
        name: 'node_modules',
        children: [
          { id: 'node_modules/zag-js', name: 'zag-js' },
          { id: 'node_modules/pandacss', name: 'panda' },
          {
            id: 'node_modules/@types',
            name: '@types',
            children: [
              { id: 'node_modules/@types/react', name: 'react' },
              {
                id: 'node_modules/@types/react-dom',
                name: 'react-dom',
                children: [
                  { id: 'node_modules/@types/react2', name: 'react' },
                  {
                    id: 'node_modules/@types/react-dom2',
                    name: 'react-dom',
                    children: [
                      { id: 'node_modules/@types/react3', name: 'react' },
                      {
                        id: 'node_modules/@types/react-dom3',
                        name: 'react-dom',
                        children: [
                          { id: 'node_modules/@types/react4', name: 'react' },
                          {
                            id: 'node_modules/@types/react-dom4',
                            name: 'react-dom',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'src',
        name: 'src',
        children: [
          { id: 'src/app.tsx', name: 'app.tsx' },
          { id: 'src/index.ts', name: 'index.ts' },
        ],
      },
      { id: 'panda.config', name: 'panda.config.ts' },
      { id: 'package.json', name: 'package.json' },
      { id: 'renovate.json', name: 'renovate.json' },
      { id: 'readme.md', name: 'README.md' },
    ],
  },
});

export default App;
