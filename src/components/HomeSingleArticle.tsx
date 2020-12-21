import React from "react"
import { Link } from "gatsby"
import styles from "../assets/styles/home_single_article.module.scss"

const HomeSingleArticle = () => {
  return (
    <div className={styles.single_article}>
      <img
        src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <h3 className={styles.single_article__title}>
        The Ultimate Summer Hat Guide
      </h3>
      <h6 className={styles.single_article__author}>
        by Abigail Mango on 25.10.2020
      </h6>
      <p className={styles.single_article__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus
        libero ratione officia doloremque minus blanditiis architecto inventore
        distinctio vero?
      </p>
      <Link to="/">
        <button className={styles.single_article__button}>Read More</button>
      </Link>
    </div>
  )
}

export default HomeSingleArticle
