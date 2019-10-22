const path = require('path');

module.exports = {
    mode:"development",
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    devServer:{
        contentBase:'./dist',
        compress:true,
        port:9999,
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
    }
    
}