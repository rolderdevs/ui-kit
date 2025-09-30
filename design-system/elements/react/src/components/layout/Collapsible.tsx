import {
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleRoot,
  CollapsibleRootProvider,
  CollapsibleTrigger,
  useCollapsible,
} from '@ark-ui/react/collapsible';
import { cx } from '@rolder/ss-react/css';
import { styled } from '@rolder/ss-react/jsx';
import { collapsible } from '@rolder/ss-react/recipes';
import type { ComponentProps } from '@rolder/ss-react/types';

const StyledRoot = styled(CollapsibleRoot);
const StyledTrigger = styled(CollapsibleTrigger);
const Indicator = styled(CollapsibleIndicator);
const StyledContent = styled(CollapsibleContent);

const Root = ({ className, ...props }: ComponentProps<typeof StyledRoot>) => {
  return (
    <StyledRoot
      className={cx(collapsible().root, className)}
      lazyMount
      unmountOnExit
      {...props}
    />
  );
};

const Trigger = ({
  className,
  ...props
}: ComponentProps<typeof StyledTrigger>) => {
  return (
    <StyledTrigger
      className={cx(collapsible().trigger, className)}
      {...props}
    />
  );
};

const Content = ({
  className,
  ...props
}: ComponentProps<typeof StyledContent>) => {
  return (
    <StyledContent
      className={cx(collapsible().content, className)}
      {...props}
    />
  );
};

export const Collapsible = Object.assign(Root, {
  Trigger,
  Indicator,
  Content,
  Provider: CollapsibleRootProvider,
});

export { useCollapsible };
