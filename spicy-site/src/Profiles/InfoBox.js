import React from "react";

export default ({ name, city, bio, bioExt }) => (
  <div className="info">
    <h4 className="city">{city}</h4>
    <h2 className="name">{name}</h2>
    <p className="bio">
      {bio}
      <span className="-extended"> {bioExt}</span>
    </p>
  </div>
);
