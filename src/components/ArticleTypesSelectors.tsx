import React from "react"
import { motion } from "framer-motion"
import { FadeIn } from "../utils/animations/variants"
// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"

import pageStyles from "../assets/styles/all_articles.module.scss"

interface LinkProps {
  url: string
  name: string
}

interface Props {
  firstLink: LinkProps
  secondLink: LinkProps
}

const ArticleTypesSelectors: React.FC<Props> = ({ firstLink, secondLink }) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={FadeIn}
      className={pageStyles.all_articles__types}
    >
      <AniLink swipe to={firstLink.url}>
        {firstLink.name}
      </AniLink>

      <AniLink swipe to={secondLink.url}>
        {secondLink.name}
      </AniLink>
    </motion.div>
  )
}

export default ArticleTypesSelectors
