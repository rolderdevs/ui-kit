import { styled } from '@rolder/ss-react/jsx';
import { iconButton } from '@rolder/ss-react/recipes';
import type { ComponentProps } from '@rolder/ss-react/types';

const StyledIconButton = styled('button', iconButton);

export const IconButton = (props: ComponentProps<typeof StyledIconButton>) => {
  return <StyledIconButton type="button" {...props} />;
};
