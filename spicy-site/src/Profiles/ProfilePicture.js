import React from "react";

const ProfilePicture = ({ name }) => (
  <>
    <div className="image -side">
      <img
        src={process.env.PUBLIC_URL + "/img/profiles/" + name + "_tall.jpg"}
        alt={name}
      />
    </div>
    <div className="image -top">
      <img
        src={process.env.PUBLIC_URL + "/img/profiles/" + name + "_wide.jpg"}
        alt={name}
      />
    </div>
  </>
);

export default ProfilePicture;
