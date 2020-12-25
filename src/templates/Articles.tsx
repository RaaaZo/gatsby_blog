import React from "react"
import AllArticles from "../components/AllArticles"

import articlesStyles from "../assets/styles/article_list.module.scss"
import pageStyles from "../assets/styles/all_articles.module.scss"

import { scaleUp } from "../utils/animations/variants"
import { motion } from "framer-motion"
import ArticleTypesSelectors from "../components/ArticleTypesSelectors"
import { graphql, PageProps } from "gatsby"
import { Articles, PaginationPageContext } from "../utils/interfaces/interfaces"
import Pagination from "../components/Pagination"
import SEO from "../components/SEO"

const ArticlesPage: React.FC<PageProps<Articles, PaginationPageContext>> = ({
  data,
  pageContext,
}) => {
  const { nodes: articles } = data.articles
  const { currentPage, numPages } = pageContext

  return (
    <>
      <SEO />
      <div className={pageStyles.all_articles}>
        <motion.h1 initial="hidden" animate="show" variants={scaleUp}>
          All Articles
        </motion.h1>

        <ArticleTypesSelectors
          firstLink={{ url: "/travels/1", name: "Travels" }}
          secondLink={{ url: "/photography/1", name: "Photography" }}
        />

        <div className={articlesStyles.articles_wrapper}>
          <AllArticles articles={articles} />
        </div>

        <Pagination
          url={"/articles"}
          currentPage={currentPage}
          numPages={numPages}
        />
      </div>
    </>
  )
}

export const query = graphql`
  query allArticlesQuery($skip: Int!, $limit: Int!) {
    articles: allContentfulBlogPost(
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

export default ArticlesPage
