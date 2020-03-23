import React from 'react';

import strings from '../../data/strings';
import { Author } from '../types';
import { getName } from '../util';
import * as styles from './PostMeta.styles';

const PostMeta: React.FC<{ date: string; author: Author }> = ({ date, author }) => (
  <div className={styles.meta}>
    <p>{strings.Post.author({ author: getName(author) })}</p>
    <p className={styles.date}>{date}</p>
  </div>
);

export default PostMeta;
