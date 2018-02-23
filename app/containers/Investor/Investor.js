import React from 'react';
import Banner from '../../components/investor/Banner/Banner';
import Work from '../../components/investor/Work/Work';
import Register from '../../components/investor/Register/Register';
import Corl from '../../components/investor/Corl/Corl';
import Detail from '../../components/investor/Detail/Detail';
import ModelInvestor from '../HomePage/ModelInvestor';

class Investor extends React.Component {
  state = { investorModel: false }
  componentWillMount() {
    document.title = "Investors | Revenue share on the blockchain | Corl";
  }
  showInvestorModal() {
    return (
      <ModelInvestor
        closeInvestorModel={(value) => {
          this.setState({ investorModel: value })
        }}
      />
    )
  }

  render() {
    return (
      <div className="main-content">
        <Banner
          openInvestorModel={(value) => {
            this.setState({ investorModel: true })
          }}
        />
        <Detail />
        <Corl />
        <Work />
        <Register
          openInvestorModel={(value) => {
            this.setState({ investorModel: true })
          }}
        />
        {this.state.investorModel ? this.showInvestorModal() : null}
      </div>
    )
  }
}

export default Investor;
