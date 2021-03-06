import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../images/CORL-logo.svg';
import "./header.css"
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/" ><img src={logo} alt="Corl" id="logo" width="140" /></a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/crltoken" >Whitepaper</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/airdrop" >Airdrop Program</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://bitcointalk.org/index.php?topic=2876865.msg29553585/msg29553585" target="_blank">Bounty Program</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/companies" >For Companies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/investor" >For Investors</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about" >About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="" href="https://blog.corl.io/">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="" href="https://t.me/corltoken"><i className="fa fa-telegram"></i> Join us on Telegram</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(connect(null, null)(Header));