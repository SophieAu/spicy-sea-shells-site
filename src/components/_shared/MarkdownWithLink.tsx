/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import Link from './Link';

const MARKDOWN_LINK_REGEX = /(\[[^\]]+\]\([^\)]+\))/;

const MarkdownWithLink: React.FC<{ markdownText: string }> = ({ markdownText }) => (
  <>
    {markdownText.split(MARKDOWN_LINK_REGEX).map((subString, i) => {
      if (!/^[\[]/.test(subString)) return subString;

      const [_, text, link] = subString.split(/\[([^\]]+)\]\(([^\)]+)\)/);
      return (
        <Link key={i} to={link}>
          {text}
        </Link>
      );
    })}
  </>
);

export default MarkdownWithLink;
