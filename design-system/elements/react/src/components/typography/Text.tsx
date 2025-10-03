import { styled } from '@rolder/ss-react/jsx';
import { textP3 } from '@rolder/ss-react/recipes';
import type { ComponentProps } from '@rolder/ss-react/types';

// const StyledH1 = styled('h1', textH1);
// const StyledP3 = styled('p', textP3);

// const H1 = (p: ComponentProps<typeof StyledH1>) => {
//   const [vp, lp] = textH1.splitVariantProps(p);

//   return <StyledH1 className={cx(textH1(vp), lp.className)} {...lp} />;
// };

// const P3 = ({ className, ...p }: ComponentProps<typeof StyledP3>) => {
//   const [vProps, props] = textP3.splitVariantProps(p);
//   return <StyledP3 className={cx(textP3(vProps), className)} {...props} />;
// };

// export const Text = Object.assign(P3, {
//   H1,
//   P3,
// });

// type TextHTMLProps = React.HTMLAttributes<HTMLElement>;

// type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

// type TextProps = TextVariantProps &
//   TextHTMLProps & { as?: TextElement; href?: string };

// export function TextOld(props: TextProps) {
//   const [variantProps, localProps] = text.splitVariantProps(props);
//   const { as: Component = 'p', className, ...restProps } = localProps;

// if (variantProps.link)
//   return (
//     <a
//       className={cx(text(variantProps), className)}
//       rel="noreferrer"
//       target="_blank"
//       {...restProps}
//     />
//   );

//   return (
//     <Component className={cx(text(variantProps), className)} {...restProps} />
//   );
// }

// const StyledH1 = styled('h1', textH1);
const P3 = styled('p', textP3);

// const H1 = ({ className, ...p }: ComponentProps<typeof StyledH1>) => {
//   const [vp, lp] = textH1.splitVariantProps(p);

//   return <StyledH1 className={cx(textH1(vp), className)} {...lp} />;
// };

// const P3 = ({ className, ...p }: ComponentProps<typeof StyledP3>) => {
//   const [vp, lp] = textP3.splitVariantProps(p);

//   return <p className={cx(textP3(vp), className)} {...lp} />;
// };

export const Text = (props: ComponentProps<typeof P3>) => {
  return <P3 {...props} />;
};
