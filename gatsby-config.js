const siteUrl = process.env.URL || `https://wisaroot.herokuapp.com/`

module.exports = {
  siteMetadata: {
    title: `Omega Gatsby`,
    // siteUrl: `https://wisaroot.herokuapp.com/`
    siteUrl: siteUrl
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`
  ]
}
