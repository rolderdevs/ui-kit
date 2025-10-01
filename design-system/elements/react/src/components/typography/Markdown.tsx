'use client';

import { cx } from '@rolder/ss-react/css';
import { styled } from '@rolder/ss-react/jsx';
import { markdown } from '@rolder/ss-react/recipes';
import type { ComponentProps } from '@rolder/ss-react/types';
import { Streamdown } from 'streamdown';

const StyledMardown = styled(Streamdown);

export const Markdown = ({
  className,
  ...props
}: ComponentProps<typeof StyledMardown>) => {
  return <StyledMardown className={cx(markdown(), className)} {...props} />;
};
