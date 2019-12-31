import React from 'react';
import './footerFragment.scss';
import chili from '../../../data/images/chili.svg';
import strings from '../../../data/strings';

const FooterFragment: React.FC<{ className?: string }> = ({ className }) => (
  <footer className={className}>
    {`${strings.Footer.preImage} `}
    <img src={chili} alt={strings.Footer.imageAlt} />
    {` ${strings.Footer.postImage}`}
  </footer>
);

export default FooterFragment;
