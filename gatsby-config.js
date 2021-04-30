const path = require('path');
const website = require('./config.js');

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`
});

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    tagline: website.tagline,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: website.pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '~': path.join(__dirname, 'src'),
        '~components': path.join(__dirname, 'src/components'),
        '~hooks': path.join(__dirname, 'src/hooks'),
        '~theme': path.join(__dirname, 'src/theme/index.tsx')
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`
  ]
};
