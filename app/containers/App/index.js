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
import { Switch, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhitePaper from '../WhitePaper/WhitePaper';
import Companies from '../Companies/Companies';
import AirDrop from '../AirDrop/AirDrop';
import Term from '../Term/Term';
import Privacy from '../Privacy/Privacy';
import Investor from '../Investor/Investor';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Press from '../Press/Press';
import Faq from '../Faq/Faq';
import Error404 from '../Error/Error404';
import Error500 from '../Error/Error500';
import $ from 'jquery';
export default function App() {
  $('.description-bar').removeClass("getFix");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass("shadowTop");
    } else if ($(this).scrollTop() < 50) {
      $('.header').removeClass("shadowTop");

    }
  });
  return (
    <div className="off-canvas-container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/whitepaper' component={WhitePaper} />
        <Route path='/companies' component={Companies} />
        <Route path='/airdrop' component={AirDrop} />
        <Route path='/term' component={Term} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/investor' component={Investor} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/press' component={Press} />
        <Route path='/faq' component={Faq} />
        <Route path='/404' component={Error404} />
        <Route path='/500' component={Error500} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}
