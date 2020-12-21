import React from "react"
import HomeSingleArticle from "./HomeSingleArticle"

import styles from "../assets/styles/home_article_list.module.scss"

const HomeArticlesList: React.FC<{}> = () => {
  return (
    <div className={styles.articles_list}>
      <h2>Articles</h2>

      <div className={styles.articles_wrapper}>
        <HomeSingleArticle />
        <HomeSingleArticle />
        <HomeSingleArticle />
        <HomeSingleArticle />
        <HomeSingleArticle />
      </div>
    </div>
  )
}

export default HomeArticlesList
