import React from 'react';
import "./benifits.css"
import company from '../../../images/company.svg';
import invester from '../../../images/investors.svg';

class Benifits extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="benefits-investor py-sections text-center position-relative section-lines">
        <div className="container-wide">
          <div className="container-inner-padd">
            <h2 className="similar-heading">Benefits to entrepreneurs and investors</h2>
            <p className="light-text light-text-padd mb-0">A straightforward investment method based on revenue.</p>
          </div>
          <div className="benefits-block-container mx-auto">
            <div className="benefits-block text-left">
              <div className="row">
                <div className="col col-12 col-lg-6">
                  <div className="benefits-detail-container">
                    <div className="benefits-detail">
                      <div className="benefits-detail-head d-flex align-items-center justify-content-start">
                        <span className="benefits-detail-img"><img src={company} alt="Companies" /></span>
                        <h4 className="text-uppercase similar-subHeading">Companies</h4>
                      </div>
                      <ul className="benefits-list">
                        <li>Access to long-term growth capital within 2 weeks.</li>
                        <li>Grow on your own terms without any dilution or personal guarantees.</li>
                        <li>Remain in full control of your company.</li>
                        <li>Flexible repayment approach—pay as you grow.</li>
                      </ul>
                      <a href="https://corl.io/companies/">Learn more about revenue sharing</a>
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-lg-6">
                  <div className="benefits-detail-container ml-md-auto">
                    <div className="benefits-detail">
                      <div className="benefits-detail-head d-flex align-items-center justify-content-start">
                        <span className="benefits-detail-img"><img src={invester} alt="Investors" /></span>
                        <h4 className="text-uppercase similar-subHeading">INVESTORS</h4>
                      </div>
                      <ul className="benefits-list">
                        <li>Receive a continuous stream of quarterly dividends, based on future earnings of Corl.</li>
                        <li>Earn up to 15-30% annually.</li>
                        <li>Diversify your portfolio beyond stocks and bonds through crypto assets.</li>
                        <li>Help support emerging companies.</li>
                      </ul>
                      <a href="https://corl.io/investors/">Learn more about investing</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-inner-padd choose-corl-inner">
            <a href="#" className="btn btn-early-access d-inline-block">Get Early Access</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Benifits;