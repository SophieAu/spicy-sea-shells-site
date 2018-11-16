import React from 'react'
import ProfileCard from './ProfileCard'
import profiles from './profiles.json'
import './Profiles.scss';

export default class Profiles extends React.Component {

  profileCards = () => (profiles.map((profile,i) => (<ProfileCard key={i} info={profile} />)))

  render = () => (
    <>
    <main className="body">
      {this.profileCards()}
    </main>
    </>
  )
}
