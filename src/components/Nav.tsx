import React from "react"
// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../assets/styles/nav.module.scss"

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__list__item}>
          <AniLink swipe activeStyle={{ color: "#FF856B" }} to="/">
            Home
          </AniLink>
        </li>

        <li className={styles.navbar__list__item}>
          <AniLink swipe activeStyle={{ color: "#FF856B" }} to="/author">
            Author
          </AniLink>
        </li>
        <li className={styles.navbar__list__item}>
          <AniLink swipe activeStyle={{ color: "#FF856B" }} to="/articles/1">
            Articles
          </AniLink>
        </li>
        <li className={styles.navbar__list__item}>
          <AniLink swipe activeStyle={{ color: "#FF856B" }} to="/travels/1">
            Travels
          </AniLink>
        </li>
        <li className={styles.navbar__list__item}>
          <AniLink swipe activeStyle={{ color: "#FF856B" }} to="/photography/1">
            Photography
          </AniLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
