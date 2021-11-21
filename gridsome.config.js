const path = require("path");
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Ozwild",
  siteUrl: "https://ozwild.github.io",
  siteDescription:
    "Ozworks is a production umbrella that comprises software development, music production and music recording",
  // Toggle between the production and development environment.
  //pathPrefix: "/oz-dev-website",
  metadata: {
    author: "Ozworks",
    keywords:
      "Ozwild,Ozwildgt,oscar palencia,Full Stack,Software Developer,Software Engineer,Front end,Back end",
  },
  plugins: [
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        exclude: ["/privacy", "/legal"],
      },
    },
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
      },
    },
  },
};
