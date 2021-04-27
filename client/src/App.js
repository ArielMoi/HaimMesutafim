import React, { useState } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import Input from './components/Input';
import CurrentVol from './components/CurrentVol';
import Card from './components/Card';
import './app.css';

function App() {
  const [currentData, setCurrentData] = useState(null);
  const [saved, setSaved] = useState([]);
  const [redirect, setRedirect] = useState(null);

  const addToSaved = (newSave) => {
    setSaved([...saved, newSave]);
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        {/* {redirect ? <Redirect to={redirect}/> : null} */}
        <Route path="/" exact>
          <Input states={{ setCurrentData, setSaved, addToSaved }} />
          {currentData ? <CurrentVol data={currentData} /> : null}
        </Route>

        <Route path="/history" exact>
          <div className="grid">
          {setSaved.length
            ? saved.map((item, index) => {
                return <Card item={item} key={index} onClick={() => {
                  const newSaved = saved.filter(i => item !== i);
                  setSaved(newSaved);
                  // setCurrentData(item);
                  // setRedirect('/');
                }} />;
              })
            : null}
          </div>
        </Route>
        <Route path="/details/:id" exact>

        </Route>
      </Router>
    </div>
  );
}

export default App;
