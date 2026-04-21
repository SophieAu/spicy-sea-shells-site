import { cx } from 'linaria';
import React from 'react';

import chili from '../../data/img/chili.svg';
import copy from '../../data/strings';
import { ClassNameProp } from '../types';
import * as styles from './Footer.styles';

const strings = copy.Footer;

const Footer: React.FC<ClassNameProp> = ({ className = styles.defaultFooter }) => (
  <footer className={cx(styles.root, className)}>
    {`${strings.preImage} `}
    <img src={chili} alt={strings.imageAlt} />
    {` ${strings.postImage}`}
  </footer>
);

export default Footer;
