import './Footer.scss';

import React from 'react';

import chili from '../../../data/img/chili.svg';
import strings from '../../../data/strings';

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className = 'footer' }) => (
  <footer className={className}>
    {`${strings.Footer.preImage} `}
    <img src={chili} alt={strings.Footer.imageAlt} />
    {` ${strings.Footer.postImage}`}
  </footer>
);

export default Footer;
