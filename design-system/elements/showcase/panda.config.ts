import { defineConfig } from "@pandacss/dev";
import preset from "@rolder/preset-default";
import theme from "@rolder/theme-default";

const dev = process.env.NODE_ENV === "development";

export default defineConfig({
	preflight: true,
	include: [
		dev
			? "../react/**/*.tsx"
			: "@rolder/ui-kit-react/dist/panda.buildinfo.json",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	presets: ["@pandacss/dev/presets", preset, theme],
	importMap: "@rolder/ss-react",
	jsxFramework: "react",
	outdir: "styled-system",
});
