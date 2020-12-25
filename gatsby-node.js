const path = require("path")

const createSingleArticle = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve("./src/templates/Article.tsx")
  const { data } = await graphql(`
    {
      articles: allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  data.articles.nodes.forEach(node => {
    createPage({
      component: articleTemplate,
      path: `/articles/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}

const paginateAllArticles = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve("./src/templates/Articles.tsx")

  const { data } = await graphql(`
    {
      articles: allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  const articles = data.articles.nodes

  const articlesPerPage = 4
  const numberOfPages = Math.ceil(articles.length / articlesPerPage)
  Array.from({ length: numberOfPages }).forEach((_, i) => {
    createPage({
      path: `/articles/${i + 1}`,
      component: template,
      context: {
        limit: articlesPerPage,
        skip: i * articlesPerPage,
        numPages: numberOfPages,
        currentPage: i + 1,
      },
    })
  })
}

const paginateTravelsArticles = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve("./src/templates/Travels.tsx")

  const { data } = await graphql(`
    {
      articles: allContentfulBlogPost(filter: { type: { eq: "travels" } }) {
        nodes {
          slug
        }
      }
    }
  `)

  const articles = data.articles.nodes

  const articlesPerPage = 4
  const numberOfPages = Math.ceil(articles.length / articlesPerPage)
  Array.from({ length: numberOfPages }).forEach((_, i) => {
    createPage({
      path: `/travels/${i + 1}`,
      component: template,
      context: {
        limit: articlesPerPage,
        skip: i * articlesPerPage,
        numPages: numberOfPages,
        currentPage: i + 1,
      },
    })
  })
}

const paginatePhotographyArticles = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve("./src/templates/Photography.tsx")

  const { data } = await graphql(`
    {
      articles: allContentfulBlogPost(filter: { type: { eq: "photography" } }) {
        nodes {
          slug
        }
      }
    }
  `)

  const articles = data.articles.nodes

  const articlesPerPage = 4
  const numberOfPages = Math.ceil(articles.length / articlesPerPage)
  Array.from({ length: numberOfPages }).forEach((_, i) => {
    createPage({
      path: `/photography/${i + 1}`,
      component: template,
      context: {
        limit: articlesPerPage,
        skip: i * articlesPerPage,
        numPages: numberOfPages,
        currentPage: i + 1,
      },
    })
  })
}

module.exports.createPages = async params => {
  await Promise.all([
    createSingleArticle(params),
    paginateAllArticles(params),
    paginateTravelsArticles(params),
    paginatePhotographyArticles(params),
  ])
}
