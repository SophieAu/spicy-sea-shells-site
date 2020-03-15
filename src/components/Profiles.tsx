import './Profiles.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import profiles from '../../data/profiles';
import strings from '../../data/strings';
import { BaseInfo, FixedImage, SocialMedia, UserInfo } from '../types';
import { sortPlatforms } from '../util';
import Link from './Link';

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

const Profiles: React.FC = () => (
  <main className="body">
    {profiles.map(profile => (
      <Card profile={profile} key={profile.id} />
    ))}
  </main>
);

const Card: React.FC<{ profile: UserInfo }> = ({ profile }) => {
  const { id, baseInfo, socialMedia } = profile;
  const imgData = useStaticQuery(query);

  return (
    <div className="card">
      <ProfileImage className="side" image={imgData[`${id}_tall`]} alt={baseInfo.name} />
      <ProfileImage className="top" image={imgData[`${id}wide`]} alt={baseInfo.name} />
      <div className="profile">
        <InfoBox baseInfo={baseInfo} />
        <SocialMediaIcons socialMedia={socialMedia} />
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
  <div className={`image -${className}`}>
    <Img fixed={image.childImageSharp.fixed} alt={alt} />
  </div>
);

const InfoBox: React.FC<{ baseInfo: BaseInfo }> = ({ baseInfo }) => (
  <div className="info">
    <p className="city">{baseInfo.city}</p>
    <h2 className="name">{baseInfo.name}</h2>
    <p className="bio -long">{baseInfo.bio}</p>
    <p className="bio -short">{baseInfo.bioShort}</p>
  </div>
);

const SocialMediaIcons: React.FC<{ socialMedia: SocialMedia[] }> = ({ socialMedia }) => (
  <div className="social-media">
    <hr />
    <ul className="links">
      {socialMedia.sort(sortPlatforms).map(socialMedia => (
        <SocialMediaIcon socialMedia={socialMedia} key={socialMedia.url} />
      ))}
    </ul>
  </div>
);

const SocialMediaIcon: React.FC<{ socialMedia: SocialMedia }> = ({ socialMedia }) => (
  <li key={socialMedia.platform}>
    <Link to={socialMedia.url}>
      <img
        src={require(`../../data/img/social-media/${socialMedia.platform}.svg`)}
        alt={strings.about.socialMediaAlt({ platform: socialMedia.platform })}
      />
    </Link>
  </li>
);

export default Profiles;
