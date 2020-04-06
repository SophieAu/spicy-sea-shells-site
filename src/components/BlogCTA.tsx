import { cx } from 'linaria';
import React from 'react';

import copy from '../../data/strings';
import { ClassNameProp } from '../types';
import * as styles from './BlogCTA.styles';
import MarkdownWithLink from './MarkdownWithLink';

const strings = copy.Header;

const BlogCTA: React.FC<ClassNameProp> = ({ className }) => (
  <MarkdownWithLink className={cx(styles.root, className)}>{strings.blogCTA}</MarkdownWithLink>
);

export default BlogCTA;
