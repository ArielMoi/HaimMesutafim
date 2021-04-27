import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import './app.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Nav/>
          <Route path="/">

          </Route>

          <Route path="/history">

          </Route>

          <Route path="/details/:id">

          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
