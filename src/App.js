
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './components/Header.js'
import Matches from './components/Matches.js'
import Match from './components/Match.js'
import Confirmation from './components/Confirmation.js'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
          <Header />
          </Route>
          <Route exact path='/matches'>
            <Matches />
          </Route>
          <Route exact path='/users/:id'>
            <Match />  
          </Route>
          <Route exact path='/confirm'>
            <Confirmation />
          </Route >
        </Switch>
      </Router>
    </div>
  );
}

export default App;
