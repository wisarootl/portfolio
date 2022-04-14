const siteUrl = process.env.URL || `https://wisaroot.herokuapp.com/`
const current_date = new Date()

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
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages }
          // allWpContentNode: { nodes: allWpNodes }
        }) => {
          // const wpNodeMap = allWpNodes.reduce((acc, node) => {
          //   const { uri } = node
          //   acc[uri] = node

          //   return acc
          // }, {})

          return allPages.map((page) => {
            // return { ...page, ...wpNodeMap[page.path] }
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
            lastmod: current_date
          }
        }
      }
    }
  ]
}
