import React from "react";
import "./ProfileCard.scss";
import ProfilePicture from "./ProfilePicture";
import InfoBox from "./InfoBox";
import SocialMedia from "./SocialMedia";

export default class ProfileCard extends React.Component {
  getSocialMedia = () =>
    Object.entries(this.props.info.socialMedia).map((entry, i) => (
      <a key={i} href={entry[1]}>
        <img
          src={"/img/social-media/" + entry[0] + ".svg"}
          alt={"logo of " + entry[0]}
        />
      </a>
    ));

  render = (
    { name, image, city, bio, bioExt, socialMedia } = this.props.info
  ) => (
    <div className="card">
      <ProfilePicture name={image} />
      <div className="profile">
        <InfoBox city={city} name={name} bio={bio} bioExt={bioExt} />
        <SocialMedia socialMedia={socialMedia} />
      </div>
    </div>
  );
}
