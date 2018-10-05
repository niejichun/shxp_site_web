const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const isDev = process.env.NODE_ENV === 'development';

const devServer={
    port: 5000,//监听端口
    host: '0.0.0.0',//可用localhost，127.0.0.1，本机ip访问
    overlay: {
        errors: true,//将webpack编译的错误显示在页面上
    },
    hot: true,//只更新当前组件
  historyApiFallback:{
      disableDotRule: true
  }
};

const defaultPlugin = [
    new webpack.DefinePlugin({//设置全局变量，业务代码可以直接使用配置的标识
        'process.env': {
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin({
        template:path.join(__dirname,'template.ejs'),
        title: 'myVueApp',
    })
];

let config;
if (isDev) {
    config = merge(baseConfig,{
        devtool:'#cheap-module-eval-source-map',//可以在浏览器端调试代码
        module:{
            rules:[
                {
                    test: /\.styl/,
                    use: [
                        'vue-style-loader',//vue-style-loader 可以实现css热重载
                        'css-loader',
                        {
                            loader: 'postcss-loader',//将css加前缀
                            options: {
                                sourceMap: true,//stylus-loader会生成sourceMap，设置true可使用已生成的sourceMap，提高效率
                            }
                        },
                        'stylus-loader'
                    ]
                }
            ]
        },
        devServer,
        plugins:defaultPlugin.concat([//concat()用于连接两个数组，不会改变原数组
            //此处两个plugin 为热更新服务
            new webpack.HotModuleReplacementPlugin(),//修改代码后自动webpack
            new webpack.NoEmitOnErrorsPlugin()//不刷新页面的前提下，更改页面内容
            //-----------------------
        ])
    });
} else {
    config = merge(baseConfig,{
        entry:{
            app: path.join(__dirname, '../src/index.js'),
            vendor: ['vue']//将vue单独打包
        },
        output:{
            filename:'[name].[chunkhash:8].js'//生产环境要用chunkhash
        },
        module:{
            rules:[
                {
                    test: /\.styl/,
                    use: ExtractPlugin.extract({//将css代码单独打包到一个文件
                        fallback: 'vue-style-loader',
                        use: [
                            'css-loader',
                            {
                                loader: 'postcss-loader',//将css加前缀
                                options: {
                                    sourceMap: true,//stylus-loader会生成sourceMap，设置true可使用已生成的sourceMap，提高效率
                                }
                            },
                            'stylus-loader'
                        ]
                    })
                }
            ]
        },
        plugins:defaultPlugin.concat([
            new ExtractPlugin('styles.[contentHash:8].css'),//将css代码单独打包到一个文件
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'//将vue单独打包
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'runtime'//将webpack单独打包
            })
        ])
    });
}

module.exports = config;
