const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode:"development",
    entry:{
        index:'./src/index.js',
        base:'./src/base.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[hash:8].js'
    },
    devServer:{
        contentBase:'./dist',
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
        //自动生成html模板
        new HtmlWebpackPlugin({
            template:'./src/index.html',  // 指定的html模板
            filename:'index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template:'./src/base.html',  // 指定的html模板
            filename:'base.html',
            chunks:['base'],//在产出的html文件中引入哪些代码块,通过entry名字进行设置
        }),

        // 每次打包前清除dist目录下文件
        new CleanWebpackPlugin()
    ]
    
}