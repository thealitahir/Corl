import React from 'react';
import Banner from '../../components/investor/Banner/Banner';
import Work from '../../components/investor/Work/Work';
import Register from '../../components/investor/Register/Register';
import Corl from '../../components/investor/Corl/Corl';
import Detail from '../../components/investor/Detail/Detail';

class Investor extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Banner />
        <Detail />
        <Corl />
        <Work />
        <Register />
      </div>
    )
  }
}

export default Investor;
