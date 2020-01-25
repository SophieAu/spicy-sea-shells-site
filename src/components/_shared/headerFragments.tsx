import './headerFragments.scss';

import React from 'react';

import strings from '../../../data/strings';
import MarkdownWithLink from './MarkdownWithLink';

const Title: React.FC<{ className?: string }> = ({ className }) => (
  <h1 className={className}>{strings.Header.title}</h1>
);

const Intro: React.FC<{ className?: string }> = ({ className }) => (
  <p className={className}>
    <span className="-extended">{`${strings.Header.introExtendedOpening} `}</span>
    {strings.Header.introBase}
    <span className="-extended">{` ${strings.Header.introExtended}`}</span>.
  </p>
);

const BlogCallToAction: React.FC<{ className?: string }> = ({ className }) => (
  <MarkdownWithLink
    className={`blog-cta${className ? ` ${className}` : ''}`}
    markdownText={strings.Header.blogCTA}
  />
);

export { Title, Intro, BlogCallToAction };
