const path = require("path");
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Oscar Senior Fullstack Developer & Systems Architect",
  siteUrl: "https://ozwild.github.io",
  siteDescription:
    "Empowering teams through scalable tech, people-first process, and cross-functional clarity. Available for global projects + U.S. visa-sponsored roles.",
  metadata: {
    author: "Oscar Palencia (Ozwild)",
    keywords:
      "Technical Leadership & Architecture,scalable system design for startups,fullstack architect with business insight,Developer with operations experience,Operational + Engineering Integration,real-world automation pipelines,data-driven process optimization,cross-functional workflow engineer,senior fullstack developer open to sponsorship,remote systems architect for US companies,developer blending empathy with engineering",
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
