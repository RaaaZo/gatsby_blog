import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SingleArticle from "./SingleArticle"
import { Article, Articles } from "../utils/interfaces/interfaces"

const AllArticles: React.FC<any> = ({ articles }) => {
  return (
    <>
      {articles.map((article: Article) => (
        <SingleArticle article={article} key={article.id} />
      ))}
    </>
  )
}

export default AllArticles
