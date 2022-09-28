import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './script.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config;