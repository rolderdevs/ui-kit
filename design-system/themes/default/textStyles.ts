import { defineTextStyles, type TextStyles } from "@pandacss/dev";

export default defineTextStyles({
	h3: {
		value: {
			fontFamily: "IBM Plex Sans, sans-serif",
			fontWeight: "400",
			fontSize: "24px",
			lineHeight: "36px",
			letterSpacing: "0",
		},
	},
	p2: {
		value: {
			fontFamily: "IBM Plex Sans, sans-serif",
			fontWeight: "400",
			fontSize: "20px",
			lineHeight: "32px",
			letterSpacing: "0",
		},
	},
	p3: {
		value: {
			fontFamily: "IBM Plex Sans, sans-serif",
			fontWeight: "400",
			fontSize: "16px",
			lineHeight: "24px",
			letterSpacing: "0",
		},
	},
	p4: {
		value: {
			fontFamily: "IBM Plex Sans, sans-serif",
			fontWeight: "400",
			fontSize: "14px",
			lineHeight: "20px",
			letterSpacing: "0",
		},
	},
}) as TextStyles;
