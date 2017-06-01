var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/entry.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.html$/,
            use: ['html-withimg-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|svg|gif)$/,
            use: 'url-loader?name=/images/[hash:6].[name].[ext]'
        }, {
            test: /\.(woff|ttf|svg|eot)$/,
            include: [path.join(__dirname, 'src/assets/iconfont')],
            use: 'url-loader?name=/iconfont/[hash:6].[name].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.join(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        port: 8010
    }
}
