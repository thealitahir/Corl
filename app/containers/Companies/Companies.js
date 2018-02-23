import React from 'react';
import Banner from '../../components/companies/Banner/Banner';
import Detail from '../../components/companies/Detail/Detail';
import Finance from '../../components/companies/Finance/Finance';
import Stackup from '../../components/companies/Stackup/Stackup';
import ModelCompany from '../HomePage/ModelCompany';
class Companies extends React.Component {
  componentWillMount() {
    document.title = "Companies | Revenue share on the blockchain | Corl";
  }
  state = { showModel: false }
  renderModel() {
    return (
      <ModelCompany
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
          showModel={(value) => {
            this.setState({ showModel: value })
          }}
        />
        <Detail />
        <Finance />
        <Stackup
          showModel={(value) => {
            this.setState({ showModel: value })
          }}
        />
        {this.state.showModel ? this.renderModel() : null}
      </div>
    )
  }
}

export default Companies;
