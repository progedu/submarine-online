module.exports = {
    context: __dirname + '/app',
    entry: {
        'index/': './entry.js'
    },
    output: {
        path: __dirname + '/public/javascripts',
        filename: '[name]bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    }
};