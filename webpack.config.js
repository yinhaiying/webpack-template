const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
module.exports = {
    mode:"development",
    entry:'./src/index.js',
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
            filename:'index.html'
        })
    ]
    
}