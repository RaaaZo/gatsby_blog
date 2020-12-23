import React from "react"
// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"

import articlesStyles from "../assets/styles/article_list.module.scss"
import pageStyles from "../assets/styles/all_articles.module.scss"
import PhotographyArticles from "../components/PhotographyArticles"
import { motion } from "framer-motion"
import { FadeIn, scaleUp } from "../utils/animations/variants"
import ArticleTypesSelectors from "../components/ArticleTypesSelectors"

const PhotographyArticlesPage = () => {
  return (
    <div className={pageStyles.all_articles}>
      <motion.h1 initial="hidden" animate="show" variants={scaleUp}>
        Photography Articles
      </motion.h1>

      <ArticleTypesSelectors
        firstLink={{ url: "/articles", name: "All" }}
        secondLink={{ url: "/travels", name: "Travels" }}
      />

      <div className={articlesStyles.articles_wrapper}>
        <PhotographyArticles />
      </div>
    </div>
  )
}

export default PhotographyArticlesPage
