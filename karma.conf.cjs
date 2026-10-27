module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['src/**/*.spec.jsx'],
    preprocessors: {
      'src/**/*.spec.jsx': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]]
              }
            }
          }
        ]
      },
      resolve: { extensions: ['.js', '.jsx'] }
    },
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};