import './headerFragments.scss';

import React from 'react';

import strings from '../../../data/strings';
import { cn } from '../../util';
import MarkdownWithLink from '../MarkdownWithLink';

export const Title: React.FC<{ className?: string }> = ({ className }) => (
  <h1 className={className}>{strings.Header.title}</h1>
);

export const Intro: React.FC<{ className?: string }> = ({ className }) => (
  <p className={className}>
    <span className="-extended">{`${strings.Header.introExtendedOpening} `}</span>
    {strings.Header.introBase}
    <span className="-extended">{` ${strings.Header.introExtended}`}</span>.
  </p>
);

export const BlogCallToAction: React.FC<{ className?: string }> = ({ className }) => (
  <MarkdownWithLink className={`blog-cta${cn(className)}`}>
    {strings.Header.blogCTA}
  </MarkdownWithLink>
);
