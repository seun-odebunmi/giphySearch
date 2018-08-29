const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        index: './index.jsx',
        style: './index.scss'
    },
    module: {
        rules: [{
            test: /\.js(x?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    },
    output: {
        path: path.join(__dirname, 'output'),
        filename: '[name].build.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            actions: path.join(__dirname, 'actions'),
            components: path.join(__dirname, 'components'),
            containers: path.join(__dirname, 'containers'),
            reducers:  path.join(__dirname, 'reducers')
        }
    },
    stats: { chunkModules: false, warnings: false }
}
