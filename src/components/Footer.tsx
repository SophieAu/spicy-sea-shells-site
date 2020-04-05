import { cx } from 'linaria';
import React from 'react';

import chili from '../../data/img/chili.svg';
import strings from '../../data/strings';
import * as styles from './Footer.styles';

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className = styles.defaultFooter }) => (
  <footer className={cx(styles.root, className)}>
    {`${strings.Footer.preImage} `}
    <img src={chili} alt={strings.Footer.imageAlt} />
    {` ${strings.Footer.postImage}`}
  </footer>
);

export default Footer;
