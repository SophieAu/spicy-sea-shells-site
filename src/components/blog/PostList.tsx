import React from 'react';
import './PostList.scss';
import { Post } from '../../types';
import strings from '../../../data/strings';

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <ul id="post-list">
    {posts.map(({ node }) => (
      <li key={node.id}>
        <h2 className="title">
          <a href={`/article/${node.frontmatter.slug}`}>{node.frontmatter.title}</a>
        </h2>
        <div className="meta">
          <p className="author">{`${strings.PostList.authorTag} ${node.frontmatter.author}`}</p>
          <p className="date">{node.frontmatter.date}</p>
        </div>
        <p className="excerpt">{node.excerpt}</p>
      </li>
    ))}
  </ul>
);

export default PostList;
