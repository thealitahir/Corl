/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import $ from 'jquery';
import ReactGA from 'react-ga';
import GoogleTag from './GoogleTag';
import Router from './Router';

class App extends React.Component {
  constructor() {
    super();

    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize('UA-86023410-1');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    $('.description-bar').removeClass("getFix");
    return (
      <div className="off-canvas-container">
        <Header />
        <GoogleTag gtmId='GTM-T8CG9SD' />
        <Router />
        <Footer />
      </div>
    );
  }
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.header').addClass("shadowTop");
  } else if ($(this).scrollTop() < 50) {
    $('.header').removeClass("shadowTop");

  }
});
export default App;