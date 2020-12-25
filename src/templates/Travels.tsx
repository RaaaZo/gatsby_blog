import React from "react"

import articlesStyles from "../assets/styles/article_list.module.scss"
import pageStyles from "../assets/styles/all_articles.module.scss"
import { motion } from "framer-motion"
import { scaleUp } from "../utils/animations/variants"
import ArticleTypesSelectors from "../components/ArticleTypesSelectors"
import { graphql, PageProps } from "gatsby"
import { Articles, PaginationPageContext } from "../utils/interfaces/interfaces"
import AllArticles from "../components/AllArticles"
import Pagination from "../components/Pagination"
import SEO from "../components/SEO"

const TravelsArticlesPage: React.FC<
  PageProps<Articles, PaginationPageContext>
> = ({ data, pageContext }) => {
  const { nodes: articles } = data.articles
  const { currentPage, numPages } = pageContext

  return (
    <>
      <SEO />
      <div className={pageStyles.all_articles}>
        <motion.h1 initial="hidden" animate="show" variants={scaleUp}>
          Travel Articles
        </motion.h1>

        <ArticleTypesSelectors
          firstLink={{ url: "/articles/1", name: "All" }}
          secondLink={{ url: "/photography/1", name: "Photography" }}
        />

        <div className={articlesStyles.articles_wrapper}>
          <AllArticles articles={articles} />
        </div>

        <Pagination
          url={"/travels"}
          currentPage={currentPage}
          numPages={numPages}
        />
      </div>
    </>
  )
}

export const query = graphql`
  query allTravelsQuery($skip: Int!, $limit: Int!) {
    articles: allContentfulBlogPost(
      filter: { type: { eq: "travels" } }
      sort: { fields: publishedDate, order: DESC }
      skip: $skip
      limit: $limit
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
`

export default TravelsArticlesPage
