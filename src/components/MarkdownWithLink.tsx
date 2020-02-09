/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import Link from './Link';

const SPLIT_PER_LINK = /(\[[^\]]+\]\([^\)]+\))/;
const CONTAINS_LINK = /^[\[]/;
const EXTRACT_LINK = /\[([^\]]+)\]\(([^\)]+)\)/;

interface Props {
  children: string;
  className?: string;
}

const MarkdownWithLink: React.FC<Props> = ({ children, className }) => (
  <p className={className}>
    {children.split(SPLIT_PER_LINK).map((subString, i) => {
      if (!CONTAINS_LINK.test(subString)) return subString;

      const [_, text, link] = subString.split(EXTRACT_LINK);
      return (
        <Link key={i} to={link}>
          {text}
        </Link>
      );
    })}
  </p>
);

export default MarkdownWithLink;
