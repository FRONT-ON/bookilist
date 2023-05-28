module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'entry',
				corejs: '3.22',
			},
		],
		'@babel/typescript',
		[
			'@babel/preset-react',
			{
				runtime: 'automatic',
			},
		],
	],
};
