import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { cx } from 'linaria';
import React from 'react';

import profiles from '../../data/profiles';
import copy from '../../data/strings';
import { FixedImage, SocialMedia, UserInfo } from '../types';
import { sortPlatforms } from '../util';
import Link from './Link';
import * as styles from './Profiles.styles';

const strings = copy.about;

const query = graphql`
  query {
    sophie_tall: file(relativePath: { eq: "profiles/sophie_tall.jpg" }) {
      ...profileTall
    }
    sophie_wide: file(relativePath: { eq: "profiles/sophie_wide.jpg" }) {
      ...profileWide
    }
    jean_tall: file(relativePath: { eq: "profiles/jean_tall.jpg" }) {
      ...profileTall
    }
    jean_wide: file(relativePath: { eq: "profiles/jean_wide.jpg" }) {
      ...profileWide
    }
    ellie_tall: file(relativePath: { eq: "profiles/ellie_tall.jpg" }) {
      ...profileTall
    }
    ellie_wide: file(relativePath: { eq: "profiles/ellie_wide.jpg" }) {
      ...profileWide
    }
    jackie_tall: file(relativePath: { eq: "profiles/jackie_tall.jpg" }) {
      ...profileTall
    }
    jackie_wide: file(relativePath: { eq: "profiles/jackie_wide.jpg" }) {
      ...profileWide
    }
    kamala_tall: file(relativePath: { eq: "profiles/kamala_tall.jpg" }) {
      ...profileTall
    }
    kamala_wide: file(relativePath: { eq: "profiles/kamala_wide.jpg" }) {
      ...profileWide
    }
    andrei_tall: file(relativePath: { eq: "profiles/andrei_tall.jpg" }) {
      ...profileTall
    }
    andrei_wide: file(relativePath: { eq: "profiles/andrei_wide.jpg" }) {
      ...profileWide
    }
    nimish_tall: file(relativePath: { eq: "profiles/nimish_tall.jpg" }) {
      ...profileTall
    }
    nimish_wide: file(relativePath: { eq: "profiles/nimish_wide.jpg" }) {
      ...profileWide
    }
  }
`;

interface Props {
  className: string;
}

const Profiles: React.FC<Props> = ({ className }) => (
  <main className={cx(styles.root, className)}>
    {profiles.map(profile => (
      <Card profile={profile} key={profile.id} />
    ))}
  </main>
);

const Card: React.FC<{ profile: UserInfo }> = ({ profile }) => {
  const { id, baseInfo, socialMedia } = profile;

  const imgData = useStaticQuery(query);
  const tallId = `${id}_tall`;
  const wideId = `${id}_wide`;

  return (
    <div className={styles.card}>
      <ProfileImage className="side" image={imgData[tallId]} alt={baseInfo.name} />
      <ProfileImage className="top" image={imgData[wideId]} alt={baseInfo.name} />
      <div className={styles.profile}>
        <div className={styles.info}>
          <p className={styles.city}>{baseInfo.city}</p>
          <h2 className={styles.name}>{baseInfo.name}</h2>
          <p className={cx(styles.bio, '-long')}>{baseInfo.bio}</p>
          <p className={cx(styles.bio, '-short')}>{baseInfo.bioShort}</p>
        </div>
        <ul className={styles.socialMedia}>
          {socialMedia.sort(sortPlatforms).map(socialMedia => (
            <SocialMediaIcon socialMedia={socialMedia} key={socialMedia.url} />
          ))}
        </ul>
      </div>
    </div>
  );
};

interface ProfileImageProps {
  image: FixedImage;
  className: string;
  alt: string;
}
const ProfileImage: React.FC<ProfileImageProps> = ({ image, className, alt }) => (
  <div className={cx(styles.image, `-${className}`)}>
    <Img fixed={image.childImageSharp.fixed} alt={alt} />
  </div>
);

const SocialMediaIcon: React.FC<{ socialMedia: SocialMedia }> = ({ socialMedia }) => (
  <li key={socialMedia.platform}>
    <Link to={socialMedia.url}>
      <img
        src={require(`../../data/img/social-media/${socialMedia.platform}.svg`)}
        alt={strings.socialMediaAlt({ platform: socialMedia.platform })}
      />
    </Link>
  </li>
);

export default Profiles;
