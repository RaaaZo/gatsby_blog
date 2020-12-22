import React from "react"
// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"

import articlesStyles from "../assets/styles/article_list.module.scss"
import pageStyles from "../assets/styles/all_articles.module.scss"
import TravelArticles from "../components/TravelArticles"
import { motion } from "framer-motion"
import { FadeIn, scaleUp } from "../utils/animations/variants"

const TravelsArticlesPage = () => {
  return (
    <div className={pageStyles.all_articles}>
      <motion.h1 initial="hidden" animate="show" variants={scaleUp}>
        Travel Articles
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="show"
        variants={FadeIn}
        className={pageStyles.all_articles__types}
      >
        <AniLink swipe to="/articles">
          All Articles
        </AniLink>

        <AniLink swipe to="/photography">
          Photography
        </AniLink>
      </motion.div>

      <div className={articlesStyles.articles_wrapper}>
        <TravelArticles />
      </div>
    </div>
  )
}

export default TravelsArticlesPage
