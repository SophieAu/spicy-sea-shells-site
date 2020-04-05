import { cx } from 'linaria';
import React from 'react';

import strings from '../../data/strings';
import * as styles from './BlogCTA.styles';
import MarkdownWithLink from './MarkdownWithLink';

const BlogCTA: React.FC<{ className?: string }> = ({ className }) => (
  <MarkdownWithLink className={cx(styles.root, className)}>
    {strings.Header.blogCTA}
  </MarkdownWithLink>
);

export default BlogCTA;
