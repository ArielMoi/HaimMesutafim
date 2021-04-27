import React, { useState } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Input from './components/Input';
import CurrentVol from './components/CurrentVol';
import Card from './components/Card';
import './app.css';

function App() {
  const [currentData, setCurrentData] = useState(null);
  const [saved, setSaved] = useState([]);

  const addToSaved = (newSave) => {
    setSaved([...saved, newSave]);
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/" exact>
          <Input states={{ setCurrentData, setSaved, addToSaved }} />
          {currentData ? <CurrentVol data={currentData} /> : null}
        </Route>

        <Route path="/history" exact>
          {setSaved.length
            ? saved.map((item, index) => {
                return <Card item={item} key={index} />;
              })
            : null}
        </Route>
        <Route path="/details/:id" exact>

        </Route>
      </Router>
    </div>
  );
}

export default App;
