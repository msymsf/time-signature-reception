module.exports = {
  lintOnSave: false,
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://59.110.164.2:8081",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
};

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
