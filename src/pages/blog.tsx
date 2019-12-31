import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PostList from '../components/blog/PostList'
import Wrapper from '../components/blog/Wrapper'
import { Intro } from '../components/_shared/headerFragments'
import './blog.scss'
import '../main.scss'
import { GraphQLResponse } from '../types'
import strings from '../../data/strings'

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "DD MMMM YYYY")
            slug
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`

const Blog: React.FC<GraphQLResponse> = ({ data }) => (
  <>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{strings.Blog.pageTitle}</title>
      <meta name="description" content={strings.Blog.description} />
    </Helmet>
    <Wrapper>
      <div className="blog-home">
        <div className="hero-section">
          <h1>{strings.Blog.title}</h1>
          <div className="hero-text">
            <p>
              {`${strings.Blog.heroPreLink} `}
              <a href="/about">{strings.Blog.heroLink}</a>
              {` ${strings.Blog.heroPostLink}`}
            </p>
            <Intro />
          </div>
        </div>
        <div className="posts">
          <h1>{strings.Blog.latestHeading}</h1>
          <PostList posts={data.allMarkdownRemark.edges} />
        </div>
      </div>
    </Wrapper>
  </>
)

export default Blog
