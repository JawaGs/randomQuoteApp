const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

    entry: './src/index.js',
    output:{
        path:path.join( __dirname ,'dist'),
        filename: 'bundle.js'
    },

    devServer:{
        port: 4000
    },
    resolve: {
        extensions: ['.js', '.jsx  ']
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }, 
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader },
                    {loader: 'css-loader'},
                    
                ]
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]

}