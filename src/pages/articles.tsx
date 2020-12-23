import React from "react"
import AllArticles from "../components/AllArticles"
// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"

import articlesStyles from "../assets/styles/article_list.module.scss"
import pageStyles from "../assets/styles/all_articles.module.scss"
import { FadeIn, scaleUp } from "../utils/animations/variants"
import { motion } from "framer-motion"
import ArticleTypesSelectors from "../components/ArticleTypesSelectors"

const ArticlesPage = () => {
  return (
    <div className={pageStyles.all_articles}>
      <motion.h1 initial="hidden" animate="show" variants={scaleUp}>
        All Articles
      </motion.h1>

      <ArticleTypesSelectors
        firstLink={{ url: "/travels", name: "Travels" }}
        secondLink={{ url: "/photography", name: "Photography" }}
      />

      <div className={articlesStyles.articles_wrapper}>
        <AllArticles />
      </div>
    </div>
  )
}

export default ArticlesPage
