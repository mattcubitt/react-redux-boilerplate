var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './app/app.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: '#source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preloaders: [{
            test: /\.scss/,
            loader: 'import-glob-loader'
        }],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                cacheDirectory: true,
                plugins: ['transform-decorators-legacy' ],
                presets: ['react', 'es2015', 'stage-2']
            }
        }, {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            loader: 'file'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!' + path.resolve(__dirname, 'node_modules/sass-loader/index.js')
        }, {
            test: /\.css$/,
            loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        }]
    }
};
