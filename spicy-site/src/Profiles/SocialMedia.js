import React from "react";

export default ({ socialMedia }) => (
  <div className="social-media">
    <hr />
    <div className="links">
      {Object.entries(socialMedia).map((entry, i) => (
        <a key={i} href={entry[1]}>
          <img
            src={"/img/social-media/" + entry[0] + ".svg"}
            alt={"logo of " + entry[0]}
          />
        </a>
      ))}
    </div>
  </div>
);
