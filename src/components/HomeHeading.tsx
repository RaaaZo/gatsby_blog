import React from "react"

import { motion } from "framer-motion"
import styles from "../assets/styles/heading.module.scss"
import { scaleUp } from "../utils/animations/variants"

const HomeHeading = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.4 }}
      className={styles.heading}
    >
      <motion.h1 variants={scaleUp}>Abigail Mongo</motion.h1>
      <motion.h3 variants={scaleUp}>Blogger</motion.h3>
    </motion.div>
  )
}

export default HomeHeading
