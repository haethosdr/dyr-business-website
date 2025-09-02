const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
      index: './src/scripts/index.js',  // Entry point for index.html
      about: './src/scripts/about.js',  // Entry point for about.html
      contact: './src/scripts/contact.js', // Entry point for contact.html
      blogs: './src/scripts/blogs.js',  // Entry point for blogs.html
      testimonials: './src/scripts/testimonials.js', // Entry point...
      services: './src/scripts/services.js', // Entry point....
      locations: './src/scripts/locations.js', // Entry point....
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
          template: './src/pages/blogs.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'blogs/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['blogs'],
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
        new HtmlWebpackPlugin({ 
          template: './src/pages/locations/gutter-cleaning-pressure-washing-los-altos.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'gutter-cleaning-pressure-washing-los-altos/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['locations'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/locations/gutter-cleaning-services-atherton.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'gutter-cleaning-services-atherton/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['locations'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/locations/gutter-window-cleaning-redwood-city.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'gutter-window-cleaning-redwood-city/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['locations'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/locations/pressure-washer-gutter-cleaning-woodside.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'pressure-washer-gutter-cleaning-woodside/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['locations'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/locations/roof-gutter-cleaning-san-carlos.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'roof-gutter-cleaning-san-carlos/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['locations'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/locations/solar-panel-window-cleaning-menlo-park.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'solar-panel-window-cleaning-menlo-park/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['locations'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/locations/window-cleaning-pressure-washing-belmont.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'window-cleaning-pressure-washing-belmont/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['locations'],
        }),
        new HtmlWebpackPlugin({ 
          template: './src/pages/locations/window-gutter-cleaning-emerald-hills.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'window-gutter-cleaning-emerald-hills/index.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: ['locations'],
        }),

        // For all the blog pages
        new HtmlWebpackPlugin({ 
          template: './src/pages/blogs/affordable-and-reliable-gutter-cleaning-service-near-me-that-delivers.html',
          favicon: './src/images/rwags-logo.ico',
          filename: 'affordable-and-reliable-gutter-cleaning-service-near-me-that-delivers.html',
          inject: 'head',
          scriptLoading: 'defer',
          chunks: [''],
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
            test: /\.html$/i,
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