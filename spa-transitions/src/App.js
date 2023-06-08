import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
<Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />

</Routes>
      </div>
    </Router>
  );
};

export default App;