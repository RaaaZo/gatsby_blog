import React from "react"
import { Link } from "gatsby"
// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"

import paginationStyles from "../assets/styles/pagination.module.scss"

interface Props {
  currentPage: number
  numPages: number
  url: string
}

const Pagination: React.FC<Props> = ({ currentPage, numPages, url }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? `${url}/1` : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <div className={paginationStyles.pagination}>
      <ul>
        {!isFirst && (
          <li>
            <AniLink fade to={prevPage}>
              ← Prev. Page
            </AniLink>
          </li>
        )}

        {Array.from({ length: numPages }).map((_, index) => (
          <li key={`page-number-${index + 1}`}>
            <AniLink fade to={`${url}/${index + 1}`}>
              {index + 1}
            </AniLink>
          </li>
        ))}

        {!isLast && (
          <li>
            <AniLink fade to={`${url}/${nextPage}`} rel="next">
              Next Page →
            </AniLink>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Pagination
