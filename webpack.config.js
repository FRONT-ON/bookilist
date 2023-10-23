const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, './src/frontend/index.tsx'),
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	stats: 'errors-only',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[contenthash:8].js',
	},
	resolve: {
		extensions: ['.jsx', '.js', '.ts', '.tsx', '.css', '.png'],
		modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
		plugins: [
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, './tsconfig.json'),
				baseUrl: path.resolve(__dirname, '.'),
				extensions: ['.js', '.ts', '.tsx'],
			}),
		],
	},
	resolveLoader: {
		modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		port: 3000,
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				secure: false,
				changeOrigin: true,
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'dist//*')],
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
		}),
		new ESLintPlugin({
			extensions: ['js', 'jsx', 'ts', 'tsx'],
			files: 'src//*',
			lintDirtyModulesOnly: true,
			threads: true,
		}),
	],
	module: {
		rules: [
			{
				exclude: /node-modules/,
				test: /\.[jt]sx?$/i,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.(svg|ico|png|jpg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'media/[name].[ext]',
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
					  loader: 'css-loader',
					  options: {
						importLoaders: 2,
						sourceMap: true,
					  },
					},
				  ],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'media/[name].[ext]',
				},
			},
		],
	},
};
