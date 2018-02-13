import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header id="main-header" data-height-onload="75">
        <div className="container clearfix et_menu_container">
          <div className="logo_container">
            <span className="logo_helper"></span>
            <a href="https://corl.io/">
              <img src="https://corl.io/wp-content/media/images/CORL-logo.svg" alt="Corl" id="logo" data-height-percentage="65" />
            </a>
          </div>
          <div id="et-top-navigation" data-height="75" data-fixed-height="75">
            <nav id="top-menu-nav">
              <ul id="top-menu" className="nav">
                <li id="menu-item-27494" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27494"><a onClick={() => this.props.history.push('/whitepaper')}>Whitepaper</a></li>
                <li id="menu-item-28540" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28540"><a href="https://corl.io/airdrop/">Airdrop Program</a></li>
                <li id="menu-item-28541" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28541"><a href="https://bitcointalk.org/index.php?topic=2876865.msg29553585#msg29553585">Bounty Program</a></li>
                <li id="menu-item-26964" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26964"><a href="https://corl.io/companies/">For Companies</a></li>
                <li id="menu-item-26963" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26963"><a href="https://corl.io/investors/">For Investors</a></li>
                <li id="menu-item-25658" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25658"><a href="https://corl.io/about/">About</a></li>
                <li id="menu-item-28500" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28500"><a href="https://blog.corl.io/">Blog</a></li>
                <li id="menu-item-28184" className="menu-cta-telegram menu-item menu-item-type-custom menu-item-object-custom menu-item-28184"><a href="https://t.me/corltoken"><i className="fa fa-telegram"></i> Join us on Telegram</a></li>
              </ul>
            </nav>
            <div id="et_mobile_nav_menu">
              <div className="mobile_nav closed">
                <span className="select_page">Select Page</span>
                <span className="mobile_menu_bar mobile_menu_bar_toggle"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="et_search_outer">
          <div className="container et_search_form_container">
            <form role="search" method="get" className="et-search-form" action="https://corl.io/">
              <input type="search" className="et-search-field" placeholder="Search &hellip;" value="" name="s" title="Search for:" />
            </form>
            <span className="et_close_search_field"></span>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(connect(null, null)(Header));