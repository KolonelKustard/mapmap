var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mapmap.js',
    library: 'mapmap',
    libraryTarget: 'umd'
  }
};
