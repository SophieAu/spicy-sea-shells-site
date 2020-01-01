import './Profiles.scss';

import React from 'react';

import profiles from '../../../data/profiles';
import strings from '../../../data/strings';
import { BaseInfo, SocialMedia } from '../../types';

const Profiles = () => (
  <main className="body">
    {profiles.map(profile => (
      <div className="card" key={profile.id}>
        <ProfilePicture id={profile.id} name={profile.baseInfo.name} />
        <div className="profile">
          <InfoBox baseInfo={profile.baseInfo} />
          <SocialMediaIcons socialMedia={profile.socialMedia} />
        </div>
      </div>
    ))}
  </main>
);

const ProfilePicture: React.FC<{ id: string; name: string }> = ({ id, name }) => (
  <div className="image">
    <img
      className="image -side"
      src={require(`../../../data/images/profiles/${id}_tall.jpg`)}
      alt={name}
    />
    <img
      className="image -top"
      src={require(`../../../data/images/profiles/${id}_wide.jpg`)}
      alt={name}
    />
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
      {socialMedia
        .sort((a, b) => (a.platform > b.platform ? 1 : b.platform > a.platform ? -1 : 0))
        .map(entry => {
          const { platform, url } = entry;

          return (
            <li key={platform}>
              <a href={url}>
                <img
                  src={require(`../../../data/images/social-media/${platform}.svg`)}
                  alt={strings.About.socialMediaAlt({ platform })}
                />
              </a>
            </li>
          );
        })}
    </ul>
  </div>
);

export default Profiles;
