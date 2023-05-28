const env = {
	browser: true,
	es6: true,
	es2017: true,
	node: true,
};

module.exports = {
	env,
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
	],
	parser: '@babel/eslint-parser',
	root: true,
	parserOptions: {
		project: './tsconfig.json',
	},
	overrides: [
		{
			parser: 'typescript-eslint/parser',
			files: ['*.ts', '*.tsx'],
			env,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	],
	plugins: ['prettier', 'react', '@typescript-eslint', 'react-hooks', 'import'],
	rules: {
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-returns': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
	},
};
