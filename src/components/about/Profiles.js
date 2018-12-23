import React from 'react'
import profiles from '../../profiles.json'
import './Profiles.scss'

export default () => (
  <main className="body">
    {profiles.map((profile, i) => (
      <ProfileCard key={i} info={profile} />
    ))}
  </main>
)

const ProfileCard = ({
  info: { name, image, city, bio, bioShort, socialMedia },
}) => (
  <div className="card">
    <ProfilePicture name={image} />
    <div className="profile">
      <InfoBox city={city} name={name} bio={bio} bioShort={bioShort} />
      <SocialMedia socialMedia={socialMedia} />
    </div>
  </div>
)

const ProfilePicture = ({ name }) => (
  <>
    <div className="image -side">
      <img
        src={require('../../images/profiles/' + name + '_tall.jpg')}
        alt={name}
      />
    </div>
    <div className="image -top">
      <img
        src={require('../../images/profiles/' + name + '_wide.jpg')}
        alt={name}
      />
    </div>
  </>
)

const InfoBox = ({ name, city, bio, bioShort }) => (
  <div className="info">
    <h4 className="city">{city}</h4>
    <h2 className="name">{name}</h2>
    <p className="bio -long">{bio}</p>
    <p className="bio -short">{bioShort}</p>
  </div>
)

const SocialMedia = ({ socialMedia }) => (
  <div className="social-media">
    <hr />
    <div className="links">
      {Object.entries(socialMedia)
        .sort()
        .map((entry, i) => (
          <a key={i} href={entry[1]}>
            <img
              src={require('../../images/social-media/' + entry[0] + '.svg')}
              alt={'logo of ' + entry[0]}
            />
          </a>
        ))}
    </div>
  </div>
)
