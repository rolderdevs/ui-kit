import { defineTokens, type Tokens } from "@pandacss/dev";
import colors from "./colors";
import shadows from "./shadows";

export default defineTokens({
	...colors,
	...shadows,
	radii: {
		xs: { value: "4px" },
		sm: { value: "8px" },
		md: { value: "12px" },
		lg: { value: "16px" },
		full: { value: "9999px" },
	},
}) as Tokens;
