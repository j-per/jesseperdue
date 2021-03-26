const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'jesseperdue',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://34.217.223.189/graphql`,
      },
    },
  ],
};
