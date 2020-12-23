import React from "react"

import articlesStyles from "../assets/styles/article_list.module.scss"
import pageStyles from "../assets/styles/all_articles.module.scss"
import TravelArticles from "../components/TravelArticles"
import { motion } from "framer-motion"
import { scaleUp } from "../utils/animations/variants"
import ArticleTypesSelectors from "../components/ArticleTypesSelectors"

const TravelsArticlesPage = () => {
  return (
    <div className={pageStyles.all_articles}>
      <motion.h1 initial="hidden" animate="show" variants={scaleUp}>
        Travel Articles
      </motion.h1>

      <ArticleTypesSelectors
        firstLink={{ url: "/articles", name: "All" }}
        secondLink={{ url: "/photography", name: "Photography" }}
      />

      <div className={articlesStyles.articles_wrapper}>
        <TravelArticles />
      </div>
    </div>
  )
}

export default TravelsArticlesPage
