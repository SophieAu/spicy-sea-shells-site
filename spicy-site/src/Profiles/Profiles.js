import React from "react";
import ProfileCard from "./ProfileCard";
import profiles from "../profiles.json";
import "./Profiles.scss";

export default () => (
  <main className="body">
    {profiles.map((profile, i) => (
      <ProfileCard key={i} info={profile} />
    ))}
  </main>
);
