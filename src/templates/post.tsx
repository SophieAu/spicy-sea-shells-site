import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Wrapper from '../components/blog/Wrapper'
import commentBox from 'commentbox.io'
import '../main.scss'
import './post.scss'
import { SingleGraphQLResponse, PostFrontmatter, Crosspost } from '../types'

const Post: React.FC<SingleGraphQLResponse> = ({ data: { markdownRemark } }) => (
  <>
    <HelmetData frontmatter={markdownRemark.frontmatter} />
    <Wrapper>
      <div id="post">
        <Frontmatter frontmatter={markdownRemark.frontmatter} />
        <PostBody body={markdownRemark.html} />
      </div>
      <CommentBox />
    </Wrapper>
  </>
)

const HelmetData: React.FC<PostFrontmatter> = ({ frontmatter }) => (
  <Helmet>
    <title>{frontmatter.title} | Spicy Sea Shells</title>
    <meta
      name="description"
      content={'Blog of the Spicy Sea Shells | Blogpost about ' + frontmatter.title}
    />
  </Helmet>
)

const Frontmatter: React.FC<PostFrontmatter> = ({ frontmatter }) => (
  <>
    <h1>{frontmatter.title}</h1>
    <div className="meta">
      <p className="author">{`By ${frontmatter.author}`}</p>
      <p className="date">{frontmatter.date}</p>
    </div>
    {!!frontmatter.crosspost && (
      <CrosspostText
        url={frontmatter.crosspost.url}
        site={frontmatter.crosspost.site}
        prefix={!!frontmatter.crosspost.prefix}
      />
    )}
  </>
)

const CrosspostText: React.FC<Crosspost> = ({ site, url, prefix }) => (
  <div className="crosspost">
    This is a crosspost from {prefix && 'the '}
    <a href={url}>{site}</a>.
  </div>
)

const PostBody: React.FC<{ body: string }> = ({ body }) => (
  <div className="post-body" dangerouslySetInnerHTML={{ __html: body }} />
)

const CommentBox = () => {
  useEffect(() => {
    const removeCommentBox = commentBox('5655957052850176-proj')
    return removeCommentBox()
  })

  return <div className="commentbox" />
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

export default Post
