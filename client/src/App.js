import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import MessageBoard from "./pages/MessageBoard";
import Carousel from './pages/Carousel';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div>
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={MessageBoard} />
          <Route exact path = "/testpage" component={Carousel} />
          <Route exact path = "/signup" component={Signup} />
          <Route exact path = "/login" component={Login} />
          <Route component={NoMatch} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
