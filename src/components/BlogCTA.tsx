import './BlogCTA.scss';

import React from 'react';

import strings from '../../data/strings';
import { cn } from '../util';
import MarkdownWithLink from './MarkdownWithLink';

const BlogCTA: React.FC<{ className?: string }> = ({ className }) => (
  <MarkdownWithLink className={`blog-cta${cn(className)}`}>
    {strings.Header.blogCTA}
  </MarkdownWithLink>
);

export default BlogCTA;
