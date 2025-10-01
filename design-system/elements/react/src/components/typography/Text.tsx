import { cx } from '@rolder/ss-react/css';
import { type TextVariantProps, text } from '@rolder/ss-react/recipes';

type TextHTMLProps = React.HTMLAttributes<HTMLElement>;

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TextProps = TextVariantProps & TextHTMLProps & { as?: TextElement };

export function Text(props: TextProps) {
  const [variantProps, localProps] = text.splitVariantProps(props);
  const { as: Component = 'p', className, ...restProps } = localProps;
  return (
    <Component className={cx(text(variantProps), className)} {...restProps} />
  );
}
