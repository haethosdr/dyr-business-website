const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: {
      index: './src/scripts/index.js',  // Entry point for index.html
      about: './src/scripts/about.js',  // Entry point for about.html
      contact: './src/scripts/contact.js', // Entry point for contact.html
      testimonials: './src/scripts/testimonials.js',
      services: './src/scripts/services.js',
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/pages/index.html',
            filename: 'index.html',
            inject: 'head',
            scriptLoading: 'defer',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/about.html',
          filename: 'about.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['about'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/contact.html',
          filename: 'contact.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['contact'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/testimonials.html',
          filename: 'testimonials.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['testimonials'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/services/pressure-washing.html',
          filename: 'pressure-washing.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['services'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/services/roof-gutter-clean.html',
          filename: 'roof-gutter-clean.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['services'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/services/solar-panel-clean.html',
          filename: 'solar-panel-clean.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['services'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/services/window-washing.html',
          filename: 'window-washing.html',
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
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      }, 
};