import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import MessageBoard from "./pages/MessageBoard";
import Carousel from './pages/Carousel';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/posts" component={MessageBoard} />
          <Route exact path = "/" component={Carousel} />
          <Route component={NoMatch} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
