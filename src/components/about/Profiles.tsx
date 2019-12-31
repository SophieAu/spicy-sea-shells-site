import React from 'react'
import profiles from '../../../data/profiles'
import './Profiles.scss'
import { BaseInfo, SocialMedia, UserInfo } from '../../types'

const Profiles = () => (
  <main className="body">
    {profiles.map((profile: UserInfo, i: number) => (
      <div className="card" key={i}>
        <ProfilePicture name={profile.image} />
        <div className="profile">
          <InfoBox baseInfo={profile.baseInfo} />
          <SocialMediaIcons socialMedia={profile.socialMedia} />
        </div>
      </div>
    ))}
  </main>
)

const ProfilePicture: React.FC<{ name: string }> = ({ name }) => (
  <>
    <div className="image">
      <img
        className="image -side"
        src={require('../../../data/images/profiles/' + name + '_tall.jpg')}
        alt={name}
      />
      <img
        className="image -top"
        src={require('../../../data/images/profiles/' + name + '_wide.jpg')}
        alt={name}
      />
    </div>
  </>
)

const InfoBox: React.FC<{ baseInfo: BaseInfo }> = ({ baseInfo }) => (
  <div className="info">
    <p className="city">{baseInfo.city}</p>
    <h2 className="name">{baseInfo.name}</h2>
    <p className="bio -long">{baseInfo.bio}</p>
    <p className="bio -short">{baseInfo.bioShort}</p>
  </div>
)

const SocialMediaIcons: React.FC<{ socialMedia: SocialMedia[] }> = ({ socialMedia }) => (
  <div className="social-media">
    <hr />
    <ul className="links">
      {socialMedia
        .sort((a, b) => (a.platform > b.platform ? 1 : b.platform > a.platform ? -1 : 0))
        .map((entry, i) => (
          <a key={i} href={entry.url}>
            <img
              src={require('../../../data/images/social-media/' + entry.platform + '.svg')}
              alt={'logo of ' + entry.platform}
            />
          </a>
        ))}
    </ul>
  </div>
)

export default Profiles
