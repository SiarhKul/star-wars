module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-react"],
	plugins: [
		"react-hot-loader/babel",
		"@emotion",
		"@babel/plugin-transform-runtime",
	],
	// env: {
	// 	test: {
	// 		plugins: [
	// 			"@babel/plugin-transform-runtime",
	// 			"@babel/plugin-transform-modules-commonjs",
	// 		],
	// 	},
	// },
	env: {
		test: {
			presets: [
				[
					"@babel/preset-env",
					{
						modules: "commonjs",
						debug: false,
					},
				],
				"@babel/preset-flow",
				"@babel/preset-react",
			],
			plugins: [
				"@babel/plugin-syntax-dynamic-import",
				"@babel/plugin-proposal-class-properties",
			],
		},
	},
};
