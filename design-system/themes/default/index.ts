import { definePreset } from "@pandacss/dev";
import globalCss from "./globalCss";
import keyframes from "./keyframes";
import semanticTokens from "./semanticTokens";
import textStyles from "./textStyles";
import tokens from "./tokens";

export default definePreset({
	name: "rolder-theme-default",
	theme: {
		extend: {
			tokens,
			semanticTokens,
			textStyles,
			keyframes,
		},
	},
	globalCss,
});
