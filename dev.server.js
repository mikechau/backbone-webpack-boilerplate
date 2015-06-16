var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./dev.webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: {
    index: './templates/dev/index.html'
  }
}).listen(9999, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:9999');
});
