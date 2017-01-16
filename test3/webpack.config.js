module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js',
        },
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue',
            },
        ],
    },
    vue: {
        loaders: {
            js: 'babel',
            scss: 'style!css!sass',
        },
    },
}
