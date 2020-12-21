import React from "react"

import "../assets/styles/globals.scss"
import styles from "../assets/styles/pagesWrapper.module.scss"
import Footer from "./Footer"
import Nav from "./Nav"

const layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.pageWrapper}>{children}</div>
      <Footer />
    </>
  )
}

export default layout
