import React from 'react';
import Banner from '../../components/faq/Banner/Banner';
import Contact from '../../components/faq/Contact/Contact';
import Entrepreneur from '../../components/faq/Entrepreneur/Entrepreneur';
import General from '../../components/faq/General/General';
import Invester from '../../components/faq/Invester/Invester';
import Model from '../HomePage/Model';
import ModelInvestor from '../HomePage/ModelInvestor';


import $ from 'jquery';
window.jQuery = $;
import bootstrap from 'bootstrap';
class Faq extends React.Component {
  state = { showModel: false, investorModel: false }
  componentWillMount() {
    document.title = "FAQ | Revenue share on the blockchain | Corl";
  }
  renderModel() {
    return (
      <Model
        closeModel={(value) => {
          this.setState({ showModel: value })
        }}
      />
    )
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
        <Banner />
        <div className="faqs-main py-sections">
          <div className="container-wide">
            <div className="container-inner-padd">
              <General
                setModelFlag={(value) => {
                  this.setState({ showModel: value })
                }}
              />
              <Entrepreneur
                setModelFlag={(value) => {
                  this.setState({ showModel: value })
                }}
              />
              <Invester
                openInvestorModel={(value) => {
                  this.setState({ investorModel: true })
                }}
              />
            </div>
          </div>
        </div>

        <Contact />
        {this.state.showModel ? this.renderModel() : null}

      </div>

    )
  }
}

export default Faq;
