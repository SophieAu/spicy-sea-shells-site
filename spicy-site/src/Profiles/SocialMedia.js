import React from "react";

export default class socialMedia extends React.Component {
  renderLinks = () =>
    Object.entries(this.props.socialMedia).map((entry, i) => (
      <a key={i} href={entry[1]}>
        <img
          src={"/img/social-media/" + entry[0] + ".svg"}
          alt={"logo of " + entry[0]}
        />
      </a>
    ));

  render = ({ socialMedia } = this.props) => (
    <div className="social-media">
      <hr />
      <div className="links">{this.renderLinks()}</div>
    </div>
  );
}
