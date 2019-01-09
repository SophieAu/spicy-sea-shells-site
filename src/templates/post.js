import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Wrapper from '../components/blog/Wrapper.js'
import '../styles/main.scss'
import './post.scss'

export default ({ data: { markdownRemark: post } }) => (
  <>
    <HelmetData post={post} />
    <Wrapper>
      <div className="post">
        <h1>{post.frontmatter.title}</h1>
        <div className="meta">
          <p className="author">By {post.frontmatter.author}</p>
          <p className="date">{post.frontmatter.date}</p>
        </div>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Wrapper>
  </>
)

const HelmetData = ({ post }) => (
  <Helmet>
    <title>{post.frontmatter.title} | Spicy Sea Shells</title>
    <meta
      name="description"
      content={'Blog of the Spicy Sea Shells | Blogpost about ' + post.frontmatter.title}
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
