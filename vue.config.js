const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require("./package.json").dependencies;

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.js',
    },
  },
  publicPath: "auto",
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "remote",
        filename: 'remoteEntry.js',
        exposes: {
        },
        remotes: {
          remoteConnect: "rd_connect@https://dev.d23iaemtgir7z7.amplifyapp.com/remoteEntry.js"
        },
        shared: {
          ...deps,
          vue: {
            singleton: true,
          },
        },
      }),
    ],
    
  },
})
