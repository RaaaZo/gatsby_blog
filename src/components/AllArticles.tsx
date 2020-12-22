import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Article, Articles } from "./HomeArticlesList"
import SingleArticle from "./SingleArticle"

const AllArticles = () => {
  const { articles } = useStaticQuery<Articles>(graphql`
    {
      articles: allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
      ) {
        nodes {
          id
          title
          slug
          description
          author
          publishedDate(formatString: "Do, MMMM YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {articles.nodes.map((article: Article) => (
        <SingleArticle article={article} key={article.id} />
      ))}
    </>
  )
}

export default AllArticles
