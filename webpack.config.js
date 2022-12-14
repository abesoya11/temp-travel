const path = require('path');
module.exports ={
    entry:'./app/assets/scripts/app.js',
    output: {
        filename:'bundles.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    watch:true,
    module:{

        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            }
            ]
            }
}