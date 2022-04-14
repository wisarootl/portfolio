const siteUrl = process.env.URL || `https://wisaroot.herokuapp.com/`

module.exports = {
  siteMetadata: {
    title: `Omega Gatsby`,
    siteUrl: siteUrl
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      }
    },
    // `gatsby-transformer-gitinfo`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
            edges {
              node {
                fields {
                  gitLogLatestDate
                }
                name
              }
            }
          }
        }`,
        resolvePages: ({ allSitePage: { nodes: sitePages }, allFile: { edges: pageFiles } }) => {
          return sitePages.map((page) => {
            const pageFile = pageFiles.find(({ node }) => {
              const fileName = node.name === 'index' ? '/' : `/${node.name}/`
              return page.path === fileName
            })

            return { ...page, ...pageFile?.node?.fields }
          })
        },
        serialize: ({ path, gitLogLatestDate }) => {
          return {
            url: path,
            lastmod: gitLogLatestDate
          }
        },
        createLinkInHead: true
      }
    }
  ]
}
