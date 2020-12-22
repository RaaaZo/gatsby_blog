import React from "react"
// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"

import articlesStyles from "../assets/styles/article_list.module.scss"
import pageStyles from "../assets/styles/all_articles.module.scss"
import PhotographyArticles from "../components/PhotographyArticles"
import { motion } from "framer-motion"
import { FadeIn, scaleUp } from "../utils/animations/variants"

const PhotographyArticlesPage = () => {
  return (
    <div className={pageStyles.all_articles}>
      <motion.h1 initial="hidden" animate="show" variants={scaleUp}>
        Photography Articles
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

        <AniLink swipe to="/travels">
          Travels
        </AniLink>
      </motion.div>

      <div className={articlesStyles.articles_wrapper}>
        <PhotographyArticles />
      </div>
    </div>
  )
}

export default PhotographyArticlesPage
