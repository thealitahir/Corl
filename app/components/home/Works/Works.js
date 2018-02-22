import React from 'react';
import "./works.css"
import work from '../../../images/how-corl-works.svg';

class Works extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="how-works py-sections bg-grey text-center position-relative section-lines">
        <div className="container-wide">
          <div className="container-inner-padd">
            <h2 className="similar-heading">How it works?</h2>
            <p className="light-text light-text-padd mb-0">The Corl token represents equity ownership in our company. We provide revenue-sharing financing to high-potential early-revenue companies. Our token utilizes blockchain technology to issue tokenized dividends to its investors and provide a transparent and KYC-compliant ownership model.</p>
          </div>
          <div className="container-inner-padd">
            <div className="how-works-img d-flex justify-content-center">
              <span className="d-inline-block"><img src={work} alt="How revenue sharing works" /></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;