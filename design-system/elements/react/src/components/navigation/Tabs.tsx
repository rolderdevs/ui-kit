import {
  TabContent,
  TabIndicator,
  TabList,
  TabsRoot,
  TabsRootProvider,
  TabTrigger,
  useTabs,
} from '@ark-ui/react/tabs';
import { cx } from '@rolder/ss-react/css';
import { styled } from '@rolder/ss-react/jsx';
import { type TabsVariantProps, tabs } from '@rolder/ss-react/recipes';
import type { ComponentProps } from '@rolder/ss-react/types';
import { createContext, useContext } from 'react';

const StyledRoot = styled(TabsRoot);
const StyledList = styled(TabList);
const StyledTrigger = styled(TabTrigger);
const StyledIndicator = styled(TabIndicator);
const Content = styled(TabContent);

interface TabsContextValue {
  size: TabsVariantProps['size'];
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsStyles = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabsStyles must be used within a Tabs');
  }
  return context;
};

const Root = ({
  className,
  size,
  ...props
}: ComponentProps<typeof StyledRoot> & TabsVariantProps) => {
  return (
    <TabsContext.Provider value={{ size }}>
      <StyledRoot
        className={cx(tabs({ size }).root, className)}
        lazyMount
        {...props}
      />
    </TabsContext.Provider>
  );
};

const List = ({ className, ...props }: ComponentProps<typeof StyledList>) => {
  const { size } = useTabsStyles();

  return (
    <StyledList className={cx(tabs({ size }).list, className)} {...props} />
  );
};

const Trigger = ({
  className,
  ...props
}: ComponentProps<typeof StyledTrigger>) => {
  const { size } = useTabsStyles();

  return (
    <StyledTrigger
      className={cx(tabs({ size }).trigger, className)}
      {...props}
    />
  );
};

const Indicator = ({
  className,
  ...props
}: ComponentProps<typeof StyledIndicator>) => {
  return (
    <StyledIndicator className={cx(tabs().indicator, className)} {...props} />
  );
};

export const Tabs = Object.assign(Root, {
  List,
  Trigger,
  Indicator,
  Content,
  Provider: TabsRootProvider,
});

export { useTabs };
