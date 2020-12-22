const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve("./src/templates/Article.tsx")
  const response = await graphql(`
    {
      articles: allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  response.data.articles.nodes.forEach(node => {
    createPage({
      component: articleTemplate,
      path: `/articles/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
