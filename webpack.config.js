var path = require('path') ;
var htmlWebpackPlugin = require('html-webpack-plugin') ;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [require("autoprefixer")({
                                browsers: ['last 10 versions']
                            })]
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/images/[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            },
            {
                test: /\.woff$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 3000
    }
};