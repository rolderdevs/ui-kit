import { type CssKeyframes, defineKeyframes } from "@pandacss/dev";

export default defineKeyframes({
	fadeOut: {
		"0%": { opacity: "1" },
		"100%": { opacity: "0" },
	},
	slideOutToTop: {
		"0%": { transform: "translateY(0px)" },
		"100%": { transform: "translateY(-8px)" },
	},
	slideInFromTop: {
		"0%": { transform: "translateY(-8px)", opacity: "0" },
		"100%": { transform: "translateY(0px)", opacity: "1" },
	},
}) as CssKeyframes;
