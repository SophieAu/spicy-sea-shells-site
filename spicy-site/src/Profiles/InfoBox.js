import React from "react";

export default ({ name, city, bio, bioShort }) => (
  <div className="info">
    <h4 className="city">{city}</h4>
    <h2 className="name">{name}</h2>
    <p className="bio -long">{bio}</p>
    <p className="bio -short">{bioShort}</p>
  </div>
);
