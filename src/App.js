// import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import NavbarMain from './components/NavbarMain'
import Matches from './pages/Matches.js'
import Match from './pages/Match.js'
import Confirmation from './pages/Confirmation.js'

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMain />
          <Switch>
            <Route path='/pages/matches'>
              <Matches />
            </Route>
            <Route path='/pages/users/:id'>
              <Match />  
            </Route>
            <Route path='/pages/confirmation'>
              <Confirmation />
            </Route >
        </Switch>
      </Router>
    </div>
  );
}

export default App;
