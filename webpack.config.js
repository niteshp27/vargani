var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

const env = process.env.NODE_ENV;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');   //implement later to clenan files
const CleanWebpackPlugin = require('clean-webpack-plugin'); //implement later to clenan files

// the path(s) that should be cleaned
let pathsToClean = [
    'dist',
    'build'
];
  
// the clean options to use
let cleanOptions = {
    root:     __dirname,
    exclude:  [''],
    verbose:  true,
    dry:      false,
    watch:    false
};
  
const config = {
    entry: {
        index: SRC_DIR + "/app/index.js"
    },
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app"
    },
    plugins: env === 'production'
    ? [
        new ExtractTextPlugin({
          filename: 'appstyles.css'
        })
      ]
    : [
       //new CleanWebpackPlugin(['dist/app']),
       //new HtmlWebpackPlugin({template: 'dist/index.html'})
    ],    
    devtool: 'source-map',   //builds sourcemap for files
    module:{             
        loaders: [     
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name (file) {
                            if (env === 'production') {
                                return '[hash].[ext]'
                            }                        
                              return '[name].[ext]'
                            },
                            outputPath: '/images/',
                            emitFile: true
                        }
                    }
                ]        
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
                            sourceMap: true
                        }                            
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                    //'style-loader', 'css-loader' //can be used without sourcemaps
                ]
            },
            // Optionally extract less files
            // or any other compile-to-css language
            // {
            //     test: /\.less$/,
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            // },
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
                            sourceMap: true
                        }                            
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                    //'style-loader', 'css-loader' // can be used without sourcemaps
                 ]
            },
            {
                test: /\.js?/,  //     /\.(js|jsx)$/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                    test: /\.tsx?$/,
                    loader: "ts"                       
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                include: SRC_DIR,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  outputPath: '/fonts/'
                }
            },
            {
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader',
				query: {
					name: '/fonts/[name].[hash:8].[ext]'
				}
			}        
        ]
               
        // ,
        // rules:[
        //     {
        //         test: /\.(png|jpg|gif)$/,
        //         use: [
        //             {
        //                 loader: 'file-loader',
        //                 options: {
        //                     name: '[path][name].[ext]',
        //                     outputPath: 'images/'
        //                 }  
        //             }
        //         ]
        //     },
        //     {
        //         test: /\.(svg|eot|ttf|woff|woff2)$/,
        //         use: [
        //             {
        //                 loader: 'file-loader',
        //                 options: {
        //                 name: '[path][name].[ext]',
        //                 outputPath: 'fonts/'
        //                 }  
        //             }
        //         ]
        //     }
        // ]
    },

    
};

module.exports = config;