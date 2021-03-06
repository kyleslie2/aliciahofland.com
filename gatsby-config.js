module.exports = {
  siteMetadata: {
    title: `Alicia Hofland`,
    description: `Alicia Hofland's portfolio`,
    author: `Alicia Hofland`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown-pages`,
    //     path: `${__dirname}/src/markdown-pages`,
    //   },
    // },
    //  {
    //    resolve: `gatsby-transformer-remark`,
    //    options: {
    //      plugins: [`gatsby-remark-autolink-headers`],
    //    },
    //  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alicias-art-site`,
        short_name: `Alicia's art site`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/A3.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
