import { defineTokens, type Tokens } from "@pandacss/dev";

export default defineTokens({
	shadows: {
		default: {
			value: [
				{
					offsetX: 0,
					offsetY: 0,
					blur: 16,
					spread: 0,
					color: "rgba(0, 0, 0, 0.04)",
				},
				{
					offsetX: 0,
					offsetY: 4,
					blur: 24,
					spread: 0,
					color: "rgba(0, 0, 0, 0.08)",
				},
			],
		},
		low: {
			value: [
				{
					offsetX: 0,
					offsetY: 0,
					blur: 6,
					spread: 0,
					color: "rgba(0, 0, 0, 0.04)",
				},
				{
					offsetX: 0,
					offsetY: 4,
					blur: 16,
					spread: 0,
					color: "rgba(0, 0, 0, 0.08)",
				},
			],
		},
		upper: {
			value: [
				{
					offsetX: 0,
					offsetY: -2,
					blur: 24,
					spread: 0,
					color: "rgba(0, 0, 0, 0.08)",
				},
				{
					offsetX: 0,
					offsetY: -8,
					blur: 24,
					spread: 0,
					color: "rgba(0, 0, 0, 0.08)",
				},
			],
		},
	},
}) as Tokens;
