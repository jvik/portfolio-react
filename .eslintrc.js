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
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
