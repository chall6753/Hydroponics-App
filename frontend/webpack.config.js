const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        chart: './src/chart.js',
    },
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    module:{
        
        rules:[ //match files to loaders
            {
            test: /\.scss$/, //regex expression to match files ending in .scss 
            use: [ //use following loaders to process .scss into reegular .css then js so it can be injected into html page
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
            }
            
        ],
            
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['index']
          }),
          new HtmlWebpackPlugin({
            inject: true,
            filename: 'chart.html',
            template: 'src/chart.html',
            chunks: ['chart']
          }),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        static: {directory: path.join(__dirname, 'public')},
        port:9000,
        
        open: true,
        hot: true,
    }
}
    
