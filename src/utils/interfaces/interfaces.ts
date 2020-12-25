export interface Article {
  id: string
  title: string
  description: string
  slug: string
  publishedDate: string
  author: string
  image: {
    fluid: {
      aspectRatio: number
      base64: string
      sizes: string
      src: string
      srcSet: string
    }
  }
}

export interface Articles {
  articles: {
    nodes: Article[]
  }
}

export interface GatsbyFluidImage {
  fluid: {
    aspectRatio: number
    base64: string
    sizes: string
    src: string
    srcSet: string
  }
}

export interface PaginationPageContext {
  limit: number
  skip: number
  numPages: number
  currentPage: number
}
