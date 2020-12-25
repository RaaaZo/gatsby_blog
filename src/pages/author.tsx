import React from "react"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import { GatsbyFluidImage } from "../utils/interfaces/interfaces"
import styles from "../assets/styles/author.module.scss"
import { motion } from "framer-motion"
import { FadeIn, scaleUp } from "../utils/animations/variants"
import SEO from "../components/SEO"

interface DataProps {
  image: {
    childImageSharp: GatsbyFluidImage
  }
}

const AuthorPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { fluid } = data.image.childImageSharp
  return (
    <>
      <SEO />
      <motion.div initial="hidden" animate="show" className={styles.author}>
        <div className={styles.author__heading}>
          <motion.h1 variants={scaleUp}>
            Hey! I'm Abigail, Author Of This Blog
          </motion.h1>
        </div>

        <motion.div variants={FadeIn} className={styles.author__image_wrapper}>
          <Img style={{ width: "100%", height: "100%" }} fluid={fluid} />
        </motion.div>

        <motion.div variants={FadeIn} className={styles.author__description}>
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            quod ipsum. Iusto deserunt unde cumque repudiandae aut magnam ab
            veritatis. Ea veniam ipsum architecto. Natus cupiditate quam,
            laborum optio nesciunt consequatur est nulla repellat quia dolorum
            quis, architecto explicabo minus repudiandae culpa inventore iste
            autem totam, eum vel laboriosam rerum. Aut error esse, odit mollitia
            cupiditate eveniet recusandae nesciunt quibusdam, impedit minima
            pariatur voluptatum magnam itaque quaerat natus provident cum.
          </h3>
        </motion.div>
        <motion.div variants={FadeIn} className={styles.author__text}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            nesciunt iusto deleniti? Quis unde blanditiis cum aperiam obcaecati
            recusandae corporis quidem beatae, assumenda, iure molestias eius
            maxime dolorum? Rem nisi quaerat qui unde doloribus aut eum,
            temporibus rerum aliquid. Consequatur, doloribus totam tempora
            dolore labore iste. Perspiciatis ducimus dolorem neque officiis
            soluta consequatur vitae totam. Perferendis consequuntur possimus
            doloribus eveniet asperiores! Rerum amet odit minus quos soluta
            nesciunt vel? Saepe nemo quam consequatur veniam delectus id, iure
            totam nam ab perspiciatis eveniet cupiditate amet eaque mollitia
            eius. Obcaecati eligendi cumque veritatis quae et. Quod velit
            ducimus rem impedit voluptates, quam eos tempora minima eligendi
            commodi recusandae veniam nulla expedita ipsa quo dolorum.
            Reprehenderit obcaecati, tempore omnis fugit error laborum
            voluptates dolor praesentium quis nam, modi iure perferendis earum
            sit sed! Tempora debitis beatae, esse est in vel optio soluta
            explicabo vero quas sint unde sequi asperiores ea molestias quia
            repellendus.
          </p>
        </motion.div>
      </motion.div>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    image: file(name: { eq: "author" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AuthorPage
