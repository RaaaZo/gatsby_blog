import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const SEO: React.FC<{}> = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          baseUrl
        }
      }
    }
  `)

  return (
    <Helmet>
      <html lang="en" />
      <title>{site.siteMetadata.title}</title>
      <link rel="canonical" href={site.siteMetadata.baseUrl} />
      <meta name="description" content={site.siteMetadata.description} />

      <meta property="og:url" content={site.siteMetadata.baseUrl} />
      <meta property="og:type" content="blog" />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
    </Helmet>
  )
}

export default SEO
