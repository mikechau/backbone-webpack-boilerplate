var webpackConfig = require('./test.webpack.config.js');

module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      'mocha',
      'chai'
    ],

    reporters: [
      'spec'
    ],

    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/unit/**/*.test.*'
    ],

    preprocessors: {
      'tests/unit/**/*.test.*': ['webpack', 'sourcemap']
    },

    browsers: [
      // 'Chrome',
      // 'Firefox',
      'PhantomJS'
    ],

    singleRun: true,

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
};
