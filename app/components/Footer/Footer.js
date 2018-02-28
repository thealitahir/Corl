import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import "./footer.css";

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row" id="footer-widgets">
            <div className="col col-12 col-lg-3 col-sm-6">
              <h4 className="title">Company</h4>
              <ul id="menu-footer-company" className="menu">
                <li id="menu-item-26845" className="menu-item"><a href="/about">About</a></li>
                <li id="menu-item-26851" className="menu-item"><a href="/press">Press</a></li>
                <li id="menu-item-26921" className="menu-item"><a href="/contact">Contact Us</a></li>
                <li id="menu-item-26922" className="menu-item"><a target="_blank" href="https://angel.co/corl/jobs">Careers</a></li>
              </ul>
            </div>
            <div className="col col-12 col-lg-3 col-sm-6">
              <h4 className="title">LEARN</h4>
              <ul id="menu-footer-learn" className="menu">
                <li id="menu-item-28538" className="menu-item"><a href="https://blog.corl.io/">Blog</a></li>
                <li id="menu-item-26924" className="menu-item"><a href="/faq">FAQ</a></li>
              </ul>
            </div>
            <div className="col col-12 col-lg-3 col-sm-6">
              <h4 className="title">LEGAL</h4>
              <ul id="menu-footer-legal" className="menu">
                <li id="menu-item-26927" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26927"><a href="/term" >Terms of Use</a></li>
                <li id="menu-item-26926" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26926"><a href="/privacy" >Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col col-12 col-lg-3 col-sm-6">
              <h4 className="title">Company</h4>
              <ul id="menu-footer-connect" className="menu">
                <li id="menu-item-26923" className="menu-item"><a href="mailto:hello@corl.io">Email</a></li>
                <li id="menu-item-26847" className="menu-item"><a target="_blank" href="https://www.twitter.com/getcorl">Twitter</a></li>
                <li id="menu-item-26846" className="menu-item"><a target="_blank" href="https://www.facebook.com/getcorl">Facebook</a></li>
                <li id="menu-item-26848" className="menu-item"><a target="_blank" href="https://www.linkedin.com/company/corl">LinkedIn</a></li>
                <li id="menu-item-26849" className="menu-item"><a target="_blank" href="https://www.instagram.com/getcorl/">Instagram</a></li>
                <li id="menu-item-28144" className="menu-item"><a target="_blank" href="https://t.me/corltoken">Telegram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="footer-bottom">
          <div className="container clearfix">
            <p id="footer-info">
              This site is operated by Corl Financial Technologies Inc. ("Corl"), a Canadian Corporation.
              All the information on this website is published in good faith and for general information purpose only.
              All information provided by users and visitors of the Corl websites is not shared with or sold to third parties.
            <br /><br />
              © Copyright 2018 Corl Financial Technologies Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(connect(null, null)(Footer));