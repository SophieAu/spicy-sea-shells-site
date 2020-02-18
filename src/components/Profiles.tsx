import './Profiles.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import profiles from '../../data/profiles';
import strings from '../../data/strings';
import { BaseInfo, ProfilePics, SocialMedia } from '../types';
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

const Profiles = () => (
  <main className="body">
    {profiles.map(profile => (
      <div className="card" key={profile.id}>
        <ProfilePicture
          id={profile.id}
          name={profile.baseInfo.name}
          imgData={useStaticQuery(query)}
        />
        <div className="profile">
          <InfoBox baseInfo={profile.baseInfo} />
          <SocialMediaIcons socialMedia={profile.socialMedia} />
        </div>
      </div>
    ))}
  </main>
);

interface ProfilePicProps {
  id: string;
  name: string;
  imgData: ProfilePics;
}

const ProfilePicture: React.FC<ProfilePicProps> = ({ id, name, imgData }) => (
  <>
    <div className="image -side">
      <Img fixed={imgData[`${id}_tall` as keyof ProfilePics].childImageSharp.fixed} alt={name} />
    </div>
    <div className="image -top">
      <Img fixed={imgData[`${id}_wide` as keyof ProfilePics].childImageSharp.fixed} alt={name} />
    </div>
  </>
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
      {socialMedia
        .sort((a, b) => (a.platform > b.platform ? 1 : b.platform > a.platform ? -1 : 0))
        .map(({ platform, url }) => (
          <li key={platform}>
            <Link to={url}>
              <img
                src={require(`../../data/img/social-media/${platform}.svg`)}
                alt={strings.About.socialMediaAlt({ platform })}
              />
            </Link>
          </li>
        ))}
    </ul>
  </div>
);

export default Profiles;
