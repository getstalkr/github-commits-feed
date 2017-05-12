const path = require('path')
const webpack = require('webpack')
const fs = require('fs')

const projectRoot = path.resolve()

const nodeModules = {}

fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`
  })


const config = {
  target: 'node',
  entry: [
    path.resolve(projectRoot, 'src/index.ts')
  ],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'index.js',
    path: projectRoot
  },

  recordsPath: path.join(projectRoot, 'build/_records'),
  resolve: {
    modules: [path.resolve(projectRoot, 'node_modules')],
    extensions: [".ts", ".js", ".json"]
  },
  externals: nodeModules,
  devtool: '#eval-source-map',
  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['source-map-loader']
      },
      // All files with a '.ts' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.ts?$/,
        loader: "awesome-typescript-loader",
        options: {
          transpileOnly: false
        }
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    }),
    new webpack.NamedModulesPlugin()
  ]
}

module.exports = config
