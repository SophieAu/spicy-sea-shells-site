import './headerFragments.scss';

import React from 'react';

import strings from '../../data/strings';
import { cn } from '../util';
import MarkdownWithLink from './MarkdownWithLink';

export const BlogCallToAction: React.FC<{ className?: string }> = ({ className }) => (
  <MarkdownWithLink className={`blog-cta${cn(className)}`}>
    {strings.Header.blogCTA}
  </MarkdownWithLink>
);
