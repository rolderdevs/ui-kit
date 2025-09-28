import { defineSemanticTokens, type SemanticTokens } from "@pandacss/dev";

export default defineSemanticTokens({
	colors: {
		fg: {
			DEFAULT: {
				value: {
					base: "{colors.brand.500}",
					_osDark: "{colors.amber.700}",
				},
			},
			hover: {
				value: {
					base: "{colors.brand.700}",
					_osDark: "{colors.amber.800}",
				},
			},
			muted: {
				value: {
					base: "{colors.gray.200}",
					_osDark: "{colors.stone.800}",
				},
			},
			secondary: {
				DEFAULT: {
					value: {
						base: "{colors.gray.200}",
						_osDark: "{colors.stone.800}",
					},
				},
				hover: {
					value: {
						base: "{colors.gray.300}",
						_osDark: "{colors.stone.700}",
					},
				},
				muted: {
					value: {
						base: "{colors.gray.200}",
						_osDark: "{colors.stone.800}",
					},
				},
			},
		},
		bg: {
			DEFAULT: {
				value: {
					base: "{colors.gray.100}",
					_osDark: "{colors.stone.950}",
				},
			},
			bright: {
				value: {
					base: "{colors.gray.50}",
					_osDark: "{colors.stone.900}",
				},
			},
			brighter: {
				value: {
					base: "{colors.white}",
					_osDark: "{colors.stone.800}",
				},
			},
		},
		text: {
			DEFAULT: {
				value: {
					base: "{colors.gray.900}",
					_osDark: "{colors.stone.200}",
				},
			},
			bright: {
				value: {
					base: "{colors.gray.950}",
					_osDark: "{colors.stone.200}",
				},
			},
			muted: {
				value: {
					base: "{colors.gray.500}",
					_osDark: "{colors.stone.500}",
				},
			},
		},
		border: {
			DEFAULT: {
				value: {
					base: "{colors.gray.200}",
					_osDark: "{colors.stone.700}",
				},
			},
			hover: {
				value: {
					base: "{colors.gray.400}",
					_osDark: "{colors.stone.600}",
				},
			},
		},
		icon: {
			DEFAULT: {
				value: {
					base: "{colors.gray.900}",
					_osDark: "{colors.stone.200}",
				},
			},
			muted: {
				value: {
					base: "{colors.gray.400}",
					_osDark: "{colors.stone.600}",
				},
			},
		},
		error: {
			DEFAULT: {
				value: {
					base: "{colors.redApple.500}",
					_osDark: "{colors.redApple.800}",
				},
			},
			bg: {
				value: {
					base: "{colors.redApple.100}",
					_osDark: "{colors.redApple.900/30}",
				},
			},
		},
		warning: {
			DEFAULT: {
				value: {
					base: "{colors.orange.500}",
					_osDark: "{colors.orange.800}",
				},
			},
			bg: {
				value: {
					base: "{colors.orange.100}",
					_osDark: "{colors.orange.900/30}",
				},
			},
		},
		success: {
			DEFAULT: {
				value: {
					base: "{colors.mint.500}",
					_osDark: "{colors.mint.800}",
				},
			},
			bg: {
				value: {
					base: "{colors.mint.100}",
					_osDark: "{colors.mint.900/30}",
				},
			},
		},
		info: {
			DEFAULT: {
				value: {
					base: "{colors.blue.500}",
					_osDark: "{colors.blue.800}",
				},
			},
			bg: {
				value: {
					base: "{colors.blue.100}",
					_osDark: "{colors.blue.900/30}",
				},
			},
		},
	},
}) as SemanticTokens;
