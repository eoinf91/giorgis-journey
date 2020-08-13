const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Giorgi's Journey`,
    description:
      `Follow my story as I write about the destinations I have visited`,
    author: `@giorgisjourney`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/markdown-pages/blog/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `destinations`,
        path: `${__dirname}/src/markdown-pages/blog/destinations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/markdown-pages/pages`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              linkImagesToOriginal: false,
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-plugin-lodash`,
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://giorgisjourney.us12.list-manage.com/subscribe/post?u=f9436b56aac730e17bf51a3ad&amp;id=bbd61706a4", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GiorgisJourney`,
        short_name: `GiorgisJourney`,
        start_url: `/`,
        background_color: `#AFC2D2`,
        theme_color: `#AFC2D2`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-97655091-1",
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-97655091-1",
          // Setting this parameter is optional
          anonymize: true,
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "~": path.join(__dirname, "src/"),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134421805-1",
        anonymize: true,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
