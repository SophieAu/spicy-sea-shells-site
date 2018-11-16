import React from 'react'
import './ProfileCard.scss';


export default class ProfileCard extends React.Component {
  getSocialMedia = () => Object.keys(this.props.info.socialMedia).map(({platform, url},i) => (<a key={i} href={url}><img src={platform + ".svg"} alt={"logo of " + platform} /></a>))

  render = ({name, image, city, bio, socialMedia} = this.props.info) => (
    <div className="card">
      <div className="image">
        <img src={process.env.PUBLIC_URL + "/img/" + image} alt={name}/>
      </div>
      <div className="profile">
        <h4>{city}</h4>
        <h2>{name}</h2>
        <p>{bio}</p>
        <div className="socialMedia">
          {this.getSocialMedia()}
        </div>
      </div>
    </div>
  )
}

