import React from 'react';
import "./corl.css"
import mutual from '../../../images/mutually-beneficial.svg';
import simple from '../../../images/simple-process.svg';
import insight from '../../../images/insights.svg';
class Corl extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="choose-corl py-sections text-center">
        <div className="container-wide">
          <div className="container-inner-padd choose-corl-inner">
            <h2 className="similar-heading">Why choose Corl?</h2>
            <p className="light-text light-text-padd mb-0 mb-lg-3">Corl's revenue-sharing makes it easy for investors to support the growth of emerging companies through a digital token and earn competitive returns.</p>
          </div>
          <div className="container-inner-padd choose-corl-inner">
            <div className="row">
              <div className="col col-12 col-lg-4">
                <div className="choose-corl-block">
                  <div className="choose-corl-img">
                    <img src={mutual} alt="Mutually Beneficial" />
                  </div>
                  <div className="choose-corl-detail">
                    <h4 className="d-inline-block w-100 similar-subHeading">Mutually Beneficial</h4>
                    <p className="light-text mb-0">Revenue-sharing aligns the interests of entrepreneurs and investors.</p>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-lg-4">
                <div className="choose-corl-block">
                  <div className="choose-corl-img">
                    <img src={simple} alt="Simply and Easy Process" />
                  </div>
                  <div className="choose-corl-detail">
                    <h4 className="d-inline-block w-100 similar-subHeading">Simple and Easy Process</h4>
                    <p className="light-text mb-0">Fundraising and investing have never been easier. Request early access today!</p>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-lg-4">
                <div className="choose-corl-block">
                  <div className="choose-corl-img">
                    <img src={insight} alt="Exclusive Insights" />
                  </div>
                  <div className="choose-corl-detail">
                    <h4 className="d-inline-block w-100 similar-subHeading">Transparency</h4>
                    <p className="light-text mb-0">Track all revenue-sharing investments with a few simple clicks in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-inner-padd choose-corl-inner">
            <a href="#" className="btn btn-early-access d-inline-block mt-0">Get Early Access</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Corl;