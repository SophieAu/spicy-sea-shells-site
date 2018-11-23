import React from 'react'
import './ProfileCard.scss';


export default class ProfileCard extends React.Component {
  getSocialMedia = () => Object.entries(this.props.info.socialMedia).map((entry,i) => <a key={i} href={entry[1]}><img src={"/img/social-media/" + entry[0] + ".svg"} alt={"logo of " + entry[0]} /></a>)

  render = ({name, image, city, bio, bioExt, socialMedia} = this.props.info) => (
    <div className="card">
      <div className="image-side">
        <img src={process.env.PUBLIC_URL + "/img/profiles/" + image + "_tall.jpg"} alt={name}/>
      </div>
      <div className="image-top">
        <img src={process.env.PUBLIC_URL + "/img/profiles/" + image + "_wide.jpg"} alt={name}/>
      </div>
      <div className="profile">
        <div className="info">
          <h4>{city}</h4>
          <h2>{name}</h2>
          <p>{bio}<span className="extended-bio"> {bioExt}</span></p>
        </div>
        <div className="social-media">
          <hr />
          <div className="links">
          {this.getSocialMedia()}
        </div>
        </div>
      </div>
    </div>
  )
}

