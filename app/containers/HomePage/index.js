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
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="main-content home-content">
        <Banner />
        <Corl />
        <Works />
        <Benifits />
        <Revenue />
        <Corl />
      </div>

    );
  }
}
