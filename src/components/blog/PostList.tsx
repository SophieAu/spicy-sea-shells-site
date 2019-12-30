import React from 'react'
import './PostList.scss'
import { Post } from '../../types'

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <ul id="post-list">
    {posts.map(({ node }) => (
      <li key={node.id}>
        <h2 className="title">
          <a href={'/article/' + node.frontmatter.slug}>{node.frontmatter.title}</a>
        </h2>
        <div className="meta">
          <p className="author">By {node.frontmatter.author}</p>
          <p className="date">{node.frontmatter.date}</p>
        </div>
        <div className="excerpt">
          <p>{node.excerpt}</p>
        </div>
      </li>
    ))}
  </ul>
)

export default PostList
