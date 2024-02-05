const webpack = require("webpack");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const { mode } = argv;
    const config = {
        cache: true,
        entry: {
            "bundle": "./App/Index"
        },
        output: {
            path: path.resolve(__dirname, 'wwwroot/dist'),
            filename: "browser-[name].js"
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    'NODE_ENV': JSON.stringify(mode),
                }
            }),
            new MiniCssExtractPlugin({
                filename: '../../wwwroot/dist/main.css',
                chunkFilename: '[id].css',
            })
        ],
        resolve: {
            extensions: [".js", ".jsx", ".json", ".css"]
        },
    };

    if (mode === 'production') {
        config.devtool = "source-map";
        config.optimization = {
            minimize: true
        }
    } else if (mode === 'development') {
        config.devtool = "eval-cheap-module-source-map";
    }

    return config;
};