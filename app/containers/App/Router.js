import React from 'react';
import { Switch, Route } from 'react-router-dom';
import $ from 'jquery';
import HomePage from 'containers/HomePage';
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
import Sitemap from '../Sitemap/Sitemap';

class Router extends React.Component {

  render() {
    $(document).ready(function () {
      $(window).scrollTop(0);
    });
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/crltoken' component={WhitePaper} />
        <Route path='/companies' component={Companies} />
        <Route path='/airdrop' component={AirDrop} />
        <Route path='/term' component={Term} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/investor' component={Investor} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/press' component={Press} />
        <Route path='/faq' component={Faq} />
        <Route path='/page-sitemap.xml' component={Sitemap} />
        <Route path='/404' component={Error404} />
        <Route path='/500' component={Error500} />
        <Route component={Error404} />
      </Switch>

    );
  }
}
export default Router;