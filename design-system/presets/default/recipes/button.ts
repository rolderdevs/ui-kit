import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
	className: "button",
	description: "Button component styles",
	base: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
		outline: "none",
		position: "relative",
		userSelect: "none",
		whiteSpace: "nowrap",
		_active: {
			transform: "translateY(2px)",
		},
		_disabled: {
			pointerEvents: "none",
		},
	},
	variants: {
		variant: {
			primary: {
				bg: "primary",
				color: "text",
				_hover: {
					bg: "primary.hover",
				},
				_disabled: {
					color: "text.disabled",
					bg: "primary.disabled",
				},
			},
			secondary: {
				bg: "secondary",
				color: "text",
				_hover: {
					bg: "secondary.hover",
				},
				_disabled: {
					color: "text.disabled",
					bg: "secondary.disabled",
				},
			},
		},
		size: {
			sm: {
				h: 8,
				px: 2,
				py: 1.5,
				gap: 1,
				rounded: "sm",
				textStyle: "p4m",
			},
			md: {
				h: 11,
				px: 4,
				py: 2.5,
				gap: 1.5,
				rounded: "10px",
				textStyle: "p3m",
			},
			lg: {
				h: "52px",
				px: 5,
				py: 3.5,
				gap: 2,
				rounded: "md",
				textStyle: "p3m",
			},
			xl: {
				h: "72px",
				p: 5,
				gap: 2,
				rounded: "lg",
				textStyle: "p2m",
			},
		},
		fullWidth: {
			true: {
				width: "full",
			},
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});
