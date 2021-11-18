const path = require("path");
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Ozworks",
  siteUrl: "https://ozwild.github.io",
  pathPrefix: "/oz-dev-website",
  plugins: [],
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
      },
    },
  },
};
