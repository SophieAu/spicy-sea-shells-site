import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Header from '../components/blog/Header.js'
import Footer from '../components/Footer.js'
import BodyWrapper from '../components/blog/BodyWrapper.js'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <HelmetData post={post} />
      <div id="blog">
        <Header />
        <BodyWrapper>
          <div className="article">
            <h1>{post.frontmatter.title}</h1>
            <p className="author">by {post.frontmatter.author}</p>
            <p className="date">{post.frontmatter.date}</p>
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </BodyWrapper>
        <Footer />
      </div>
    </>
  )
}

const HelmetData = ({ post }) => (
  <Helmet>
    <title>{post.frontmatter.title} | Spicy Sea Shells</title>
    <meta
      name="description"
      content={
        'Homepage of the Spicy Sea Shells | Blogpost about ' +
        post.frontmatter.title
      }
    />
  </Helmet>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "DD MMMM YYYY")
        slug
      }
      html
    }
  }
`
