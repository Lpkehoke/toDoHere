'use strict';

const Webpack = require('webpack');

const autoprefixer = require('autoprefixer');
const path = require('path');

let config = {
    watch: true,
    devtool: 'source-map',
    mode: 'development',
    entry: {
        main: [
            './hereMaps/core.js',
            './hereMaps/service.js',
            './scss/index.scss',
            './node_modules/bootstrap/scss/bootstrap.scss',
            '@babel/polyfill',
            './src/index.js'
        ]
    },
    output: {
		path: __dirname + '/public/resources/js/',
		filename: 'bundle.js'
	},
    module: {
        rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						'@babel/preset-react'
					],
					plugins: ['@babel/plugin-proposal-class-properties']
				}
			}
		},
        {
            test: /\.(scss)$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }, {
                loader: 'postcss-loader',
                options: {
                    plugins: function () {
                        return [
                            require('precss'),
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                loader: 'sass-loader'
            }]
        }]
	}, plugins: [
		new Webpack.NoEmitOnErrorsPlugin()
	]
};

module.exports = config;
