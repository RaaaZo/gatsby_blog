import React from "react"
import { Link } from "gatsby"

import styles from "../assets/styles/nav.module.scss"

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__list__item}>
          <Link activeStyle={{ color: "#FF856B" }} to="/">
            Home
          </Link>
        </li>

        <li className={styles.navbar__list__item}>
          <Link activeStyle={{ color: "#FF856B" }} to="/author">
            Author
          </Link>
        </li>
        <li className={styles.navbar__list__item}>
          <Link activeStyle={{ color: "#FF856B" }} to="/articles">
            Articles
          </Link>
        </li>
        <li className={styles.navbar__list__item}>
          <Link activeStyle={{ color: "#FF856B" }} to="/travels">
            Travels
          </Link>
        </li>
        <li className={styles.navbar__list__item}>
          <Link activeStyle={{ color: "#FF856B" }} to="/photography">
            Photography
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
