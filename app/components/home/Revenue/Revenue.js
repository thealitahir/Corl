import React from 'react';
import "./revenue.css";
import chart from '../../../images/rbf-chart.svg';

class Revenue extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="revenue-sharing-what py-sections bg-grey position-relative section-lines">
          <div className="container-wide">
            <div className="container-inner-padd">
              <h2 className="similar-heading mb-0">What is revenue sharing?</h2>
            </div>
            <div className="container-inner-padd">
              <div className="row">
                <div className="col col-12 col-lg-6">
                  <p className="light-text mb-3 px-0">Revenue-sharing or revenue based financing is a type of funding whereby investors inject capital into a business in return for a percentage of its revenue. The loan payments are tied to monthly revenue, going up for strong-revenue months and down for low-revenue months.</p>
                  <p className="light-text mb-5 mb-lg-0 px-0">For investors, it provides the opportunity to access robust revenue potential. Mutually beneficial? You bet! At Corl, we know that when the interests of entrepreneurs and investors are aligned, that’s when true growth begins.</p>
                </div>
                <div className="col col-12 col-lg-6">
                  <span className="d-inline-block w-100 pl-md-3"><img src={chart} alt="Revenue Sharing Chart" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-faqs py-sections">
          <div className="container-wide">
            <div className="container-inner-padd mb-0">
              <div className="row">
                <div className="col col-12 col-lg-6">
                  <div className="view-faqs-detail pr-lg-5">
                    <h4 className="similar-subHeading">Simple transparent pricing</h4>
                    <p className="light-text mb-0">Our revenue-sharing structure uses a simple, transparent pricing model so you know your total commitment from day one without any dilution.</p>
                  </div>
                </div>
                <div className="col col-12 col-lg-6">
                  <div className="view-faqs-detail pl-lg-3">
                    <h4 className="similar-subHeading">Got questions?</h4>
                    <p className="light-text mb-0">We've built a comprehensive list of FAQs to answer your questions and make your visit worthwhile.</p>
                    <div className="container-inner-padd choose-corl-inner pb-0 mb-0">
                      <a href="#" className="btn btn-early-access d-inline-block">View FAQs</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Revenue;