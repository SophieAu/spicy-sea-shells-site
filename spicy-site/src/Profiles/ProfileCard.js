import React from "react";
import "./ProfileCard.scss";
import ProfilePicture from "./ProfilePicture";
import InfoBox from "./InfoBox";
import SocialMedia from "./SocialMedia";

export default ({ info: { name, image, city, bio, bioExt, socialMedia } }) => (
  <div className="card">
    <ProfilePicture name={image} />
    <div className="profile">
      <InfoBox city={city} name={name} bio={bio} bioExt={bioExt} />
      <SocialMedia socialMedia={socialMedia} />
    </div>
  </div>
);
