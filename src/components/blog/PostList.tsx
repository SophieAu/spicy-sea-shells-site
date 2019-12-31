import './PostList.scss';

import React from 'react';

import strings from '../../../data/strings';
import { getName } from '../../helpers';
import { Post } from '../../types';

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <ul id="post-list">
    {posts.map(post => {
      const { excerpt, id, frontmatter } = post.node;
      const { slug, author, title, date } = frontmatter;

      return (
        <li key={id}>
          <h2 className="title">
            <a href={`/article/${slug}`}>{title}</a>
          </h2>
          <div className="meta">
            <p className="author">{`${strings.PostList.authorTag} ${getName(author)}`}</p>
            <p className="date">{date}</p>
          </div>
          <p className="excerpt">{excerpt}</p>
        </li>
      );
    })}
  </ul>
);

export default PostList;
