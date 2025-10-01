import { css, cx } from '@rolder/ss-react/css';
import { splitCssProps, styled } from '@rolder/ss-react/jsx';
import { markdown } from '@rolder/ss-react/recipes';
import type { HTMLStyledProps } from '@rolder/ss-react/types';
import { lazy, Suspense, useEffect, useState } from 'react';

interface MarkdownProps extends Omit<HTMLStyledProps<'div'>, 'children'> {
  children: string;
}

// Lazy load Streamdown component with styled wrapper
const StreamdownLazy = lazy(() =>
  import('streamdown').then((module) => {
    const StyledStreamdown = styled(module.Streamdown);
    return {
      default: StyledStreamdown,
    };
  }),
);

export const Markdown = ({ className, ...props }: MarkdownProps) => {
  const [isClient, setIsClient] = useState(false);
  const [cssProps, restProps] = splitCssProps(props);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // On server or before hydration, show fallback
  if (!isClient) {
    return (
      <div
        className={cx(markdown(), css(cssProps), className)}
        {...restProps}
      />
    );
  }

  // On client, use Streamdown with Suspense
  return (
    <Suspense
      fallback={
        <div
          className={cx(markdown(), css(cssProps), className)}
          {...restProps}
        />
      }
    >
      <StreamdownLazy
        className={cx(markdown(), css(cssProps), className)}
        {...restProps}
      />
    </Suspense>
  );
};
