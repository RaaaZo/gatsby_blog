import React from "react"

import styles from "../assets/styles/follow_me.module.scss"

const HomeFollowMe = () => {
  return (
    <div className={styles.follow_me}>
      <h2>
        FOLLOW ME ON <a href="https://www.instagram.com/"> INSTAGRAM </a>
      </h2>
      <div className={styles.follow_me__images_wrapper}>
        <img
          src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
    </div>
  )
}

export default HomeFollowMe
