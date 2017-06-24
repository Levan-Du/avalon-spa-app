var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['es3ify-loader', 'babel-loader']
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
            test: /\.(woff|woff2|ttf|svg|eot)$/,
            use: 'url-loader?name=/iconfont/[hash:6].[name].[ext]'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.join(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: true
        }),
        new TransferWebpackPlugin([
            { from: 'common/hack', to: 'js' }
        ], path.join(__dirname, 'src'))
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        port: 8030
    }
}
