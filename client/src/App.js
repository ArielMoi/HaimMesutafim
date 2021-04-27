import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Box from './components/Box';
import Input from './components/Input'
import './app.css';

function App() {
  return (
    <div className="App">
      <Input/>
      <Router>

          <Nav/>
          <Route path="/" exact>

          </Route>

          <Route path="/history" exact>

          </Route>

          <Route path="/details/:id" exact>
            
          </Route>

          <Route path="/box" exact>
            <Box/>
          </Route>

      </Router>
    </div>
  );
}

export default App;
