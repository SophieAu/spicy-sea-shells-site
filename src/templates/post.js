import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Wrapper from '../components/blog/Wrapper.js'
import commentBox from 'commentbox.io'
import '../styles/main.scss'
import './post.scss'

export default ({ data: { markdownRemark: post } }) => (
  <>
    <HelmetData post={post} />
    <Wrapper>
      <div className="post">
        <Frontmatter frontmatter={post.frontmatter} />
        <PostBody body={post.html} />
      </div>
      <CommentBox />
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

const Frontmatter = ({ frontmatter }) => (
  <>
    <h1>{frontmatter.title}</h1>
    <div className="meta">
      <p className="author">By {frontmatter.author}</p>
      <p className="date">{frontmatter.date}</p>
    </div>
    {!!frontmatter.crosspost && (
      <Crosspost
        url={frontmatter.crosspost.url}
        site={frontmatter.crosspost.site}
        prefix={!!frontmatter.crosspost.prefix}
      />
    )}
  </>
)

const Crosspost = ({ site, url, prefix }) => (
  <div className="crosspost">
    This is a crosspost from {prefix && 'the '}
    <a href={url}>{site}</a>.
  </div>
)

const PostBody = ({ body }) => (
  <div className="post-body" dangerouslySetInnerHTML={{ __html: body }} />
)

class CommentBox extends React.Component {
  componentDidMount() {
    this.removeCommentBox = commentBox('5655957052850176-proj')
  }
  componentWillUnmount() {
    this.removeCommentBox()
  }

  render() {
    return <div className="commentbox" />
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "DD MMMM YYYY")
        slug
        crosspost {
          url
          site
          prefix
        }
      }
      html
    }
  }
`
