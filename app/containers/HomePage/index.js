/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Button } from 'reactstrap';
import Corl from '../../components/home/Corl/Corl';
import Banner from '../../components/home/Banner/Banner';
import Benifits from '../../components/home/Benifits/Benifits';
import Revenue from '../../components/home/Revenue/Revenue';
import Works from '../../components/home/Works/Works';
import Model from './Model';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    document.title = "Revenue share on the blockchain | Corl";
  }
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
      <div>
        <div className="main-content home-content">
          <Banner
            setModelFlag={(value) => {
              this.setState({ showModel: value })
            }}
          />
          <Corl
            setModelFlag={(value) => {
              this.setState({ showModel: value })
            }}
          />
          <Works />
          <Benifits
            setModelFlag={(value) => {
              this.setState({ showModel: value })
            }}
          />
          <Revenue />
        </div>
        {this.state.showModel ? this.renderModel() : null}
      </div>



    );
  }
}

export default HomePage;