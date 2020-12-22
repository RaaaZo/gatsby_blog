import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../assets/styles/header_image.module.scss"
import { motion } from "framer-motion"
import { FadeIn } from "../utils/animations/variants"
import { GatsbyFluidImage } from "../utils/interfaces/interfaces"

interface GatsbyImage {
  allImageSharp: {
    nodes: GatsbyFluidImage[]
  }
}

const HomeHeaderImages = () => {
  const { allImageSharp } = useStaticQuery<GatsbyImage>(graphql`
    {
      allImageSharp(filter: { original: { src: { regex: "/home/" } } }) {
        nodes {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { nodes } = allImageSharp

  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{
        staggerDirection: -1,
        delayChildren: 0.5,
      }}
      className={styles.main_images}
    >
      <motion.div variants={FadeIn} className={styles.main_images__wrapper}>
        <AniLink swipe to="/travels">
          <div className={styles.main_images__wrapper__text}>
            <h2>Travel</h2>
            <h4>With Me</h4>
          </div>
          <Img
            style={{ width: "100%", height: "100%", position: "absolute" }}
            fluid={nodes[0].fluid}
          />
        </AniLink>
      </motion.div>

      <motion.div variants={FadeIn} className={styles.main_images__wrapper}>
        <AniLink swipe to="/photography">
          <div className={styles.main_images__wrapper__text}>
            <h2>Photography</h2>
            <h4>With Me</h4>
          </div>
          <Img
            style={{ width: "100%", height: "100%", position: "absolute" }}
            fluid={nodes[1].fluid}
          />
        </AniLink>
      </motion.div>
    </motion.div>
  )
}

export default HomeHeaderImages
