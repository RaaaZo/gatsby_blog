import React from "react"
import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"

import styles from "../assets/styles/home_header_image.module.scss"

interface DataProps {
  allImageSharp: {
    nodes: {
      fluid: {
        aspectRatio: number
        base64: string
        sizes: string
        src: string
        srcSet: string
      }
    }[]
  }
}

const HomeHeaderImages = () => {
  const { allImageSharp } = useStaticQuery<DataProps>(graphql`
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
    <div className={styles.main_images}>
      <div className={styles.main_images__wrapper}>
        <Link to="/travels">
          <div className={styles.main_images__wrapper__text}>
            <h2>Travel</h2>
            <h4>With Me</h4>
          </div>
          <Img
            style={{ width: "100%", height: "100%", position: "absolute" }}
            fluid={nodes[0].fluid}
          />
        </Link>
      </div>

      <div className={styles.main_images__wrapper}>
        <Link to="/photography">
          <div className={styles.main_images__wrapper__text}>
            <h2>Photography</h2>
            <h4>With Me</h4>
          </div>
          <Img
            style={{ width: "100%", height: "100%", position: "absolute" }}
            fluid={nodes[1].fluid}
          />
        </Link>
      </div>
    </div>
  )
}

export default HomeHeaderImages
