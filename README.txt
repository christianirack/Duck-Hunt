    //"preinstall": "npm i -g nodemon webpack express express-generator"

    "dev": "webpack -d",
    "devw": "webpack -d --watch",
    "build": "webpack -p",
    "app": "nodemon server.js && webpack -d --watch",
    "app2": "nodemon server.js",
    "install": "npm i -g nodemon webpack express express-generator",
    "debug": "webpack --display-error-details",
    "error": "webpack --progress --profile --colors --display-error-details --display-cached"

     { test: /\.(css|scss)$/, loader: ExtractTextPlugin.extract('style', 'css!sass!postcss') }

       new ExtractTextPlugin('css/app.css'),
     new HtmlWebpackPlugin({
      title: 'My App',
      template: react+'/views/index.html',
      filename: dist+'/index.html'

    })