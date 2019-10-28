const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode:"development",
    entry: './src/index.js',
    watch:true,
    watchOptions:{
        exclude:/node_modules/,
        poll:1000, // 每秒钟询问的次数
        aggregateTimeout:500  //类似于防抖和节流。500ms内有多次修改，不会进行编译
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        // publicPath:'http://localhost:8888',
        filename:'[name][hash:8].js'
    },
    devServer:{
        contentBase:'./dist/',
        compress:true,
        port:8888,
        hot:true,
        open:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: "../"
                        } 
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test:/\.less$/,
                loader:[
                    // 'style-loader',
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'less-loader'
                ]

            },
            {
                test:/\.s[ac]ss$/i,
                use:[
                    // 'style-loader',
                    {
                        loader:MiniCssExtractPlugin.loader

                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                //解析图片地址，把图片从原来的位置打包到目标位置
                //file-loader可以处理任意的二进制数据
                test:/\.(png|jpg|gif|svg|bmp)$/,
                loader:'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',  // 指定的html模板
            filename:`index.html`,
        }),
        // 每次打包前清除dist目录下文件
        new CleanWebpackPlugin(),
        // 抽离css文件
        new MiniCssExtractPlugin({
            filename:'[name].css',  // 抽离后的文件名
            chunkFilename:'[name].css',
            ignoreOrder:false
        }),
        new MiniCssExtractPlugin({
            filename:'[name].less',  // 抽离后的文件名
            chunkFilename:'[name].css',
            ignoreOrder:false
        })
    ]
    
}