'use client';

import { Streamdown } from '@rolder/streamdown';
import { type ComponentProps, memo } from 'react';

export const Response = memo(
  (p: ComponentProps<typeof Streamdown>) => <Streamdown {...p} />,
  (prevProps, nextProps) => prevProps.children === nextProps.children,
);

Response.displayName = 'Response';
