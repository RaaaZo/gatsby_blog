import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleArticle from "./SingleArticle"
import { Article, Articles } from "../utils/interfaces/interfaces"

const TravelArticles = () => {
  const { articles } = useStaticQuery<Articles>(graphql`
    {
      articles: allContentfulBlogPost(
        filter: { type: { eq: "travels" } }
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

export default TravelArticles
