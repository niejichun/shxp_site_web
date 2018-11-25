const path = require('path');

const config = {
    target: 'web',
    entry: path.join(__dirname, '../src/index.js' ),
    output: {
        // filename: 'bundle.[hash:8].js',
        filename: '[name].js',
        path: path.join(__dirname, '../dist')
    },
    externals: {
      'jquery': 'jQuery'
    },
    resolve: {
        alias: {//vue$表示精确匹配，这里的意思是：使用独立构建的Vue库
            'vue$': 'vue/dist/vue.js',
            'vue-router$': 'vue-router/dist/vue-router.common.js'
        },
        extensions: ['.js', '.vue', '.less']
    },
    module: {
        rules: [
            // {
            //     test: /\.(vue|js|jsx)$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/,
            //     enforce: 'pre'//预处理，在真正vue-loader之前，先eslint-loader处理一遍
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'resource/[path][name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;
