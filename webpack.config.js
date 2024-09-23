const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
      index: './src/scripts/index.js',  // Entry point for index.html
      about: './src/scripts/about.js',  // Entry point for about.html
      contact: './src/scripts/contact.js', // Entry point for contact.html
      testimonials: './src/scripts/testimonials.js', // Entry point...
      services: './src/scripts/services.js', // Entry point....
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',   // [name] will be replaced with the chunk name, such as main, page1, etc.
        }),
        new HtmlWebpackPlugin({ 
            template: './src/pages/index.html',
            favicon: './src/images/rwags-logo.ico',
            filename: 'index.html',
            inject: 'head',
            scriptLoading: 'defer',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/about.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'about/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['about'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/contact.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'contact/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['contact'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/testimonials.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'testimonials/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['testimonials'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/services/pressure-washing.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'pressure-washing/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['services'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/services/roof-gutter-clean.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'roof-gutter-clean/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['services'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/services/solar-panel-clean.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'solar-panel-clean/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['services'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/services/window-washing.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'window-washing/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['services'],
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.html$/,
            use: ['html-loader'],  // Process image paths in HTML
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
            ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    }, 
};