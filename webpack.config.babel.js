export default {
  entry: './app/scripts/index.js',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3.15 }],
            ],
          },
        },
      },
    ],
  },

  output: {
    filename: './main.js',
  },
};
