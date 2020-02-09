import './PostMeta.scss';

import React from 'react';

import strings from '../../../data/strings';
import { Author } from '../../types';
import { getName } from '../../util';

const PostMeta: React.FC<{ date: string; author: Author }> = ({ date, author }) => (
  <div className="meta">
    <p className="author">{strings.Post.author({ author: getName(author) })}</p>
    <p className="date">{date}</p>
  </div>
);

export default PostMeta;
