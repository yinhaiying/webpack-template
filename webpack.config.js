const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode:"development",
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
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
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                //解析图片地址，把图片从原来的位置打包到目标位置
                //file-loader可以处理任意的二进制数据
                test:/\.(png|jpg|gif|svg|bmp)$/,
                use:['file-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',  // 指定的html模板
            filename:`index.html`,
        }),
        // 每次打包前清除dist目录下文件
        new CleanWebpackPlugin()
    ]
    
}