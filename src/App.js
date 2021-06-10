
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
          <Route path='/'>
          <Header />
          </Route>
          <Route path='/matches'>
            <Matches />
          </Route>
          <Route path='/users/:id'>
            <Match />  
          </Route>
          <Route path='/confirm'>
            <Confirmation />
          </Route >
        </Switch>
      </Router>
    </div>
  );
}

export default App;
