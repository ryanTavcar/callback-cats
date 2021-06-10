// import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import NavbarMain from './components/NavbarMain';
import Matches from './pages/Matches.js';
import Match from './pages/Match.js';
import Confirmation from './pages/Confirmation.js';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile'

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMain />
          <Switch>
            <Route exact path='/pages/matches'>
              <Matches />
            </Route>
            <Route exact path='/pages/users/:id'>
              <Match />  
            </Route>
            <Route exact path='/pages/confirmation'>
              <Confirmation />
            </Route >
            <Route exact path='/pages/home'>
              <Home />
            </Route >
            <Route exact path='/pages/home'>
              <Home />
            </Route >
            <Route exact path='/pages/about'>
              <About />
            </Route >
            <Route exact path='/pages/profile'>
              <Profile />
            </Route >
        </Switch>
      </Router>
    </div>
  );
}

export default App;
