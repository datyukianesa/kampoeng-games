const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Kampoeng Games`,
    description: `Kampoeng Games merupakan sebuah website e-commerce yang berfokus untuk menjual game dan in-game voucher.`,
    author: [`@datyukianesa`, `@abyanzhafran`],
  },
  plugins: [
    `gatsby-plugin-nodejs`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kampoeng Games`,
        short_name: `KG`,
        start_url: `/`,
        background_color: `rgba(243,195,84,255)`,
        theme_color: `rgba(108,242,189,255)`,
        display: `minimal-ui`,
        icon: `src/svg/logo_v3.svg`, // This path is relative to the root of the site.
      },
    },
    // gatsby-source-contentful config (Using Delivery API )
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `a1827sxwab7q`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "bLr0O177A1jEXoWbcHtdEpC3p25SinqO0bWV7N3kpc8",
      },
    },
    // gatsby material-UI config
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
