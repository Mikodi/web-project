const { resolve } = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './js/index.js',
    output: {
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(jpg|gif)$/i,
                loader: 'img-optimize-loader',
                options: {
                    name: '[path][name].[ext]',
                    compress: {
                        gifsicle: {
                            optimizationLevel: 3,
                          },
                          // Compression for jpg.
                          mozjpeg: {
                            progressive: true,
                            quality: 60,
                          },
                    }
                }
            },
            {
                test: /\.(mp3|mp4)$/i,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniExtractPlugin({filename: '[name].[contenthash].css'}),
        new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["jpegtran", { progressive: true }],
                  ["optipng", { optimizationLevel: 5 }],
                ]
              }
            }
        })
    ]
}