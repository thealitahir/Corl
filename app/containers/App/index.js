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

export default function App() {
  return (
    <div className="off-canvas-container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/whitepaper' component={WhitePaper} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
