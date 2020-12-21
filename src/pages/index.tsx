import React from "react"
import { PageProps } from "gatsby"

import HomeHeaderImages from "../components/HomeHeaderImages"
import HomeHeading from "../components/HomeHeading"
import HomeArticlesList from "../components/HomeArticlesList"
import HomeFollowMe from "../components/HomeFollowMe"

const HomePage: React.FC<PageProps<{}>> = () => {
  return (
    <>
      <HomeHeading />
      <HomeHeaderImages />
      <HomeArticlesList />
      <HomeFollowMe />
    </>
  )
}

export default HomePage
