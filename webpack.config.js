var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

const env = process.env.NODE_ENV

const ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app"
    },
    module:{
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                use: env === 'production'
                ? ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader' ]
                })
                : [ 
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: false
                        }                            
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                    //'style-loader', 'css-loader' //can be used without sourcemaps
                ]
            },
            {
                test: /\.scss$/,
                use: env === 'production'
                ? ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader' ]
                })
                : [ 
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: false
                        }                            
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                    //'style-loader', 'css-loader' //can be used without sourcemaps
                 ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
            }
            
        ]
    },
    plugins: env === 'production'
    ? [
        new ExtractTextPlugin({
          filename: 'styles.css'
        })
      ]
    : []
};

module.exports = config;