import React from 'react';

import copy from '../../data/strings';
import { Author } from '../types';
import { getName } from '../util';
import * as styles from './PostMeta.styles';

const strings = copy.Post;

const PostMeta: React.FC<{ date: string; author: Author }> = ({ date, author }) => (
  <div className={styles.meta}>
    <p>{strings.author({ author: getName(author) })}</p>
    <p className={styles.date}>{date}</p>
  </div>
);

export default PostMeta;
