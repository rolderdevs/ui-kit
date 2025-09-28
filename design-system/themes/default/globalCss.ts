import { defineGlobalStyles, type GlobalStyleObject } from "@pandacss/dev";

export default defineGlobalStyles({
	"html, body": {
		color: "{colors.text}",
		background: "{colors.bg}",
		fontFamily: "IBM Plex Sans Variable, sans-serif",
		fontWeight: "400",
		fontSize: "16px",
		lineHeight: "24px",
		letterSpacing: "0",
	},
}) as GlobalStyleObject;
