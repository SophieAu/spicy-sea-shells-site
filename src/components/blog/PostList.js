import React from 'react'
import './PostList.scss'

export default ({ posts }) => (
  <ul className="post-list">
    {posts.map(({ node }) => (
      <li key={node.id}>
        <div className="title">
          <h2>
            <a href={'/article/' + node.frontmatter.slug}>
              {node.frontmatter.title}
            </a>
          </h2>
        </div>
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
