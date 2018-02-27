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
import MetaTags from 'react-meta-tags';

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
        <MetaTags>
          <meta name="description" content="Corl is aiming to create the world’s first regulatory-compliant revenue-sharing token designed to support &amp; participate in the growth of emerging companies." />
          <link rel="canonical" href="https://corl.io/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Revenue sharing on the blockchain | Corl" />
          <meta property="og:description" content="Corl’s revenue sharing makes it easy for crypto investors to invest in companies through a digital token and earn competitive returns." />
          <meta property="og:url" content="https://corl.io/" />
          <meta property="og:site_name" content="Corl" />
          <meta property="fb:admins" content="879081368002" />
          <meta property="og:image" content="https://corl.io/wp-content/media/images/bg/header-illustration.png" />
          <meta property="og:image:secure_url" content="https://corl.io/wp-content/media/images/bg/header-illustration.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content="Corl’s revenue sharing makes it easy for crypto investors to invest in companies through a digital token and earn competitive returns." />
          <meta name="twitter:title" content="Revenue sharing on the blockchain | Corl" />
          <meta name="twitter:site" content="@getcorl" />
          <meta name="twitter:image" content="https://corl.io/wp-content/media/images/bg/header-illustration.png" />
          <meta name="twitter:creator" content="@getcorl" />
        </MetaTags>
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