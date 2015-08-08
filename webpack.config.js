// Config for Webpack - define the entry point and the output file, test for .jsx, exlude the node_modules and bower_components folders, and use babel for the transformation of JSX to JS

module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};