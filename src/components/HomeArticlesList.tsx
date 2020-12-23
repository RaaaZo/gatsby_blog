import React from "react"
import SingleArticle from "./SingleArticle"

import styles from "../assets/styles/article_list.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import { Article, Articles } from "../utils/interfaces/interfaces"

const HomeArticlesList: React.FC<{}> = () => {
  const { articles } = useStaticQuery<Articles>(graphql`
    {
      articles: allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        limit: 4
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
    <div className={styles.articles_list}>
      <h2>Latest Articles</h2>

      <div className={styles.articles_wrapper}>
        {articles.nodes.map((article: Article) => (
          <SingleArticle article={article} key={article.id} />
        ))}
      </div>
    </div>
  )
}

export default HomeArticlesList
