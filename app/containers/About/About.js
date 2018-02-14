import React from 'react';
import Banner from '../../components/about/Banner/Banner';
import Detail from '../../components/about/Detail/Detail';
import Hiring from '../../components/about/Hiring/Hiring';
import Partner from '../../components/about/Partner/Partner';
import Team from '../../components/about/Team/Team';

class About extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Banner />
        <Detail />
        <Team />
        <Partner />
        <Hiring />
      </div>
    )
  }
}

export default About;
