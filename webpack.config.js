const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//循环

let pages = ['index','base'];
// 多入口生成多个模板
function produceManyPages(pages){
    return pages.map((item,index) => {
        return  new HtmlWebpackPlugin({
            template:'./src/index.html',  // 指定的html模板
            filename:`${item}.html`,
            chunks:['vendor',item]
        });
    })
}



module.exports = {
    mode:"development",
    entry:{
        index:'./src/index.js',
        base:'./src/base.js',
        vendor:'jquery'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[hash:8].js'
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
            }
        ]
    },
    plugins:[
        // 自动向模块内部注入变量
        new webpack.ProvidePlugin({
          $:'jquery'
        }),
        ...produceManyPages(pages),
        // 每次打包前清除dist目录下文件
        new CleanWebpackPlugin()
    ]
    
}