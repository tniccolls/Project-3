import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Carousel from './pages/Carousel';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path = "/testpage" component={Carousel} />
          <Route component={NoMatch} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
