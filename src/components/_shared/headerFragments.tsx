import React from 'react';
import './headerFragments.scss';
import logo from '../../../data/images/logo.png';
import strings from '../../../data/strings';

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
  <p className={className}>
    {`${strings.Header.blogCTA} `}
    <a className="cta-link" href="/blog">
      {strings.Header.blogCTALink}
    </a>
  </p>
);

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <img className={className} src={logo} alt={strings.Header.logoAlt} />
);

export { Title, Intro, BlogCallToAction, Logo };
