import React from 'react';
import Banner from '../../components/press/Banner/Banner';
import Inquiry from '../../components/press/Inquiry/Inquiry';
import Detail from '../../components/press/Detail/Detail';

class Press extends React.Component {
  componentWillMount() {
    document.title = "Press | Revenue share on the blockchain | Corl";
  }
  render() {
    return (
      <div className="main-content">
        <Banner />
        <Detail />
        <Inquiry />
      </div>
    )
  }
}

export default Press;
