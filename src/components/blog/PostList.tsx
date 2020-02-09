import './PostList.scss';

import React from 'react';

import { paths } from '../../../data/config';
import { Post } from '../../types';
import Link from '../Link';
import PostMeta from './PostMeta';

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <ul id="post-list">
    {posts.map(post => {
      const { excerpt, id, frontmatter } = post.node;
      const { slug, author, title, date } = frontmatter;

      return (
        <li key={id}>
          <h2 className="title">
            <Link to={`${paths.articleBase}/${slug}`}>{title}</Link>
          </h2>
          <PostMeta date={date} author={author} />
          <p className="excerpt">{excerpt}</p>
        </li>
      );
    })}
  </ul>
);

export default PostList;
