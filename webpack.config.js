const path = require('path'),
    htmlPlugin = require('html-webpack-plugin'),
    cleanPlugin = require('clean-webpack-plugin'),
    dist = 'dist',
    copyPlugin = require('copy-webpack-plugin'),
    workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, dist)
  },
  module:{
    rules:[
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        }
    ]
  },
  plugins: [
    new cleanPlugin([dist]),
    new htmlPlugin({
      template: './src/index.html',  
      filename: 'index.html',
      title: 'Welcome to freeCodeCamp Mumbai',
      inject: 'body'
    }),
    new workboxPlugin({
        globDirectory: dist,
        globPatterns: ['**/*.{html,js,css}'],
        swDest: path.join(dist, 'sw.js'),
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
            {
                urlPattern: new RegExp('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'),
                handler: 'cacheFirst'
            },
            {
                urlPattern: new RegExp('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css'),
                handler:'staleWhileRevalidate'
            },
            {
                urlPattern: new RegExp('https://fonts.googleapis.com/css?family=Varela+Round'),
                handler: 'cacheFirst'
            },
            {
                urlPattern: new RegExp('https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg'),
                handler: 'cacheFirst'
            },
            {
            urlPattern: new RegExp('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'),
                handler: 'cacheFirst'
            },
            {
                urlPattern: new RegExp('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js'),
                handler: 'cacheFirst'
            },
            {
                urlPattern: new RegExp('https://res.cloudinary.com/mumbai-hackerspace/image/upload/q_auto,f_auto/v1517349573/Mumbai_Taj_gkgzvb.jpg'),
                handler: 'cacheFirst'
            },
            {
                urlPattern: new RegExp('https://res.cloudinary.com/mumbai-hackerspace/image/upload/v1517349728/fcc_mumbai_kg4eon.jpg'),
                handler: 'cacheFirst'
            },
            {
                urlPattern: new RegExp('https://res.cloudinary.com/mumbai-hackerspace/image/upload/q_auto,f_auto/v1517349712/Mumbai_Skyline_at_Night_yqto3p.jpg'),
                handler: 'cacheFirst'
            },
            {
                urlPattern: new RegExp('https://avatars0.githubusercontent.com/u/2099300?v=3&s=460'),
                handler: 'cacheFirst'
            }
        ]
    }),
    new copyPlugin([{
        from: './manifest.json',
        to: 'manifest.json'

    }])
  ]
};
