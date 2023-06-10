import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Navigation from './Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
