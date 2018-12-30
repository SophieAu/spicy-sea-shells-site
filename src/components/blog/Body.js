import React from 'react'
import './Body.scss'


export default ({ posts }) => (
  <div className="list-body">
    <h2>Articles</h2>
    <ul className="post-list">
      {posts.map(({ node }) => (
        <li key={node.id}>
          <a href={"/article/" + node.frontmatter.slug}>
            <span className="post-date">{node.frontmatter.date} </span>
            {node.frontmatter.title}
          </a>
          <p>{node.excerpt}</p>
        </li>
      ))}
    </ul>
  </div>
);
