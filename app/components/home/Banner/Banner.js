import React from 'react';
import "./banner.css";
import finance from '../../../images/yahoo-finance.png';
import canada from '../../../images/btc-canada.png';
import tech from '../../../images/TechBullionLogo.png';
import mtlintech from '../../../images/mtlintech.png';
import techvibe from '../../../images/techvibes.png';
import bank from '../../../images/banknxt.png';
class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderPage() {
    return (
      <div>
        <div className="revenue-sharing py-sections">
          <div className="container-wide mx-auto">
            <div className="row">
              <div className="col col-12 col-lg-7">
                <div className="revenue-sharing-content">
                  <h1>Revenue sharing on the blockchain</h1>
                  <p>The world's first revenue-sharing token designed to support and participate in the growth of emerging companies.</p>
                  <a onClick={() => this.props.setModelFlag(true)} className="btn btn-early-access d-inline-block">Get Early Access</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="media-et">
          <div className="six-columns media-mention w-100">
            <div className="media-et-module text-center yahoo-finance-module">
              <span><img src={finance} alt="IMG" /></span>
            </div>
            <div className="media-et-module text-center btc-canada-module">
              <span><img src={canada} alt="IMG" /></span>
            </div>
            <div className="media-et-module text-center techBullion-module">
              <span><img src={tech} alt="IMG" /></span>
            </div>
            <div className="media-et-module text-center mtlintech-module">
              <span><img src={mtlintech} alt="IMG" /></span>
            </div>
            <div className="media-et-module text-center techvibes-module">
              <span><img src={techvibe} alt="IMG" /></span>
            </div>
            <div className="media-et-module text-center banknxt-module">
              <span><img src={bank} alt="IMG" /></span>
            </div>
          </div>
        </div>
      </div>

    );
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }
}

export default Banner;