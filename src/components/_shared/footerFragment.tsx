import './footerFragment.scss';

import React from 'react';

import chili from '../../../data/img/chili.svg';
import strings from '../../../data/strings';

const FooterFragment: React.FC<{ className?: string }> = ({ className }) => (
  <footer className={className}>
    {`${strings.Footer.preImage} `}
    <img src={chili} alt={strings.Footer.imageAlt} />
    {` ${strings.Footer.postImage}`}
  </footer>
);

export default FooterFragment;
