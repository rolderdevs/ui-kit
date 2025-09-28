import { styled } from "@rolder/ss-react/jsx";
import { button } from "@rolder/ss-react/recipes";
import type { ComponentProps } from "@rolder/ss-react/types";

const StyledButton = styled("button", button);

export const Button = (props: ComponentProps<typeof StyledButton>) => {
	return <StyledButton type="button" {...props} />;
};
