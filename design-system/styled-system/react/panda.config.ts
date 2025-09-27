import { defineConfig } from "@pandacss/dev";
import preset from "rolder-default-preset";
import theme from "rolder-default-theme";

export default defineConfig({
	preflight: false,
	jsxFramework: "react",
	presets: ["@pandacss/dev/presets", preset, theme],
	outdir: ".",
});
