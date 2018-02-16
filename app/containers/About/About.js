import React from 'react';
import Banner from '../../components/about/Banner/Banner';
import Detail from '../../components/about/Detail/Detail';
import Hiring from '../../components/about/Hiring/Hiring';
import Partner from '../../components/about/Partner/Partner';
import Team from '../../components/about/Team/Team';
import Model from '../HomePage/Model';

class About extends React.Component {
  state = { showModel: false }
  renderModel() {
    return (
      <Model
        closeModel={(value) => {
          this.setState({ showModel: value })
        }}
      />
    )
  }
  render() {
    return (
      <div className="main-content">
        <Banner
          setModelFlag={(value) => {
            this.setState({ showModel: value })
          }}
        />
        <Detail />
        <Team />
        <Partner />
        <Hiring />
        {this.state.showModel ? this.renderModel() : null}
      </div>
    )
  }
}

export default About;
