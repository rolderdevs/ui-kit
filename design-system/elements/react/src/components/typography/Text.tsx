import { cx } from '@rolder/ss-react/css';
import { styled } from '@rolder/ss-react/jsx';
import {
  textH1,
  textH2,
  textH3,
  textP2,
  textP3,
  textP4,
  textP5,
} from '@rolder/ss-react/recipes';
import type { ComponentProps } from '@rolder/ss-react/types';

const StyledH1 = styled('h1', textH1);
const StyledH2 = styled('h2', textH2);
const StyledH3 = styled('h3', textH3);
const StyledP2 = styled('p', textP2);
const StyledP3 = styled('p', textP3);
const StyledP4 = styled('p', textP4);
const StyledP5 = styled('p', textP5);
const A = styled('a');
const Span = styled('span');

interface TextProps {
  span?: boolean;
  href?: string;
}

const H1 = (p: ComponentProps<typeof StyledH1> & TextProps) => {
  if (p.span) {
    const [vProps, props] = textH1.splitVariantProps(p);

    return <Span className={cx(textH1(vProps), props.className)} {...props} />;
  }

  if (p.link) {
    const [vProps, props] = textH1.splitVariantProps(p);

    return (
      <A
        className={cx(textH1(vProps), props.className)}
        rel="noreferrer"
        target="_blank"
        {...(props as ComponentProps<typeof A>)}
      />
    );
  }

  return <StyledH1 {...p} />;
};

const H2 = (p: ComponentProps<typeof StyledH2> & TextProps) => {
  if (p.span) {
    const [vProps, props] = textH2.splitVariantProps(p);

    return <Span className={cx(textH2(vProps), props.className)} {...props} />;
  }

  if (p.link) {
    const [vProps, props] = textH2.splitVariantProps(p);

    return (
      <A
        className={cx(textH2(vProps), props.className)}
        rel="noreferrer"
        target="_blank"
        {...(props as ComponentProps<typeof A>)}
      />
    );
  }

  return <StyledH2 {...p} />;
};

const H3 = (p: ComponentProps<typeof StyledH3> & TextProps) => {
  if (p.span) {
    const [vProps, props] = textH3.splitVariantProps(p);

    return <Span className={cx(textH3(vProps), props.className)} {...props} />;
  }

  if (p.link) {
    const [vProps, props] = textH3.splitVariantProps(p);

    return (
      <A
        className={cx(textH3(vProps), props.className)}
        rel="noreferrer"
        target="_blank"
        {...(props as ComponentProps<typeof A>)}
      />
    );
  }

  return <StyledH3 {...p} />;
};

const P2 = (p: ComponentProps<typeof StyledP2> & TextProps) => {
  if (p.span) {
    const [vProps, props] = textP2.splitVariantProps(p);

    return <Span className={cx(textP2(vProps), props.className)} {...props} />;
  }

  if (p.link) {
    const [vProps, props] = textP2.splitVariantProps(p);

    return (
      <A
        className={cx(textP2(vProps), props.className)}
        rel="noreferrer"
        target="_blank"
        {...(props as ComponentProps<typeof A>)}
      />
    );
  }

  return <StyledP2 {...p} />;
};

const P3 = (p: ComponentProps<typeof StyledP3> & TextProps) => {
  if (p.span) {
    const [vProps, props] = textP3.splitVariantProps(p);

    return <Span className={cx(textP3(vProps), props.className)} {...props} />;
  }

  if (p.link) {
    const [vProps, props] = textP3.splitVariantProps(p);

    return (
      <A
        className={cx(textP3(vProps), props.className)}
        rel="noreferrer"
        target="_blank"
        {...(props as ComponentProps<typeof A>)}
      />
    );
  }

  return <StyledP3 {...p} />;
};

const P4 = (p: ComponentProps<typeof StyledP4> & TextProps) => {
  if (p.span) {
    const [vProps, props] = textP4.splitVariantProps(p);

    return <Span className={cx(textP4(vProps), props.className)} {...props} />;
  }

  if (p.link) {
    const [vProps, props] = textP4.splitVariantProps(p);

    return (
      <A
        className={cx(textP4(vProps), props.className)}
        rel="noreferrer"
        target="_blank"
        {...(props as ComponentProps<typeof A>)}
      />
    );
  }

  return <StyledP4 {...p} />;
};

const P5 = (p: ComponentProps<typeof StyledP5> & TextProps) => {
  if (p.span) {
    const [vProps, props] = textP5.splitVariantProps(p);

    return <Span className={cx(textP5(vProps), props.className)} {...props} />;
  }

  if (p.link) {
    const [vProps, props] = textP5.splitVariantProps(p);

    return (
      <A
        className={cx(textP5(vProps), props.className)}
        rel="noreferrer"
        target="_blank"
        {...(props as ComponentProps<typeof A>)}
      />
    );
  }

  return <StyledP5 {...p} />;
};

export const Text = Object.assign(P3, {
  H1,
  H2,
  H3,
  P2,
  P3,
  P4,
  P5,
});
