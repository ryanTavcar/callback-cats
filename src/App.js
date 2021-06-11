// import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import NavbarMain from './components/NavbarMain';
import Matches from './pages/Matches.js';
import Match from './pages/Match.js';
import Confirmation from './pages/confirmation';
import Home from './pages/';
import About from './pages/about';
import Profile from './pages/profile'

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMain />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route >
            <Route exact path='/pages/matches'>
              <Matches />
            </Route>
            <Route exact path='/pages/Match'>
              <Match />  
            </Route>
            <Route exact path='/pages/confirmation'>
              <Confirmation />
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
