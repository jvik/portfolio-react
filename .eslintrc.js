module.exports = {
	env: {
		browser: true,
	},
	extends: 'plugin:react/recommended',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
	},
	plugins: ['react'],
	rules: {
		'no-unused-vars': [
			2,
			{
				vars: 'all',
			},
		],
		indent: ['error', 2],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'double'],
		semi: ['error', 'always'],
	},
};
