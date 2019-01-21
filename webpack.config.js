const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: __dirname + "/src/index.js"
    },
    mode: process.env.NODE_ENV,
    output: {
        path: __dirname + "/dist",
        filename: "js/[name].js",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        publicPath: "/",
        contentBase: path.join(__dirname, "dist"),
        inline: true,
        host: "0.0.0.0",
        port: "80",
        disableHostCheck: true,
        headers: {
            "access-control-allow-origin": "*"
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};