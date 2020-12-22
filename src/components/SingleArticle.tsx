import React from "react"
// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../assets/styles/single_article.module.scss"
import Img from "gatsby-image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { FadeIn } from "../utils/animations/variants"
import { Article } from "../utils/interfaces/interfaces"

interface Props {
  article: Article
}

const SingleArticle: React.FC<Props> = ({
  article: { description, image, slug, title, publishedDate, author },
}) => {
  const controls = useAnimation()
  const [element, view] = useInView({ triggerOnce: true, threshold: 0.1 })

  if (view) {
    controls.start("show")
  }

  return (
    <motion.div
      variants={FadeIn}
      initial="hidden"
      animate={controls}
      ref={element}
      className={styles.single_article}
    >
      <Img
        style={{ width: "100%", height: 300, marginBottom: "2rem" }}
        fluid={image.fluid}
      />
      <h3 className={styles.single_article__title}>{title}</h3>
      <h6 className={styles.single_article__author}>
        by {author} on {publishedDate}
      </h6>
      <p className={styles.single_article__description}>{description}</p>
      <AniLink swipe to={`/articles/${slug}`}>
        <button className={styles.single_article__button}>Read More</button>
      </AniLink>
    </motion.div>
  )
}

export default SingleArticle
