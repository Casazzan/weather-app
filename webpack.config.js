const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ],
        rules: [
            //...
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    //...
};