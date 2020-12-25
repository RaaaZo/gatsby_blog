import { graphql, PageProps } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import styles from "../assets/styles/article.module.scss"
import SEO from "../components/SEO"

interface DataProps {
  article: {
    title: string
    publishedDate: string
    author: string
    body: any
    image: {
      fluid: {
        aspectRatio: number
        base64: string
        sizes: string
        src: string
        srcSet: string
      }
    }
  }
}

const Article: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { author, image, publishedDate, title, body } = data.article

  return (
    <>
      <SEO />
      <div className={styles.article__wrapper}>
        <div className={styles.article__image_wrapper}>
          <Img style={{ width: "100%", height: "100%" }} fluid={image.fluid} />
        </div>
        <h1>{title}</h1>
        <h3>
          by {author} on {publishedDate}
        </h3>
        {renderRichText(body)}
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    article: contentfulBlogPost(slug: { eq: $slug }) {
      title
      description
      author
      publishedDate(formatString: "Do, MMMM YYYY")
      body {
        raw
      }
      image {
        fluid(maxWidth: 1360, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Article
